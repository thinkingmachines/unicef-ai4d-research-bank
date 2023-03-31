import json
from pathlib import Path

import hxl
import hxl.converters


def main():
    fname = "tests/testdata/test-un-patched.csv"
    unpatched = Path(fname)
    if not unpatched.exists():
        print(f"Invalid file {fname} does not exist")
        return 1

    tagging_specs = [
        ("date", "#date+reported"),
        ("station_code", "#loc+code"),
        ("station", "#loc+name"),
        ("city", "#adm3+name"),
        ("longitude", "#geo+lon"),
        ("latitude", "#geo+lat"),
        ("geometry", "#geo+coord"),
        ("bbox", "#geo+bounds"),
        ("total_population", "#population"),
        ("ADM0_EN", "#country+name"),
        ("ADM0_PCODE", "#country+code+v_pcodes"),
        ("ADM0_TH", "#country+name+i_th"),
        ("ADM1_EN", "#adm1+name"),
        ("ADM1_PCODE", "#adm1+code+v_pcodes"),
        ("ADM1_TH", "#adm1+name+i_th"),
        ("ADM2_EN", "#adm2+name"),
        ("ADM2_PCODE", "#adm2+code+v_pcodes"),
        ("ADM2_TH", "#adm2+name+i_th"),
        ("ADM3_EN", "#adm3+name"),
        ("ADM3_PCODE", "#adm3+code+v_pcodes"),
        ("ADM3_TH", "#adm3+name+i_th"),
        ("validOn", "#date+start"),
        ("validTo", "#date+end"),
    ]
    filename = unpatched.as_posix()
    source = hxl.data(
        hxl.converters.Tagger(
            hxl.input.make_input(filename, hxl.input.InputOptions(allow_local=True)),
            tagging_specs,
        )
    ).cache()
    with open("tests/testdata/testoutput/test-patched.csv", "w", encoding="utf-8") as f:
        # Write out a dataset as CSV
        hxl.input.write_hxl(f, source)
    with open(
        "tests/testdata/testoutput/test-un-patched-tagspecs.json", "w", encoding="utf-8"
    ) as f:
        json.dump(tagging_specs, f)
    return 0


if __name__ == "__main__":
    exit(main())
