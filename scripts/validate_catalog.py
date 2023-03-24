import glob
import string
from pathlib import Path

import yaml

CATALOG_DIR = "./catalog"

with open("./validation/regions.txt") as f:
    ALL_COUNTRIES = f.read().splitlines()

REQUIRED_FIELDS = set(
    [
        "name",
        "description",
        "card-type",
        "organization",
        "date-added",
        "links",
    ]
)
OPTIONAL_FIELDS = set(
    [
        "date-modified",
        "tags",
        "country-region",
        "year-period",
        "used-by",
        "evaluation-metrics",
        "data-columns",
        "sample-data",
    ]
)
ALLOWED_FIELDS = REQUIRED_FIELDS | OPTIONAL_FIELDS


def has_required_fields(item, fname):
    item_fields = set(item.keys())
    ok = REQUIRED_FIELDS.issubset(item_fields)
    if not ok:
        missing_fields = REQUIRED_FIELDS - item_fields
        print(
            f"Invalid file {fname} : the following fields are missing {list(missing_fields)}"
        )
    return ok


def has_no_extra_fields(item, fname):
    item_fields = set(item.keys())
    extra_fields = item_fields - ALLOWED_FIELDS
    ok = len(extra_fields) == 0
    if not ok:
        print(
            f"Invalid file {fname}: there are extra fields that are not allowed in a catalog: {list(extra_fields)}"
        )
    return ok


def has_valid_region(region, fname):
    ok = region in ALL_COUNTRIES
    if not ok:
        print(
            f"Invalid file {fname}: the field `country/region` value {region} is not in the list of valid regions. Please check the file `validation/regions.txt` for a list of valid countries/regions"
        )
    return ok


ALLOWED_CHARS = set(string.ascii_lowercase).union(set(["-"]))


def validate_filename(fpath):
    # filename should be lower-case and possibly dash(-)
    ok = not (set(fpath.stem) - ALLOWED_CHARS)
    if not ok:
        print(
            f"Invalid file {fpath.name}: the name {fpath.stem} should only contain lowercase characters and possibly a dash(-)"
        )
    return ok


def validate_yaml(file, fname):
    ok = True
    fpath = Path(fname) if type(fname) == str else fname
    name = fpath.name
    # validate filename
    ok = ok and validate_filename(fpath)
    item = yaml.safe_load(file)
    # validate required entries
    ok = ok and has_required_fields(item, name)
    # validate no extra fields
    ok = ok and has_no_extra_fields(item, name)
    # validate countries
    if "country-region" in item:
        ok = ok and has_valid_region(item["country-region"], name)

    return ok


def validate_file(fname):
    fpath = Path(fname)
    if fpath.suffix != ".yml":
        if fpath.name == "catalog-item.yml.sample":
            with open(fpath) as f:
                return validate_yaml(f, fpath.name.replace(".sample", ""))
        else:
            print(
                f"Invalid file {fpath.name}: Only catalog items with a .yml file extension are allowed"
            )
            return False
    with open(fpath) as f:
        return validate_yaml(f, fpath.name)


def main():
    fnames = glob.glob(f"{CATALOG_DIR}/*")
    valid = [validate_file(fname) for fname in fnames]
    if all(valid):
        return 0
    return 1


if __name__ == "__main__":
    exit(main())
