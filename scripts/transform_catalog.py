import csv
import glob
import io
import json
import sys
import typing
from decimal import Decimal
from pathlib import Path
from urllib.request import urlopen

import ijson
import pandas as pd
import requests
import yaml
from image_generation_utils import get_gdf_data, make_image

from utils import (
    extract_column_metadata,
    get_gdown_response,
    get_session,
    is_gdrive_url,
    is_hxltagged,
    transform_dataset_file_link,
)

CATALOG_DIR = "./catalog"
OUTPUT_PATH = "./public/api/data/catalog.json"


def transform_links(links):
    new_links = []
    for link in links:
        new_link = transform_dataset_file_link(link, use_gstorage=True)
        new_links.append(new_link)

    return new_links


def find_qualified_link(links):
    qualified = [
        link for link in links if "csv" in link["type"] or "geojson" in link["type"]
    ]
    if qualified:
        return qualified[0]  # first qualified link
    return None


def get_csv_reader(url):
    if is_gdrive_url(url):
        resp, sess, _ = get_gdown_response(url)
        if resp.status_code != 200 or "Content-Disposition" not in resp.headers:
            return None
    else:
        sess = get_session(proxy=None)
        try:
            resp = sess.get(url, stream=True, verify=True)
        except requests.exceptions.ProxyError as e:
            print(
                "An error has occurred using proxy:",
                sess.proxies,
                file=sys.stderr,
            )
            print(e, file=sys.stderr)

            return None
        if resp.status_code != 200:
            return None

    reader = csv.reader(resp.iter_lines(chunk_size=8192, decode_unicode=True))
    return resp, reader


def get_stream_json_reader(url):
    if is_gdrive_url(url):
        request_resp, _, updated_url = get_gdown_response(url)
        if request_resp.status_code != 200 or "Content-Disposition" not in resp.headers:
            return None
        url = updated_url

    try:
        resp = urlopen(url)
    except requests.exceptions.ProxyError as e:
        print(e, file=sys.stderr)
        return None
    if resp.status != 200:
        return None

    features = ijson.items(resp, "features.item")
    return resp, features


def grab_dataheaders(url, n_rows=10):
    resp, reader = get_csv_reader(url)
    if is_hxltagged(reader):
        resp.close()
        resp, new_reader = get_csv_reader(url)
        header_columns = next(new_reader)
        hxl_tags = next(new_reader)
    else:
        resp.close()
        resp, new_reader = get_csv_reader(url)
        header_columns = next(new_reader)
        hxl_tags = None
    sample_data = []
    for i, row in enumerate(new_reader):
        if i >= n_rows:
            break
        sample_data.append(row)

    resp.close()
    return header_columns, hxl_tags, sample_data


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return json.JSONEncoder.default(self, obj)


def grab_geoproperties(features, nrows=10):
    rows = []
    for i, feature in enumerate(features):
        if i >= nrows:
            break
        row = feature.get("properties", None)
        if row is not None:
            row["geometry"] = json.dumps(feature.get("geometry", None), cls=JSONEncoder)
        else:
            row = dict(
                geometry=json.dumps(feature.get("geometry", None), cls=JSONEncoder)
            )
        rows.append(row)
    df = pd.DataFrame(rows)
    return df


def make_df(column_names, sample_data):
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(column_names)
    writer.writerows(sample_data)
    input = io.StringIO(output.getvalue())
    df = pd.read_csv(input)
    return df


def make_data_columns(df, hxl_tags):
    final_colnames, column_types = extract_column_metadata(df)
    data_columns = []
    for i, (column_name, column_type) in enumerate(zip(final_colnames, column_types)):
        data_column = dict(name=column_name, type=column_type)
        if hxl_tags is not None and hxl_tags[i]:
            data_column.update(dict(hxltag=hxl_tags[i]))
        data_columns.append(data_column)
    return data_columns


def make_sample_data(hxl_tags, sample_data):
    if hxl_tags is not None:
        return [hxl_tags, *sample_data[:-1]]
    else:
        return sample_data


def add_data_column_samples(item, nrows=10):
    link = find_qualified_link(item["links"])
    if not link:
        return item

    url = link["url"]
    if "geojson" in link["type"]:
        resp, features = get_stream_json_reader(url)
        df = grab_geoproperties(features, nrows=nrows)
        resp.close()
        item["data-columns"] = make_data_columns(df, None)  # no hxltags for geojson
        sample_data = df.values.tolist()
        item["sample-data"] = make_sample_data(
            None, sample_data
        )  # no hxltags for geojson
    else:  # for csv
        column_names, hxl_tags, sample_data = grab_dataheaders(url)
        if column_names:
            df = make_df(column_names, sample_data)
            item["data-columns"] = make_data_columns(df, hxl_tags)
            item["sample-data"] = make_sample_data(hxl_tags, sample_data)
    return item


def find_geojson_link(links):
    for link in links:
        if "geojson" in link["type"]:
            return link["url"]
    return None


MAX_GEOJSON_SIZE_LIMIT = 1024 * 1024 * 150  # 150MB


def check_size(url):
    resp = requests.get(url)
    if resp.status_code != 200:
        return False
    if "Content-length" in resp.headers:
        size = int(resp.headers["Content-Length"])
        if size > MAX_GEOJSON_SIZE_LIMIT:
            return False
    return True


def generate_detail_image(geojson_url, item_id):
    data_gdf = get_gdf_data(geojson_url)
    make_image(item_id, None, data_gdf, output_dir=Path("public/assets/items"))


DEFAULT_DETAIL_IMAGE_URL = "assets/default-featured-image.jpg"


def add_detail_image_url(item: typing.TypedDict) -> typing.TypedDict:
    detail_img_url = DEFAULT_DETAIL_IMAGE_URL
    if "country-region" in item:
        detail_img_url = f'assets/regions/{item["country-region"]}.png'
    geojson_url = find_geojson_link(item["links"])
    if geojson_url is not None:
        if check_size(geojson_url):
            generate_detail_image(geojson_url, item["id"])
            detail_img_url = f'assets/items/{item["id"]}.png'

    item["detail-image-url"] = detail_img_url
    return item


def transform(filename: str):
    file = Path(filename)
    with open(file) as f:
        item = yaml.safe_load(f)
        item["id"] = file.stem
        if "links" in item:
            item["links"] = transform_links(item["links"])
            if "data-columns" not in item:
                item = add_data_column_samples(item)
        item = add_detail_image_url(item)
        return item


# see https://stackoverflow.com/questions/69104540/python-json-typeerror-object-of-type-decimal-is-not-json-serializable
# to fix TypeError: Object of type Decimal is not JSON serializable


def main():
    files = glob.glob(f"{CATALOG_DIR}/*.yml")
    items = [transform(f) for f in files if not f.endswith("sample-catalog-item.yml")]
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f, cls=JSONEncoder)


if __name__ == "__main__":
    main()
