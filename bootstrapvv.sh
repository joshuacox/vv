#!/bin/sh
TMP_DIR=$(mktemp -d --suffix='.vv')
cleanup_func () {
  echo rm -Rf ${TMP}
}
trap cleanup_func EXIT

cd $TMP_DIR
curl -L -o vv-main.zip https://github.com/joshuacox/vv/archive/refs/heads/main.zip
unzip vv-main.zip
cd vv-main
cmake .
make
sudo make install
cd
