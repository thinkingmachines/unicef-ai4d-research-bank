import csv
import glob
import io
import json
import os
import sys
import typing
from decimal import Decimal
from pathlib import Path
from urllib.request import urlopen

import ijson
import pandas as pd
import requests
import yaml
from image_generation_utils import (
    get_admin_gdf,
    get_gdf_data,
    make_image,
    make_multi_image,
)

from utils import (
    extract_column_metadata,
    get_gdown_response,
    get_link_filename,
    get_session,
    is_dataset_file,
    is_gdrive_url,
    is_hxltagged,
    transform_dataset_file_link,
)

CATALOG_DIR = "./catalog"
OUTPUT_PATH = "./public/api/data/catalog.json"


def transform_alt_format(new_link, use_gstorage=True):
    # include original link and type
    alt_formats = [dict(url=new_link["url"], type=new_link["type"])]
    if "alt-format" not in new_link:
        new_link["alt-format"] = alt_formats
        return new_link

    alt_format = new_link["alt-format"]
    if type(alt_format) == dict:
        alt_formats.append(
            transform_dataset_file_link(alt_format, use_gstorage=use_gstorage)
        )
    elif hasattr(alt_format, "__iter__"):  #
        alt_formats.extend(
            [
                transform_dataset_file_link(link, use_gstorage=use_gstorage)
                for link in alt_format
            ]
        )
    new_link["alt-format"] = alt_formats
    return new_link


def transform_links(links):
    new_links = []
    for link in links:
        new_link = transform_dataset_file_link(link.copy(), use_gstorage=True)
        if is_dataset_file(link):
            link_name = get_link_filename(link["url"], use_gstorage=True)
            if "name" not in new_link and link_name is not None:
                new_link["name"] = link_name
            new_link = transform_alt_format(new_link, use_gstorage=True)
        new_links.append(new_link)
    return new_links


def find_qualified_link(links):
    for link in links:
        if "url" in link and ("csv" in link["type"] or "geojson" in link["type"]):
            return link
        if "alt-format" in link:
            for alt_format in link["alt-format"]:
                if "csv" in alt_format["type"] or "geojson" in alt_format["type"]:
                    return alt_format
    return None


def get_csv_reader(url):
    if is_gdrive_url(url):
        resp, sess, _ = get_gdown_response(url)
        if (
            resp is None
            or resp.status_code != 200
            or "Content-Disposition" not in resp.headers
        ):
            return None, None
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
            return None, None
        if resp.status_code != 200:
            return None, None

    reader = csv.reader(resp.iter_lines(chunk_size=8192, decode_unicode=True))
    return resp, reader


def get_stream_json_reader(url):
    if is_gdrive_url(url):
        request_resp, _, updated_url = get_gdown_response(url)
        if (
            request_resp is None
            or request_resp.status_code != 200
            or "Content-Disposition" not in request_resp.headers
        ):
            return None, None
        url = updated_url

    try:
        resp = urlopen(url)
    except Exception as e:
        print(e, file=sys.stderr)
        return None, None

    if resp.status != 200:
        return None, None

    features = ijson.items(resp, "features.item")
    return resp, features


def grab_dataheaders(url, n_rows=10):
    resp, reader = get_csv_reader(url)
    if resp is None:
        return None, None, None

    header_columns, hxl_tags = None, None

    if is_hxltagged(reader):
        resp.close()
        resp, new_reader = get_csv_reader(url)
        if new_reader is not None:
            header_columns = next(new_reader)
            hxl_tags = next(new_reader)
    else:
        resp.close()
        resp, new_reader = get_csv_reader(url)
        if new_reader is not None:
            header_columns = next(new_reader)
            hxl_tags = None
    sample_data = []
    if new_reader is not None:
        for i, row in enumerate(new_reader):
            if i >= n_rows:
                break
            sample_data.append(row)
    if resp is not None:
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
        if resp is None:
            print(
                f"Warning for {item['id']}: Could not get geojson data from url {url}"
            )
            return item
        df = grab_geoproperties(features, nrows=nrows)
        resp.close()
        item["data-columns"] = make_data_columns(df, None)  # no hxltags for geojson
        sample_data = df.values.tolist()
        item["sample-data"] = make_sample_data(
            None, sample_data
        )  # no hxltags for geojson
    else:  # for csv
        column_names, hxl_tags, sample_data = grab_dataheaders(url)
        if column_names is None:
            print(f"Warning for {item['id']}: Could not get csv data from url {url}")
            return item

        df = make_df(column_names, sample_data)
        item["data-columns"] = make_data_columns(df, hxl_tags)
        item["sample-data"] = make_sample_data(hxl_tags, sample_data)
    return item


