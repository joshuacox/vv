#!/bin/sh
GIT_HOME=~/git

echo vv
cd $GIT_HOME
git clone https://github.com/joshuacox/vv.git
cd vv
git pull
make install
