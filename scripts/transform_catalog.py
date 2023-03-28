import glob
import json
from pathlib import Path

import yaml

from utils import transform_dataset_file_link

CATALOG_DIR = "./catalog"
OUTPUT_PATH = "./public/api/data/catalog.json"


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
