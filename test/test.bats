#!/usr/bin/env bats

setup() {
    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )/.." >/dev/null 2>&1 && pwd )"
    VV="$DIR/vv"
    export VV_BELL=0
    export VV_NOTIFY=0
    export VV_SYNC=0
}

@test "vv --help displays usage and exits 0" {
    run "$VV" --help
    [ "$status" -eq 0 ]
    [[ "$output" =~ "Usage: vv" ]]
}

@test "vv -h displays usage and exits 0" {
    run "$VV" -h
    [ "$status" -eq 0 ]
    [[ "$output" =~ "Usage: vv" ]]
}

@test "vv --version displays version and exits 0" {
    run "$VV" --version
    [ "$status" -eq 0 ]
    [[ "$output" =~ "vv version" ]]
}

@test "vv with no arguments displays usage and exits 1" {
    run "$VV"
    [ "$status" -eq 1 ]
    [[ "$output" =~ "Usage: vv" ]]
}

@test "vv preserves successful command exit status 0" {
    run "$VV" true
    [ "$status" -eq 0 ]
}

@test "vv preserves failing command exit status" {
    run "$VV" bash -c 'exit 42'
    [ "$status" -eq 42 ]
}

@test "vv preserves arguments with spaces intact" {
    run "$VV" bash -c 'printf "[%s]\n" "$1"' _ "hello world with spaces"
    [ "$status" -eq 0 ]
    [[ "$output" =~ "[hello world with spaces]" ]]
}

@test "vv handles VV_SYNC=1 by outputting now syncing" {
    run env VV_SYNC=1 "$VV" true
    [ "$status" -eq 0 ]
    [[ "$output" =~ "now syncing" ]]
}

@test "vv handles VV_SYNC=0 by skipping now syncing" {
    run env VV_SYNC=0 "$VV" true
    [ "$status" -eq 0 ]
    [[ ! "$output" =~ "now syncing" ]]
}
