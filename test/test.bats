#!/usr/bin/env bats

setup() {
    # ... the remaining setup is unchanged

    # get the containing directory of this file
    # use $BATS_TEST_FILENAME instead of ${BASH_SOURCE[0]} or $0,
    # as those will point to the bats executable's location or the preprocessed file respectively
    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    # make executables in src/ visible to PATH
    PATH="$DIR/../src:$PATH"
    export NOUN_FILE=test/test 
    export ADJ_FILE=test/test 
    export SEPARATOR='_'
    export counto=1
}

@test "cmake ." {
  cmake .
}
@test "make clean" {
  make clean
}
@test "make" {
  make
}
@test "sudo make install" {
  sudo make install
}
