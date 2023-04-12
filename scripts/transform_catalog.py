import csv
import glob
import io
import json
import sys
from pathlib import Path

import pandas as pd
import requests
import yaml

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
    qualified = [link for link in links if "csv" in link["type"]]
    if qualified:
        return qualified[0]  # first qualified link
    return None


def get_csv_reader(url):
    if is_gdrive_url(url):
        resp, sess = get_gdown_response(url)
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
    return reader


def grab_dataheaders(url, n_rows=10):
    reader = get_csv_reader(url)
    if is_hxltagged(reader):
        new_reader = get_csv_reader(url)
        header_columns = next(new_reader)
        hxl_tags = next(new_reader)
    else:
        new_reader = get_csv_reader(url)
        header_columns = next(new_reader)
        hxl_tags = None
    sample_data = []
    for n in range(n_rows):
        try:
            sample_data.append(next(new_reader))
        except StopIteration:
            pass
    return header_columns, hxl_tags, sample_data


def make_df(column_names, sample_data):
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(column_names)
    writer.writerows(sample_data)
    input = io.StringIO(output.getvalue())
    df = pd.read_csv(input)
    return df


def make_data_columns(column_names, hxl_tags, sample_data):
    df = make_df(column_names, sample_data)
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


def add_data_column_samples(item):
    link = find_qualified_link(item["links"])
    if not link:
        return item
    url = link["url"]
    column_names, hxl_tags, sample_data = grab_dataheaders(url)
    if column_names:
        item["data-columns"] = make_data_columns(column_names, hxl_tags, sample_data)
        item["sample-data"] = make_sample_data(hxl_tags, sample_data)
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

        return item


def main():
    files = glob.glob(f"{CATALOG_DIR}/*.yml")
    items = [transform(f) for f in files if f != "sample-catalog-item.yml"]
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f)


if __name__ == "__main__":
    main()
