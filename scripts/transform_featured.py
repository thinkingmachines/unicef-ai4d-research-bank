import argparse
import json
from pathlib import Path

import yaml


def convert_featured(
    in_dir=Path("featured"), out_dir=Path("public/api/data"), fname="featured"
) -> None:
    """Convert featured yml data to json"""
    infile = in_dir / f"{fname}.yml"
    if not infile.exists():
        print(f"{infile} does not exist")
        return 1
    with (infile).open() as f:
        data = yaml.safe_load(f)
    out_dir.mkdir(parents=True, exist_ok=True)
    with (out_dir / f"{fname}.json").open("w") as f:
        json.dump(data, f)
    return 0


parser = argparse.ArgumentParser()
parser.add_argument(
    "-i",
    "--input",
    metavar="input",
    type=str,
    default="featured",
    help="featured yaml input directory",
)
parser.add_argument(
    "-o",
    "--output",
    metavar="output",
    type=str,
    default="public/api/data",
    help="featured json output directory",
)
parser.add_argument(
    "-f",
    "--fname",
    metavar="fname",
    type=str,
    default="featured",
    help="feature filename (without the extension)",
)


def main():
    """Convert featured yml data to json"""
    args = parser.parse_args()
    input = Path(args.input)
    output = Path(args.output)
    fname = args.fname
    return convert_featured(in_dir=input, out_dir=output, fname=fname)


if __name__ == "__main__":
    main()
