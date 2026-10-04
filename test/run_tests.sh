#!/usr/bin/env bash
set -uo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"
VV="${DIR}/vv"

passed=0
failed=0

run_test () {
  local name="$1"
  shift
  echo -n "Running test: ${name} ... "
  if "$@"; then
    echo "PASS"
    ((passed++))
  else
    echo "FAIL"
    ((failed++))
  fi
}

# Test 1: --help
test_help () {
  out=$("$VV" --help)
  code=$?
  [[ $code -eq 0 && "$out" =~ "Usage: vv" ]]
}

# Test 2: --version
test_version () {
  out=$("$VV" --version)
  code=$?
  [[ $code -eq 0 && "$out" =~ "vv version" ]]
}

# Test 3: zero arguments
test_zero_args () {
  out=$("$VV" 2>&1) || code=$?
  [[ ${code:-0} -eq 1 && "$out" =~ "Usage: vv" ]]
}

# Test 4: exit code 0 propagation
test_exit_success () {
  VV_SYNC=0 VV_NOTIFY=0 VV_BELL=0 "$VV" true
  [[ $? -eq 0 ]]
}

# Test 5: exit code failure propagation
test_exit_failure () {
  code=0
  VV_SYNC=0 VV_NOTIFY=0 VV_BELL=0 "$VV" bash -c 'exit 42' || code=$?
  [[ $code -eq 42 ]]
}

# Test 6: whitespace preservation
test_arg_spaces () {
  out=$(VV_SYNC=0 VV_NOTIFY=0 VV_BELL=0 "$VV" bash -c 'printf "[%s]\n" "$1"' _ "hello world with spaces")
  [[ "$out" == "[hello world with spaces]" ]]
}

# Test 7: VV_SYNC=1
test_sync_enabled () {
  out=$(VV_SYNC=1 VV_NOTIFY=0 VV_BELL=0 "$VV" true)
  [[ "$out" =~ "now syncing" ]]
}

# Test 8: VV_SYNC=0
test_sync_disabled () {
  out=$(VV_SYNC=0 VV_NOTIFY=0 VV_BELL=0 "$VV" true)
  [[ ! "$out" =~ "now syncing" ]]
}

run_test "vv --help" test_help
run_test "vv --version" test_version
run_test "vv zero arguments" test_zero_args
run_test "exit code 0 propagation" test_exit_success
run_test "exit code failure propagation" test_exit_failure
run_test "whitespace preservation" test_arg_spaces
run_test "VV_SYNC=1 produces sync message" test_sync_enabled
run_test "VV_SYNC=0 suppresses sync message" test_sync_disabled

echo
echo "Results: ${passed} passed, ${failed} failed."
[[ $failed -eq 0 ]]
