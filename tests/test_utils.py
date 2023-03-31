import pandas as pd

from utils import extract_column_names_and_types


def test_extract_columns_names_and_types():
    df = pd.DataFrame(
        {"A": [1, 2, 3], "B": ["foo", "bar", "baz"], "C": [True, False, True]}
    )
    column_info = extract_column_names_and_types(df)
    assert set(column_info.items()) == set(
        [("A", "integer"), ("B", "string"), ("C", "boolean")]
    )
