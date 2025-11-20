#!/bin/sh
TMP_DIR=$(mktemp -d --suffix='.vv')
cleanup_func () {
  echo rm -Rf ${TMP}
}
trap cleanup_func EXIT

cd $TMP_DIR
curl -L -o vv-master.zip https://github.com/joshuacox/vv/archive/refs/heads/master.zip
unzip vv-master.zip
cd vv-master
cmake .
make
sudo make install
cd
