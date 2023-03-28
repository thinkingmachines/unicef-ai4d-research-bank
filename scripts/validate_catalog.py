import glob
import string
import sys
import textwrap
from contextlib import closing
from pathlib import Path

import requests
import yaml
from gdown.download import (
    CHUNK_SIZE,
    _get_session,
    get_url_from_gdrive_confirmation,
    indent,
)
from gdown.parse_url import parse_url

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


def has_valid_organization(organization, fname):
    if not set(organization.keys()).issuperset(["name", "url"]):
        if "name" not in organization.keys():
            print(f"Invalid file {fname}: Organization name is missing")
        else:
            print(f"Invalid file {fname}: Organization url is missing")
        return False
    return validate_url(organization["url"], fname)


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


def get_session(proxy):
    sess = requests.session()

    sess.headers.update(
        {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)"}
    )

    if proxy is not None:
        sess.proxies = {"http": proxy, "https": proxy}
        print("Using proxy:", proxy, file=sys.stderr)

    return sess


# see gdown implementation of download https://github.com/wkentaro/gdown/blob/0080deee511da05020cf863bec44bf2c0fd08715/gdown/download.py#L89
def get_gdown_response(
    url,
    proxy=None,
    verify=True,
):
    """Get the Response from a Gdrive download request (instead of the output file).

    Parameters
    ----------
    url: str
        URL. Google Drive URL is also supported.
    proxy: str
        Proxy.
    verify: bool or string
        Either a bool, in which case it controls whether the server's TLS
        certificate is verified, or a string, in which case it must be a path
        to a CA bundle to use. Default is True.

    Returns
    -------
    res: requests.response
        Response
    """
    url_origin = url

    sess = get_session(proxy=proxy)

    gdrive_file_id, _ = parse_url(url, warning=False)

    if gdrive_file_id:
        # overwrite the url with fuzzy match of a file id
        url = "https://drive.google.com/uc?id={id}".format(id=gdrive_file_id)
        url_origin = url
    else:
        # not a gdrive url
        return None

    while True:
        try:
            res = sess.get(url, stream=True, verify=verify)
        except requests.exceptions.ProxyError as e:
            print(
                "An error has occurred using proxy:",
                sess.proxies,
                file=sys.stderr,
            )
            print(e, file=sys.stderr)
            return None

        if "Content-Disposition" in res.headers:
            # This is the file
            break

        # Need to redirect with confirmation
        try:
            url = get_url_from_gdrive_confirmation(res.text)
        except RuntimeError as e:
            print("Access denied with the following error:")
            error = "\n".join(textwrap.wrap(str(e)))
            error = indent(error, "\t")
            print("\n", error, "\n", file=sys.stderr)
            print(
                "You may still be able to access the file from the browser:",
                file=sys.stderr,
            )
            print("\n\t", url_origin, "\n", file=sys.stderr)
            return None

    return res


def main():
    fnames = glob.glob(f"{CATALOG_DIR}/*")
    valid = [validate_file(fname) for fname in fnames]
    if all(valid):
        return 0
    return 1


if __name__ == "__main__":
    exit(main())
