from typing import Dict
from unittest.mock import patch

import pytest
from image_generation_utils import get_iso3_code


@pytest.fixture
def iso3_codes():
    codes = {
        "united states": {"alpha-3": "USA", "alpha-2": "US"},
        "viet nam": {"alpha-3": "VNM", "alpha-2": "VN"},
    }
    with patch("image_generation_utils.get_iso3_codes", return_value=codes):
        yield codes


def test_get_iso3_code_valid_region_alpha3(iso3_codes: Dict):
    assert get_iso3_code("united states", "alpha-3") == "USA"


def test_get_iso3_code_valid_region_alpha2(iso3_codes: Dict):
    assert get_iso3_code("united states", "alpha-2") == "US"


def test_get_iso3_code_invalid_region(iso3_codes: Dict):
    assert get_iso3_code("fake country") is None


def test_get_iso3_code_invalid_code(iso3_codes: Dict):
    assert get_iso3_code("united states", "fake code") is None


def test_get_iso3_code_iso_standard_region_name_lookup(iso3_codes: Dict):
    assert get_iso3_code("vietnam", "alpha-3") == "VNM"