def find_geojson_link(links):
    for link in links:
        if "geojson" in link["type"]:
            return link["url"]
        if "alt-format" in link:
            for alt_link in link["alt-format"]:
                if "geojson" in alt_link["type"]:
                    return alt_link["url"]
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
    data_gdf = get_gdf_data(geojson_url, item_id)
    if data_gdf is not None:
        make_image(item_id, None, data_gdf, output_dir=Path("public/assets/items"))


def generate_multi_region_image(
    regions,
    image_args=dict(size=(17, 12), admin_color="b", data_color="r"),
    output_dir=Path(""),
):
    regions.sort()
    multi_region_name = "-".join(regions)
    admin_gdfs = [get_admin_gdf(region) for region in regions]
    make_multi_image(
        multi_region_name, admin_gdfs, None, output_dir=output_dir, **image_args
    )
    return 0


DEFAULT_DETAIL_IMAGE_URL = "assets/default-featured-image.jpg"


def add_detail_image_url(item: typing.Dict) -> typing.Dict:
    detail_img_url = DEFAULT_DETAIL_IMAGE_URL
    region = None
    if "country-region" in item:
        region = item["country-region"]
        if type(region) == str:  # single country/region
            detail_img_url = f'assets/regions/{item["country-region"]}.png'
    geojson_url = find_geojson_link(item["links"])
    if geojson_url is not None:
        if check_size(geojson_url):
            generate_detail_image(geojson_url, item["id"])
            detail_img_url = f'assets/items/{item["id"]}.png'
    if hasattr(region, "__iter__") and detail_img_url == DEFAULT_DETAIL_IMAGE_URL:
        region.sort()
        multi_region_name = "-".join(region)
        detail_img_url = f"assets/multiregions/{multi_region_name}.png"
        detail_path = Path(f"public/{detail_img_url}")
        if not detail_path.exists():
            generate_multi_region_image(
                region, output_dir=Path("public/assets/multiregions")
            )
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
        if "country-region" in item:
            if type(item["country-region"]) == str:
                item["country-region"] = [
                    item["country-region"]
                ]  # convert to list for uniformity

        return item


# see https://stackoverflow.com/questions/69104540/python-json-typeerror-object-of-type-decimal-is-not-json-serializable
# to fix TypeError: Object of type Decimal is not JSON serializable


def main():
    if os.path.exists(OUTPUT_PATH):
        catalog_mtime = os.path.getmtime(OUTPUT_PATH)
        with open(OUTPUT_PATH) as f:
            catalog_items = json.load(f)
    else:
        catalog_items = []
        catalog_mtime = None
    catalog_lookup = {item["id"]: item for item in catalog_items}

    files = glob.glob(f"{CATALOG_DIR}/*.yml")
    valid_files = [f for f in files if not f.endswith("sample-catalog-item.yml")]
    deleted_items = [
        item
        for item in catalog_lookup.keys()
        if not Path(f"{CATALOG_DIR}/{item}.yml").exists()
    ]
    if deleted_items:
        for item in deleted_items:
            catalog_lookup.pop(item)

    changed_files = [
        f
        for f in valid_files
        if Path(f).stem in catalog_lookup
        and catalog_mtime is not None
        and os.path.getmtime(f) > catalog_mtime
    ]
    if changed_files:
        changed_items = [transform(f) for f in changed_files]
        catalog_lookup.update({item["id"]: item for item in changed_items})
    new_files = [f for f in valid_files if Path(f).stem not in catalog_lookup]
    if new_files:
        new_items = [transform(f) for f in new_files]
        catalog_lookup.update({item["id"]: item for item in new_items})

    if deleted_items or changed_files or new_files or catalog_mtime is None:
        items = [v for _, v in catalog_lookup.items()]
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(items, f, cls=JSONEncoder)
    else:
        print("No changes detected, skipping update of catalog.json file")


if __name__ == "__main__":
    main()
