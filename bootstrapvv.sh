#!/bin/sh
TMP_DIR=$(mktemp -d --suffix='.bomsaway')

cd $TMP_DIR
git clone https://github.com/joshuacox/vv.git
cd vv
git pull
make install
cd
rm -Rf $TMP_DIR
