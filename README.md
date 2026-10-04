# vv

`vv` is a wrapper for command line tasks. Its most important feature is that it makes a noise and sends a desktop notification when it is done, allowing you to background the terminal or switch to another window while long tasks complete.

It runs tasks politely by automatically wrapping them in `nice` (CPU priority) and `ionice` (I/O priority), and times execution with `/usr/bin/time -v` when available. Afterwards, it runs `sync` so you know how much disk writeback the kernel buffered before you consider the task truly done.

---

## Features

- **Exit Code Preservation**: Faithfully propagates the exit status of the wrapped command.
- **Robust Argument Handling**: Quotes and whitespace in arguments are preserved without word-splitting.
- **Success & Failure Alerts**: Plays different audio cues depending on whether the command succeeded or failed.
- **Broad Audio Backend Support**: Automatically detects `canberra-gtk-play`, `paplay` (PulseAudio), `pw-play` (PipeWire), `afplay` (macOS), `aplay` (ALSA), `ogg123`, `mpv`, `ffplay`, `cvlc`, or `mplayer`, with an audible/visual terminal bell (`\a`) fallback.
- **Desktop Notifications**: Sends desktop alerts via `notify-send` (Linux) or `osascript` (macOS) when enabled.
- **Configurable `sync`**: Easily toggle filesystem sync on or off (`VV_SYNC=0`).

---

## Install

### One-liner
```bash
curl -sL https://raw.githubusercontent.com/joshuacox/vv/refs/heads/master/bootstrapvv.sh | bash
```

### Manual Install
Clone the repository and install:

```bash
git clone https://github.com/joshuacox/vv.git
cd vv
sudo install -m 0755 vv /usr/local/bin/vv
sudo install -m 0644 man/vv.1 /usr/local/share/man/man1/vv.1
```

Or with CMake:
```bash
cmake .
make
sudo make install
```

Or via Nix Flakes:
```bash
nix profile install .
```

---

## Usage

Simply place `vv` at the start of your command line:

```bash
vv apt-get upgrade -y
```

```bash
vv make -j$(nproc)
```

With custom niceness:
```bash
VV_NICENESS=10 vv echo one
```

Without post-command filesystem sync:
```bash
VV_SYNC=0 vv cargo build
```

Arguments with spaces and quotes are fully preserved:
```bash
vv cp -a "VirtualBox VMs" /mnt/virtualbox/
```

### Options

```
-h, --help       Show help message and exit
-v, --version    Show version information and exit
```

---

## Configuration

`vv` reads configuration files from:
1. `${XDG_CONFIG_HOME:-~/.config}/vv/config`
2. `~/.vv/config`
3. `~/.vvrc`

See [`vvrc.example`](vvrc.example) for a documented sample.

### Environment Variables

| Variable | Default | Description |
| :--- | :--- | :--- |
| `VV_NICENESS` | `19` | CPU nice level for the command |
| `VV_IO_NICENESS` | `3` | I/O nice class/level for the command |
| `VV_SYNC` | `1` | Run `sync` after command (`0` to disable) |
| `VV_NOTIFY` | `1` | Send desktop notifications via `notify-send`/`osascript` (`0` to disable) |
| `VV_BELL` | `1` | Emit terminal bell if no audio player or sound file is found (`0` to disable) |
| `VV_PLAYER` | *(auto)* | Audio player command (e.g. `aplay -q`, `paplay`, `pw-play`, `mpv`) |
| `VV_PLAYFILE` | *(auto)* | Sound file to play (overrides success/failure defaults) |
| `VV_SUCCESS_SOUND` | *(auto)* | Sound file to play on successful command exit (`0`) |
| `VV_FAILURE_SOUND` | *(auto)* | Sound file to play on non-zero command exit |
| `VV_PRE` | *(auto)* | Custom command prefix (overrides automatic `nice`/`ionice`/`time`) |

---

## Testing

Run the included test suite:

```bash
./test/run_tests.sh
```

Or with [Bats](https://github.com/bats-core/bats-core):

```bash
bats test/test.bats
```
