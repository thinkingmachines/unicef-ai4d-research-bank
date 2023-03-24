import glob
import json
from pathlib import Path

import yaml

CATALOG_DIR = "./catalog"
OUTPUT_PATH = "./public/api/data/catalog.json"


def transform(filename: str):
    file = Path(filename)
    with open(file) as f:
        item = yaml.safe_load(f)
        item["id"] = file.stem

        return item


def main():
    files = glob.glob(f"{CATALOG_DIR}/*.yml")
    items = [transform(f) for f in files]
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f)


if __name__ == "__main__":
    main()
