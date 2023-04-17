# coding: utf-8

import sys

sys.path.append("scripts")
import glob
from pathlib import Path

import addhxltags as ahxl
import povmap_hxltags as aqc


def build_rollout():
    inputdir = Path(".dump/poverty_mapping_output")
    input_list = glob.glob(f"{inputdir}/**/*.csv", recursive=True)
    inputfiles = [Path(f) for f in input_list if "rollout" in f]
    outputdir = Path(".dump/poverty_mapping_hxltagged")
    outputfiles = [outputdir / f.name for f in inputfiles]

    results = [
        ahxl.add_hxltags(args[0].as_posix(), args[1], tagspecs=aqc.rollout_grids)
        for args in zip(inputfiles, outputfiles)
    ]

    if any(results):
        return 1

    return 0


def build_training():
    inputdir = Path(".dump/poverty_mapping_output/Training Data")
    input_list = glob.glob(f"{inputdir}/**/*.csv", recursive=True)
    inputfiles = [Path(f) for f in input_list]
    outputdir = Path(".dump/poverty_mapping_hxltagged_training_data")
    outputfiles = [outputdir / f.name for f in inputfiles]
    results = [
        ahxl.add_hxltags(args[0].as_posix(), args[1], tagspecs=aqc.dhs_cluster)
        for args in zip(inputfiles, outputfiles)
    ]

    if any(results):
        return 1

    return 0


if __name__ == "__main__":
    # print("Running build_rollout")
    # build_rollout()
    print("Running build_training")
    build_training()
