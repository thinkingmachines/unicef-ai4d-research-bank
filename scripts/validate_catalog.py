import glob
import string
from contextlib import closing
from pathlib import Path

import hxl
import hxl.validation
import requests
import yaml
from hxl.input import HXLTagsNotFoundException

from utils import (
    CSVResponseInput,
    get_gdown_response,
    get_link_filename,
    get_session,
    is_dataset_file,
    is_gdrive_url,
    transform_dataset_file_link,
)

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
    if is_gdrive_url(url):
        resp, sess, _ = get_gdown_response(url)
        if resp is None:
            print(f"Invalid file {fname}: Could not access link with url {url}")
            return False
    else:
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


def validate_csv_hxl(url, fname):
    if is_gdrive_url(url):
        resp, sess, _ = get_gdown_response(url)
        if resp is None:
            print(f"Invalid file {fname}: Could not access link with url {url}")
            return False
        source = CSVResponseInput(resp, sess)
    else:
        source = url
    try:
        data = hxl.data(source)
        hxl.validation.validate(data)
    except HXLTagsNotFoundException as e:
        print(
            f"Invalid file {fname}: CSV link {url} is missing required HXL Tags. Please visit https://hxlstandard.org/ to learn how to add HXL tags to your datasets."
        )
        return False

    except Exception as e:
        print(f"Invalid file {fname}: CSV link {url} does not have valid HXL Tags: {e}")
        return False

    return True


REQUIRED_LINK_FIELDS = set(["description", "url", "type"])
OPTIONAL_LINK_FIELDS = set(["name", "alt-format", "skip-hxl-tag-validation"])
ALLOWED_LINK_FIELDS = REQUIRED_LINK_FIELDS | OPTIONAL_LINK_FIELDS


def has_no_extra_link_fields(link, fname):
    link_fields = set(link.keys())
    extra_fields = link_fields - ALLOWED_LINK_FIELDS
    ok = len(extra_fields) == 0
    if not ok:
        print(
            f"Invalid file {fname}: there are extra link fields that are not allowed in a catalog: {list(extra_fields)}"
        )
    return ok


REQUIRED_ALT_FORMAT_FIELDS = set(["type", "url"])
OPTIONAL_ALT_FORMAT_FIELDS = set(["skip-hxl-tag-validation"])
ALLOWED_ALT_FORMAT_FIELDS = REQUIRED_ALT_FORMAT_FIELDS | OPTIONAL_ALT_FORMAT_FIELDS


def has_no_extra_alt_format_fields(alt_format, i, j, fname):
    alt_format_fields = set(alt_format.keys())
    extra_fields = alt_format_fields - ALLOWED_ALT_FORMAT_FIELDS
    ok = len(extra_fields) == 0
    if not ok:
        print(
            f"Invalid file {fname}: there are extra fields that are not allowed in alt format [{j}] in link[{i}]: {list(extra_fields)}"
        )
    return ok


def validate_alt_format(alt_format, i, j, fname):
    ok = []
    if not set(alt_format.keys()).issuperset(REQUIRED_ALT_FORMAT_FIELDS):
        if "url" not in alt_format:
            print(f"Invalid file {fname}: No url found for link[{i}]")
        if "type" not in alt_format:
            print(f"Invalid file {fname}: No type found for link[{i}]")
        ok.append(False)
    ok.append(has_no_extra_alt_format_fields(alt_format, i, j, fname))
    if "url" in alt_format:
        ok.append(validate_url(alt_format["url"], fname))
        if "type" in alt_format and "csv" in alt_format["type"]:
            # transform github and gstorage urls
            if (
                "skip-hxl-tag-validation" not in alt_format
                or not alt_format["skip-hxl-tag-validation"]
            ):
                newlink = transform_dataset_file_link(alt_format, pop_skip_tag=False)
                ok.append(validate_csv_hxl(newlink["url"], fname))
            else:
                print(
                    f"Warning for file {fname}: HXL tag validation skipped for the alt format[{j}] in CSV link [{i}] with url {alt_format['url']}. We strongly recommend adding HXL Tags instead. Please visit https://hxlstandard.org/ to learn how to add HXL tags to your datasets."
                )

    return all(ok)


def validate_alt_formats(alt_format, i, fname):
    if isinstance(alt_format, dict):
        return validate_alt_format(alt_format, i, 0, fname)
    elif hasattr(alt_format, "__iter__"):  # is a list of dicts
        return all(
            [validate_alt_format(d, i, j, fname) for j, d in enumerate(alt_format)]
        )
    else:
        print(
            f"Invalid file {fname}: `alt-format` {alt_format} must be a list of key-value pairs (dicts) for link[{i}]"
        )
        return False


def validate_link(link, i, fname):
    ok = []
    if not set(link.keys()).issuperset(REQUIRED_LINK_FIELDS):
        if "description" not in link:
            print(f"Invalid file {fname}: No description found for link [{i}]")
        if "url" not in link:
            print(f"Invalid file {fname}: No url found for link[{i}]")
        if "type" not in link:
            print(f"Invalid file {fname}: No type found for link[{i}]")
        ok.append(False)
    ok.append(has_no_extra_link_fields(link, fname))
    if "url" in link:
        ok.append(validate_url(link["url"], fname))
        if "name" not in link and is_dataset_file(link):
            name = get_link_filename(link["url"])
            if name is None:
                print(f"Invalid file {fname}: No name found for link[{i}]")
                ok.append(False)
        if "type" in link and "csv" in link["type"]:
            # transform github and gstorage urls
            if (
                "skip-hxl-tag-validation" not in link
                or not link["skip-hxl-tag-validation"]
            ):
                newlink = transform_dataset_file_link(link, pop_skip_tag=False)
                ok.append(validate_csv_hxl(newlink["url"], fname))
            else:
                print(
                    f"Warning for file {fname}: HXL tag validation skipped for the CSV link {link['url']}. We strongly recommend adding HXL Tags instead. Please visit https://hxlstandard.org/ to learn how to add HXL tags to your datasets."
                )

    if "alt-format" in link:
        ok.append(validate_alt_formats(link["alt-format"], i, fname))
    return all(ok)


def has_valid_links(links, fname):
    ok = []
    for i, link in enumerate(links):
        ok.append(validate_link(link, i, fname))
    if len(ok) == 0:
        print(f"Invalid file {fname}: No `links` listed")
        ok.append(False)
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
        region = item["country-region"]
        if type(region) == str:
            ok.append(has_valid_region(region, name))
        elif hasattr(region, "__iter__"):  # assume list
            ok.append(all([has_valid_region(r, name) for r in region]))
        else:  # unknown type
            print(
                f"Invalid file {fname}: `country-region` {region} should be a string or a list of strings"
            )
            ok.append(False)

    if "organization" in item:
        ok.append(has_valid_organization(item["organization"], name))
    if "links" in item:
        ok.append(has_valid_links(item["links"], name))
    else:
        ok.append(False)
        print(f"Invalid file {fname}: No `links` field found")
    if "sample-data" in item and "data-columns" not in item:
        ok.append(False)
        print(f"Invalid file {fname}: Sample data is missing `data-columns`")
    return all(ok)


def validate_file(fname):
    fpath = Path(fname)
    if fpath.suffix != ".yml":
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
