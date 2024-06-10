# How to build non-volatile storage

1. Install python and pip

https://www.python.org/downloads/windows/

2. Install cryptography via pip:

```shell
pip install cryptography
```

3. Build `storage.bin`

```shell
python nvs.py generate nvs.csv storage.bin 16384
```

# Optional - generate windows executable

1. Install

```shell
pip install pyinstaller
```

2. Build

```shell
pyinstaller --onefile nvs.py
```
