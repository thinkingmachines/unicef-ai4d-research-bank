import sys
from pathlib import Path

import validate_catalog as vc


def test_validate_filename(capsys):
    file = Path("./catalog/povmap-philippines")
    ok = vc.validate_filename(file)
    assert ok
