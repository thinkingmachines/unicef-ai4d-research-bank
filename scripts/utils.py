import csv
import os
import re
import sys
import textwrap
from pathlib import Path

import gdown.parse_url as gdp
import hxl.model
import pandas as pd
import requests
from gdown.download import (
    CHUNK_SIZE,
    _get_session,
    get_url_from_gdrive_confirmation,
    indent,
)
from gdown.parse_url import parse_url
from hxl.input import AbstractInput

GITHUB_URL_PAT = r"https:\/\/github.com\/(\S+)\/blob(\/\S+)"
RAW_GH_LINK_REPL = r"https://raw.githubusercontent.com/\1\2"


def is_github_url(url):
    return re.match(GITHUB_URL_PAT, url) is not None


DATASET_LINK_TYPE_PAT = r"dataset-(\S+)"
DATASET_RAW_LINK_TYPE_REPL = r"dataset-raw-\1"

# load GSTORAGE_API_KEY from env
GSTORAGE_API_KEY = os.environ.get("GSTORAGE_API_KEY", None)


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
        return link["type"] in [
            "dataset-geojson",
            "dataset-csv",
            "training-dataset-geojson",
            "training-dataset-csv",
        ]
    return False


def get_link_filename(url, use_gstorage=True):
    if is_gdrive_url(url):
        url = transform_gdrive_url(url, use_gstorage=use_gstorage)
        if not "www.googleapis.com/drive/v3/files" in url:
            return None
        resp = requests.get(url.replace("alt=media&", ""))
        if resp.status_code != 200:
            return None
        metadata = resp.json()
        if "name" not in metadata:
            return None
        return metadata["name"]
    # get name from extension
    urlpath = Path(url)
    if urlpath.suffix == "":
        return None
    return urlpath.name


def transform_gdrive_url(url, use_gstorage=False):
    gdrive_file_id, _ = gdp.parse_url(url, warning=False)
    if use_gstorage and GSTORAGE_API_KEY:
        new_url = f"https://www.googleapis.com/drive/v3/files/{gdrive_file_id}?alt=media&key={GSTORAGE_API_KEY}"
    else:
        new_url = f"https://drive.google.com/uc?id={gdrive_file_id}"
    return new_url


def transform_dataset_file_link(link, pop_skip_tag=True, use_gstorage=False):
    if pop_skip_tag and "skip-hxl-tag-validation" in link:
        link.pop("skip-hxl-tag-validation")
    if "url" not in link:
        return link
    url = link["url"]
    if (not is_github_url(url) and not is_gdrive_url(url)) or not is_dataset_file(link):
        return link
    if is_github_url(url):
        link["url"] = transform_github_url(url)
        link["type"] = transform_linktype2raw(link["type"])
    elif is_gdrive_url(url):
        link["url"] = transform_gdrive_url(url, use_gstorage=use_gstorage)
        link["type"] = transform_linktype2raw(link["type"])

    return link


def is_gdrive_url(url):
    is_gdrive, _ = gdp.parse_url(url, warning=False)
    return is_gdrive


def get_session(proxy=None):
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
        url = f"https://drive.google.com/uc?id={gdrive_file_id}"
        url_origin = url
    else:
        # not a gdrive url
        return None, None, url

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
            return None, None, url

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
            return None, None, url

    return res, sess, url


class CSVResponseInput(AbstractInput):
    def __init__(self, resp, sess, input_options=None):
        super().__init__(input_options)
        self.sess = sess
        self.resp = resp
        self._reader = csv.reader(resp.iter_lines(chunk_size=8192, decode_unicode=True))

    def __exit__(self, value, type, traceback):
        self.sess.close()

    def __iter__(self):
        return self._reader


REMAP_TYPES = {
    "object": "string",
    "int64": "integer",
    "bool": "boolean",
}


def rename_types(dtype):
    if dtype in REMAP_TYPES:
        return REMAP_TYPES[dtype]
    return dtype


def extract_column_metadata(df: pd.DataFrame) -> dict:
    """
    Extracts the names of the columns from a pandas dataframe along with their data types.
    """
    column_types = df.dtypes
    column_names = list(df.columns.values)
    return column_names, [
        rename_types(str(column_type)) for column_type in column_types
    ]


def is_hxltagged(input):
    previous_row = []
    try:
        for n in range(0, 25):
            raw_row = next(input)
            columns = hxl.model.Column.parse_list(raw_row, previous_row)
            if columns is not None:
                return True
            previous_row = raw_row
    except StopIteration:
        pass
    return False
