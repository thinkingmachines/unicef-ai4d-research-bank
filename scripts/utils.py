import sys
import textwrap

import gdown.parse_url as gdp
import requests
from gdown.download import (
    CHUNK_SIZE,
    _get_session,
    get_url_from_gdrive_confirmation,
    indent,
)
from gdown.parse_url import parse_url


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