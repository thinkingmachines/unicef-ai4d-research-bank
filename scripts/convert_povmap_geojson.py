import glob
import sys
from pathlib import Path

import geopandas as gpd


def main():
    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    convert_to_csv(input_dir, output_dir)


def convert_to_csv(input_dir, output_dir, recursive=True):
    base_dir = Path(input_dir)
    files = glob.glob(f"{base_dir}/**/*.geojson", recursive=recursive)
    files = [Path(file) for file in files]
    for file in files:
        relpath = file.relative_to(base_dir)
        outputfile_dir = output_dir / relpath.parent
        outputfile_dir.mkdir(parents=True, exist_ok=True)
        output_file = outputfile_dir / f"{file.stem}.csv"
        gdf = gpd.read_file(file)
        gdf.to_csv(output_file, index=False)


if __name__ == "__main__":
    main()
