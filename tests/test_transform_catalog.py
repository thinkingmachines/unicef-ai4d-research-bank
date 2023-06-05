import io

import pandas as pd
import pytest
import transform_catalog as tc
import yaml


@pytest.fixture
def valid_catalog_item():
    "loads a catalog item yaml file"
    with open("tests/testdata/valid-catalog-item.yml") as f:
        item = yaml.safe_load(f)
    item["links"] = tc.transform_links(item["links"])
    yield item


# @pytest.mark.webtest
def test_transform(mocker):
    mocker.patch("transform_catalog.make_image", return_value=None)
    mocker.patch("transform_catalog.generate_detail_image", return_value=None)
    item = tc.transform("tests/testdata/valid-hxltag-catalog-item.yml")
    assert item["id"] == "valid-hxltag-catalog-item"
    assert "data-columns" in item
    assert "sample-data" in item
    assert len(item["data-columns"]) == 79
    assert len(item["sample-data"]) == 10
    assert "hxltag" in item["data-columns"][1]
    assert item["data-columns"][1]["hxltag"] == "#date+reported"
    assert "detail-image-url" in item
    assert item["detail-image-url"] == "assets/items/valid-hxltag-catalog-item.png"


@pytest.mark.webtest
def test_transform_gdrive(mocker):
    mocker.patch("transform_catalog.generate_detail_image", return_value=None)
    item = tc.transform("tests/testdata/valid-gdrive-catalog-item.yml")
    assert item["id"] == "valid-gdrive-catalog-item"
    assert "data-columns" in item
    assert "sample-data" in item
    assert len(item["data-columns"]) == 71
    assert len(item["sample-data"]) == 10


TEST_INPUT = """,date,station_code,station,city,sensor_type,longitude,latitude,geometry,bbox,total_population,AAI_mean,AAI_min,AAI_max,AAI_median,CAMS_AOD_055_mean,CAMS_AOD_055_min,CAMS_AOD_055_max,CAMS_AOD_055_median,AOD_047_mean,AOD_047_min,AOD_047_max,AOD_047_median,AOD_055_mean,AOD_055_min,AOD_055_max,AOD_055_median,NDVI_mean,NDVI_min,NDVI_max,NDVI_median,EVI_mean,EVI_min,EVI_max,EVI_median,dewpoint_temperature_2m_mean,dewpoint_temperature_2m_min,dewpoint_temperature_2m_median,dewpoint_temperature_2m_max,temperature_2m_mean,temperature_2m_min,temperature_2m_median,temperature_2m_max,u_component_of_wind_10m_mean,u_component_of_wind_10m_min,u_component_of_wind_10m_median,u_component_of_wind_10m_max,v_component_of_wind_10m_mean,v_component_of_wind_10m_min,v_component_of_wind_10m_median,v_component_of_wind_10m_max,surface_pressure_mean,surface_pressure_min,surface_pressure_median,surface_pressure_max,total_precipitation_daily,mean_precipitation_hourly,pm2.5,ADM0_EN,ADM0_PCODE,ADM0_TH,ADM1_EN,ADM1_PCODE,ADM1_TH,ADM2_EN,ADM2_PCODE,ADM2_TH,ADM3ALT1EN,ADM3ALT1TH,ADM3ALT2EN,ADM3ALT2TH,ADM3_EN,ADM3_PCODE,ADM3_REF,ADM3_TH,Shape_Area,Shape_Leng,validOn,validTo
0,2021-01-02,135.0,Prabadang Rehabiltation Center,Samut Prakan,reference grade,100.543436,13.664087,POINT (100.543436 13.664087),"POLYGON ((100.53880842570184 13.668583558922439, 100.54806357429815 13.668583558922439, 100.54806357429815 13.659590355285193, 100.53880842570184 13.659590355285193, 100.53880842570184 13.668583558922439))",8469.616434999998,-1.4449170273812233,-1.4449170273812233,-1.4449170273812233,-1.4449170273812233,335.051508938394,167.17633605003357,637.0052695274353,300.1670241355896,236.0,236.0,236.0,236.0,182.0,182.0,182.0,182.0,3944.0,3944.0,3944.0,3944.0,1872.0,1872.0,1872.0,1872.0,286.8164602915446,283.9227905273437,287.40425872802734,288.41404724121094,296.1644541422526,291.68211364746094,295.8259506225586,300.54957580566406,-0.4565960168838501,-1.059906005859375,-0.4322986602783203,0.0926456451416015,-2.3876677751541138,-2.775949478149414,-2.4167628288269043,-1.8232831954956048,101275.681640625,101084.81640625,101245.7421875,101564.90625,0.0,0.0,,Thailand,TH,ประเทศไทย,Samut Prakan,TH11,สมุทรปราการ,Phra Pradaeng,TH1104,พระประแดง,,,,,Song Khanong,TH110413,,ทรงคนอง,0.000305580779691,0.091296951671,2022-01-22,
1,2021-01-03,135.0,Prabadang Rehabiltation Center,Samut Prakan,reference grade,100.543436,13.664087,POINT (100.543436 13.664087),"POLYGON ((100.53880842570184 13.668583558922439, 100.54806357429815 13.668583558922439, 100.54806357429815 13.659590355285193, 100.53880842570184 13.659590355285193, 100.53880842570184 13.668583558922439))",8469.616434999998,-1.6856169700636392,-1.6856169700636392,-1.6856169700636392,-1.6856169700636392,322.7713735001843,130.2562654018402,561.8029236793518,290.1189774274826,231.5,145.0,318.0,231.5,178.5,111.0,246.0,178.5,3944.0,3944.0,3944.0,3944.0,1872.0,1872.0,1872.0,1872.0,288.449073155721,285.7888641357422,288.7765274047852,289.932373046875,297.9016698201497,292.7322998046875,297.6327209472656,302.3302764892578,-0.7695103089014689,-2.077423095703125,-0.7383537292480469,0.346710205078125,-2.436223347981771,-3.09760856628418,-2.37942886352539,-1.5993804931640625,101148.80094401042,100933.79296875,101133.96484375,101385.93359375,8.583068797918258e-07,3.576278665799274e-08,,Thailand,TH,ประเทศไทย,Samut Prakan,TH11,สมุทรปราการ,Phra Pradaeng,TH1104,พระประแดง,,,,,Song Khanong,TH110413,,ทรงคนอง,0.000305580779691,0.091296951671,2022-01-22,
"""


def test_extract_column_metadata():
    input = io.StringIO(TEST_INPUT)
    df = pd.read_csv(input)
    column_names, column_types = tc.extract_column_metadata(df)
    assert len(column_names) == 79
    assert len(column_types) == 79


def test_find_qualified_link(valid_catalog_item):
    item = tc.find_qualified_link(valid_catalog_item["links"])
    assert item is not None
    assert "geojson" in item["type"]


@pytest.mark.webtest
def test_find_hxltag_qualified_link(mocker):
    mocker.patch("transform_catalog.generate_detail_image", return_value=None)
    item = tc.transform("tests/testdata/valid-hxltag-catalog-item.yml")
    item = tc.find_qualified_link(item["links"])
    assert item is not None
    assert "csv" in item["type"]


@pytest.mark.webtest
def test_add_data_column_samples(valid_catalog_item):
    item = tc.add_data_column_samples(valid_catalog_item)
    assert "data-columns" in item
    assert len(item["data-columns"]) == 11
    assert "sample-data" in item
    assert len(item["sample-data"]) == 10
