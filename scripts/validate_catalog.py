import glob
import string
from contextlib import closing
from pathlib import Path

import requests
import yaml

from utils import get_session

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


def validate_url(url, fname):
    r = requests.get(url)
    if r.status_code != 200:
        with closing(get_session(proxy=None)) as sess:
            r = sess.get(url)
            if r.status_code != 200:
                print(
                    f"Invalid file {fname}: Link not available for {url}, reason: {r.reason}"
                )
                return False

    return True


def has_valid_organization(organization, fname):
    if not set(organization.keys()).issuperset(["name", "url"]):
        if "name" not in organization:
            print(f"Invalid file {fname}: Organization name is missing")
        else:
            print(f"Invalid file {fname}: Organization url is missing")
        return False
    return validate_url(organization["url"], fname)


def validate_link(link, i, fname):
    ok = []
    if not set(link.keys()).issuperset(["description", "url", "type"]):
        if "description" not in link:
            print(f"Invalid file {fname}: No description found for link [{i}]")
        if "url" not in link:
            print(f"Invalid file {fname}: No url found for link[{i}]")
        if "type" not in link:
            print(f"Invalid file {fname}: No type found for link[{i}]")
        ok.append(False)

    if "url" in link:
        ok.append(validate_url(link["url"], fname))
    return all(ok)


def has_valid_links(links, fname):
    ok = []
    for i, link in enumerate(links):
        ok.append(validate_link(link, i, fname))
    return all(ok)


def validate_yaml(file, fname):
    ok = []
    fpath = Path(fname) if type(fname) == str else fname
    name = fpath.name
    # validate filename
    ok.append(validate_filename(fpath))
    item = yaml.safe_load(file)
    # validate required entries
    ok.append(has_required_fields(item, name))
    # validate no extra fields
    ok.append(has_no_extra_fields(item, name))
    # validate countries
    if "country-region" in item:
        ok.append(has_valid_region(item["country-region"], name))
    if "organization" in item:
        ok.append(has_valid_organization(item["organization"], name))
    if "links" in item:
        ok.append(has_valid_links(item["links"], name))
    return all(ok)


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
