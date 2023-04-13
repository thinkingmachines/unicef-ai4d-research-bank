import pandas as pd

from utils import extract_column_metadata


def test_extract_column_metadata():
    df = pd.DataFrame(
        {"A": [1, 2, 3], "B": ["foo", "bar", "baz"], "C": [True, False, True]}
    )
    column_names, column_info = extract_column_metadata(df)
    assert column_names == ["A", "B", "C"]
    assert column_info == ["integer", "string", "boolean"]
