import typing
from functools import lru_cache
from pathlib import Path

import contextily as cx
import geopandas as gpd
import matplotlib.pyplot as plt
import pandas as pd
import requests

# ISO3166 source list
# see https://github.com/lukes//ISO-3166-Countries-with-Regional-Codes

ISO3_URL = "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.csv"


@lru_cache(maxsize=None)
def get_iso3_codes() -> typing.Dict:
    iso3_df = pd.read_csv(ISO3_URL)
    iso3_lookup = {item["name"].lower(): item for item in iso3_df.to_dict("records")}
    return iso3_lookup


def get_iso3_code(region: str, code: str = "alpha-3") -> typing.Optional[str]:
    """
    Returns the country ISO-3166 code
    Args:
        region (str): Common short country name. Refer to https://data.worldbank.org/country for possible values
        code (str): The country code standard, either 'alpha-3' or 'alpha-2'
    """
    # TODO: Find more elegant solution to correct country common name to ISO standard spelling
    iso_standard_region_name_lookup = {
        "vietnam": "viet nam",
        "laos": "lao people's democratic republic",
        "lao pdr": "lao people's democratic republic",
        "east-timor": "timor-leste",
    }
    iso3_lookup = get_iso3_codes()
    iso3_entry = iso3_lookup.get(iso_standard_region_name_lookup.get(region, region))
    return iso3_entry.get(code, None) if iso3_entry is not None else None


GEOBOUNDARIES_REQUEST_URL = "https://www.geoboundaries.org/gbRequest.html?ISO={}&ADM={}"


@lru_cache(maxsize=None)
def get_geoboundaries_url(region: str, adm: str = "ADM0") -> typing.Optional[str]:
    """
    Returns the download URL for the GeoBoundaries of a specified region and administrative level.

    Args:
        region (str): Name of the region for which to retrieve the geo boundaries.
        adm (str, optional): Administrative level of the boundaries to retrieve. Defaults to 'ADM0'.

    Returns:
        str: The download URL for the GeoBoundaries of the specified region and administrative level.
             Returns None if the region cannot be found or no boundary information is available.
    """

    iso = get_iso3_code(region)
    if iso is None:
        return None
    adm = adm.upper()
    url = GEOBOUNDARIES_REQUEST_URL.format(iso, adm)
    r = requests.get(url)
    respjson = r.json()
    if respjson is None or len(respjson) < 1 or "gjDownloadURL" not in respjson[0]:
        # raise ValueError(f'Invalid results returned from reqest {url} : response is {respjson}')
        return None
    dl_path = respjson[0]["gjDownloadURL"]
    return dl_path


@lru_cache(maxsize=None)
def get_admin_gdf(region: str, adm: str = "ADM0") -> typing.Optional[gpd.GeoDataFrame]:
    """
    Fetches administrative boundaries of a specified region and returns a GeoDataFrame object.

    Args:
        region (str): The name of the region to fetch boundaries for.
        adm (str, optional): The administrative level of the region's boundaries to fetch. Defaults to 'ADM0',
            which corresponds to country-level boundaries.

    Returns:
        GeoDataFrame: A GeoDataFrame object containing the administrative boundaries of the specified region.

    Example:
        >>> get_admin_gdf('timor-leste', 'ADM1')
    """

    admin_url = get_geoboundaries_url(region, adm=adm)
    if admin_url is None:
        return None
    admin_gdf = gpd.read_file(admin_url)
    if admin_gdf is None:
        return None
    admin_gdf = admin_gdf.to_crs("EPSG:4326")
    return admin_gdf


@lru_cache(maxsize=None)
def get_gdf_data(url: str, item_id: str) -> typing.Optional[gpd.GeoDataFrame]:
    """
    Downloads and returns GeoDataFrame data from a specified URL.

    Args:
        url (str): The URL of the data to be downloaded.
        item_id(str): The item id of the item
    Returns:
        GeoDataFrame: A GeoDataFrame object containing the downloaded data.

    Example:
        >>> get_gdf_data('https://example.com/data.gpkg')
    """
    try:
        gdf = gpd.read_file(url)
    except Exception as e:
        print(f"Invalid file {item_id}: The URL {url} returned an exception {e}")
        return None
    if gdf is None:
        return None
    gdf = gdf.to_crs("EPSG:4326")
    return gdf


