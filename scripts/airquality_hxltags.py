import json

# air quality results
predictions_chiangmai_2021 = dict(
    date="#date",
    # id="#loc+code??",
    longitude="#geo+lon",
    latitude="#geo+lat",
    total_population="#population",
)
mueang_chiang_mai_tile_centroids = dict(
    # id="#loc+code??",
    longitude="#geo+lon",
    latitude="#geo+lat",
)
# air quality training
with open(
    "./.dump/airquality_ml_training_data/converter/2022-05-31-patched-table-openaq.json"
) as f:
    patched_table_openaq_20220531 = json.load(f)

base_table_openaq_refgrade_20220531 = patched_table_openaq_20220531.copy()
base_table_openaq_lowcost_20220531 = patched_table_openaq_20220531.copy()
base_table_openaq_filt_20220518 = patched_table_openaq_20220531.copy()
base_table_air4thai_20220504 = patched_table_openaq_20220531.copy()
base_table_air4thai_20220504.update(
    dict(
        date_left="#date+reported",
        date_right="#date+reported",
        # number="#??",
        station_code="#loc+code",
        station_location="#loc+name+i_th",
        en_station_location="#loc+name",
        en_station_description="#loc+name",
        en_station_address="#loc+name",
    )
)

# results
