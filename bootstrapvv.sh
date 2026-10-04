#!/bin/sh
set -e

THIS_NAME="vv"
THIS_GH="joshuacox"
THIS_BRANCH="master"

TMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t 'vv')

cleanup_func () {
  if [ -d "${TMP_DIR}" ]; then
    rm -rf "${TMP_DIR}"
  fi
}
trap cleanup_func EXIT INT TERM

cd "${TMP_DIR}"
curl -fsSL -o "${THIS_NAME}-${THIS_BRANCH}.zip" "https://github.com/${THIS_GH}/${THIS_NAME}/archive/refs/heads/${THIS_BRANCH}.zip"
unzip -q "${THIS_NAME}-${THIS_BRANCH}.zip"
cd "${THIS_NAME}-${THIS_BRANCH}"

if command -v cmake >/dev/null 2>&1; then
  cmake .
  make
  sudo make install
else
  # Direct install fallback if cmake is not available
  sudo install -m 0755 vv /usr/local/bin/vv
  if [ -f man/vv.1 ]; then
    sudo mkdir -p /usr/local/share/man/man1
    sudo install -m 0644 man/vv.1 /usr/local/share/man/man1/vv.1
  fi
fi

echo "Successfully installed vv!"
