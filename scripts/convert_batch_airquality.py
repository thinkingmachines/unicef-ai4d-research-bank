# coding: utf-8

import sys

sys.path.append("scripts")
import glob
from pathlib import Path

import addhxltags as ahxl
import airquality_hxltags as aqc


def build_training():
    inputdir = Path(".dump/airquality_ml_training_data")
    input_list = glob.glob(f"{inputdir}/*.csv")
    inputfiles = [Path(f) for f in input_list]
    outputdir = Path(".dump/airquality_ml_training_data/hxltagged")
    outputfiles = [outputdir / f.name for f in inputfiles]
    tagspecs = [
        aqc.patched_table_openaq_20220531,
        aqc.base_table_openaq_refgrade_20220531,
        aqc.base_table_openaq_filt_20220518,
        aqc.base_table_openaq_lowcost_20220531,
        aqc.base_table_air4thai_20220504,
    ]
    results = [
        ahxl.add_hxltags(args[0].as_posix(), args[1], tagspecs=args[2])
        for args in zip(inputfiles, outputfiles, tagspecs)
    ]

    if any(results):
        return 1

    return 0


def build_eval():
    inputdir = Path(".dump/airquality_ml_training_data/airquality_results")
    input_list = glob.glob(f"{inputdir}/*.csv")
    inputfiles = [Path(f) for f in input_list]
    outputdir = Path(".dump/airquality_ml_training_data/hxltagged/airquality_results")
    outputfiles = [outputdir / f.name for f in inputfiles]
    tagspecs = [
        aqc.mueang_chiang_mai_tile_centroids,
        aqc.predictions_chiangmai_2021,
    ]
    results = [
        ahxl.add_hxltags(args[0].as_posix(), args[1], tagspecs=args[2])
        for args in zip(inputfiles, outputfiles, tagspecs)
    ]

    if any(results):
        return 1

    return 0