def make_image(
    id: str,
    admin_gdf: typing.Union[gpd.GeoDataFrame, None],
    data_gdf: typing.Union[gpd.GeoDataFrame, None],
    size: tuple = (17, 12),
    admin_color: str = "b",
    data_color: str = "r",
    output_dir: Path = Path(""),
) -> None:
    """
    Creates a map image from GeoDataFrame data and saves it to disk.

    Args:
        id (str): The identifier for the output image file.
        admin_gdf (GeoDataFrame): A GeoDataFrame object containing administrative boundary data to display.
        data_gdf (GeoDataFrame): A GeoDataFrame object containing data to overlay on the administrative boundaries.
        size (tuple, optional): The size of the output image in inches. Defaults to (17, 12).
        admin_color (str, optional): The color to use for the administrative boundaries. Defaults to 'b'.
        data_color (str, optional): The color to use for the overlay data. Defaults to 'r'.
        output_dir (Path, optional): The directory where the output image file should be saved. Defaults to the current directory.

    Returns:
        None

    Example:
        >>> make_image('map1', admin_gdf, data_gdf, output_dir=Path('/path/to/images'))
    """

    fig, ax = plt.subplots()
    if admin_gdf is not None:
        ax = admin_gdf.plot(ax=ax, facecolor="none", edgecolor=admin_color, alpha=0.85)
        crs = admin_gdf.crs
    if data_gdf is not None:
        ax = data_gdf.plot(ax=ax, facecolor="none", edgecolor=data_color, alpha=0.25)
        crs = data_gdf.crs
    plt.tick_params(
        axis="both",
        which="both",
        bottom=False,
        top=False,
        left=False,
        right=False,
        labelbottom=False,
        labelleft=False,
    )
    cx.add_basemap(ax, crs=crs.to_string())
    fig.set_size_inches(*size)
    plt.savefig(f"{output_dir}/{id}.png", pad_inches=0.0, bbox_inches="tight", dpi=100)


def make_multi_image(
    id,
    admin_gdfs,
    data_gdf,
    size=(17, 12),
    admin_color="b",
    data_color="r",
    output_dir=Path(""),
):
    """
    Creates an image file of a map with administrative and data overlays.

    Parameters:
        id (str): Unique identifier for the image file.
        admin_gdf (GeoDataFrame or None): GeoDataFrame of administrative boundaries to overlay on the map. If None, no overlay will be added.
        data_gdf (GeoDataFrame or None): GeoDataFrame of data points to overlay on the map. If None, no overlay will be added.
        size (tuple of float): Size of the image in inches (width, height). Default is (17, 12).
        admin_color (str): Color of the administrative boundary overlay. Default is 'b' (blue).
        data_color (str): Color of the data point overlay. Default is 'r' (red).
        output_dir (Path): Directory to save the output image file. Default is the current directory.
    Returns:
        None

    Saves an image file of the map with overlays to the specified output directory with the specified ID. The image file will be a PNG file with a DPI of 100 and no padding around the edges.
    """
    crs = None
    fig, ax = plt.subplots()
    for admin_gdf in admin_gdfs:
        ax = admin_gdf.plot(ax=ax, facecolor="none", edgecolor=admin_color, alpha=0.85)
        if crs is None:
            crs = admin_gdf.crs
    if data_gdf is not None:
        ax = data_gdf.plot(ax=ax, facecolor="none", edgecolor=data_color, alpha=0.25)
        crs = data_gdf.crs
    plt.tick_params(
        axis="both",
        which="both",
        bottom=False,
        top=False,
        left=False,
        right=False,
        labelbottom=False,
        labelleft=False,
    )
    if crs is not None:
        cx.add_basemap(ax, crs=crs.to_string())
    fig.set_size_inches(*size)
    plt.savefig(f"{output_dir}/{id}.png", pad_inches=0.0, bbox_inches="tight", dpi=100)
