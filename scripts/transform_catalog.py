import glob
import json
import re
from pathlib import Path

import gdown.parse_url as gdp
import yaml

from utils import is_gdrive_url

CATALOG_DIR = "./catalog"
OUTPUT_PATH = "./public/api/data/catalog.json"

GITHUB_URL_PAT = r"https:\/\/github.com\/(\S+)\/blob(\/\S+)"
RAW_GH_LINK_REPL = r"https://raw.githubusercontent.com/\1\2"


def is_github_url(url):
    return re.match(GITHUB_URL_PAT, url) is not None


DATASET_LINK_TYPE_PAT = r"dataset-(\S+)"
DATASET_RAW_LINK_TYPE_REPL = r"dataset-raw-\1"


def transform_github_url(url):
    raw_link = re.sub(GITHUB_URL_PAT, RAW_GH_LINK_REPL, url)
    return raw_link


def transform_linktype2raw(linktype):
    if re.match(DATASET_LINK_TYPE_PAT, linktype) is not None:
        raw_link_type = re.sub(
            DATASET_LINK_TYPE_PAT, DATASET_RAW_LINK_TYPE_REPL, linktype
        )
        return raw_link_type
    return linktype


def is_dataset_file(link):
    if "type" in link:
        return link["type"] in ["dataset-geojson", "dataset-csv"]
    return False


def transform_gdrive_url(url):
    gdrive_file_id, _ = gdp.parse_url(url, warning=False)
    new_url = "https://drive.google.com/uc?id={id}".format(id=gdrive_file_id)
    return new_url


def transform_dataset_file_link(link):
    if "url" not in link:
        return link
    url = link["url"]
    if (not is_github_url(url) and not is_gdrive_url(url)) or not is_dataset_file(link):
        return link
    if is_github_url(url):
        link["url"] = transform_github_url(url)
        link["type"] = transform_linktype2raw(link["type"])
    elif is_gdrive_url(url):
        link["url"] = transform_gdrive_url(url)
        link["type"] = transform_linktype2raw(link["type"])

    return link


def transform_links(links):
    new_links = []
    for link in links:
        new_link = transform_dataset_file_link(link)
        new_links.append(new_link)
    return new_links


def transform(filename: str):
    file = Path(filename)
    with open(file) as f:
        item = yaml.safe_load(f)
        item["id"] = file.stem
        if "links" in item:
            item["links"] = transform_links(item["links"])

        return item


def main():
    files = glob.glob(f"{CATALOG_DIR}/*.yml")
    items = [transform(f) for f in files]
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f)


if __name__ == "__main__":
    main()
