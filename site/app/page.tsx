'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Volume2,
  Terminal,
  Cpu,
  HardDrive,
  CheckCircle2,
  Copy,
  Check,
  Bell,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Sliders,
  Layers,
  Code2,
  Zap,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { TerminalSimulator } from './components/TerminalSimulator';
import { ConfigGenerator } from './components/ConfigGenerator';
import { AdSenseUnit } from './components/AdSenseUnit';

export default function HomePage() {
  const [copiedInstall, setCopiedInstall] = useState(false);

  const installCommand = 'curl -sL https://raw.githubusercontent.com/joshuacox/vv/refs/heads/master/bootstrapvv.sh | bash';

  const copyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-[800px] -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 text-center" id="overview">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md mb-6">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>vv v0.2.0 Released: Exit Code Fidelity & Native Desktop Alerts</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Never wonder when your <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            long-running build
          </span>{' '}
          finished.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <strong>vv</strong> is the polite command-line wrapper. Run tasks quietly in the background with <code className="text-emerald-300">nice</code> & <code className="text-emerald-300">ionice</code>, time execution, flush dirty kernel caches, and get alerted with audio chimes and desktop notifications the moment it completes.
        </p>

        {/* Quick Install Bar */}
        <div className="mt-8 mx-auto max-w-xl">
          <div className="flex items-center justify-between rounded-xl border border-slate-750 bg-slate-900/90 p-2 pl-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2.5 overflow-hidden text-left font-mono text-xs text-slate-200">
              <span className="text-emerald-400 select-none">$</span>
              <span className="truncate">{installCommand}</span>
            </div>
            <button
              onClick={copyInstall}
              className="ml-3 flex shrink-0 items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              {copiedInstall ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            Installs to <code className="text-slate-300">/usr/local/bin/vv</code>. Zero external dependencies.
          </p>
        </div>

        {/* Action CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#simulator"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
          >
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span>Try Interactive Simulator</span>
          </a>
          <a
            href="#configurator"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
          >
            <Sliders className="h-4 w-4 text-emerald-400" />
            <span>Config Generator</span>
          </a>
          <a
            href="#docs"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
          >
            <span>Read Docs</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8" id="simulator">
        <TerminalSimulator />
      </section>

      {/* Top Ad Unit */}
      <div className="mx-auto max-w-5xl px-4">
        <AdSenseUnit />
      </div>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="features">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Why developers use <span className="text-emerald-400">vv</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Everything you need for running background builds politely without bogging down your desktop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Polite CPU & I/O Scheduling</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Wraps commands in <code className="text-slate-300">nice -n19</code> and <code className="text-slate-300">ionice -c3</code>. Compile massive codebases or transcode video without UI freezing, audio stuttering, or input lag.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <HardDrive className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Kernel Cache Synchronization</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Runs <code className="text-slate-300">time sync</code> upon completion. Many disk writes are held in RAM page cache; <code>vv</code> lets you know the true completion time including disk commit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Exit Code Fidelity</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Faithfully preserves and returns the command&apos;s exact exit code (<code className="text-slate-300">$?</code>). If <code>make</code> or <code>cargo test</code> fails, <code>vv</code> propagates the failure status.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <Volume2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Success vs. Failure Audio Cues</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Plays distinct chimes: a pleasing chime for success, or an alert chord for failed builds. Know the outcome without even glancing at your terminal.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <Bell className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Desktop Notifications</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Dispatches native desktop notifications via <code className="text-slate-300">notify-send</code> on Linux and <code className="text-slate-300">osascript</code> on macOS, displaying the command name and result.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Bulletproof Argument Handling</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Quotes and spaces in arguments are preserved completely intact. Commands like <code>vv cp -a &quot;VirtualBox VMs&quot; /dest</code> work out of the box without escaping tricks.
            </p>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8" id="configurator">
        <ConfigGenerator />
      </section>

      {/* Documentation Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8" id="docs">
        <div className="border-b border-slate-800 pb-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Documentation & Reference</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">Everything you need to install, configure, and customize vv.</p>
        </div>

        <div className="space-y-12 text-sm text-slate-300">
          {/* Install Options */}
          <div id="install" className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-xs font-bold text-emerald-400">1</span>
              Installation Methods
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-xs font-bold text-slate-200 mb-2">Automated One-Liner</h4>
                <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
curl -sL https://raw.githubusercontent.com/joshuacox/vv/refs/heads/master/bootstrapvv.sh | bash
                </pre>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-xs font-bold text-slate-200 mb-2">Manual Git Install</h4>
                <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
git clone https://github.com/joshuacox/vv.git
cd vv
sudo install -m 0755 vv /usr/local/bin/vv
sudo install -m 0644 man/vv.1 /usr/local/share/man/man1/vv.1
                </pre>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-xs font-bold text-slate-200 mb-2">CMake Build</h4>
                <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
cmake .
make
sudo make install
                </pre>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <h4 className="text-xs font-bold text-slate-200 mb-2">Nix Flakes</h4>
                <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
nix profile install github:joshuacox/vv
                </pre>
              </div>
            </div>
          </div>

          {/* Options Reference */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-xs font-bold text-emerald-400">2</span>
              Command Line Flags
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 bg-slate-950 font-semibold text-slate-200">
                  <tr>
                    <th className="p-3">Option</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  <tr>
                    <td className="p-3 text-emerald-400 font-bold">-h, --help</td>
                    <td className="p-3 font-sans text-slate-300">Displays the usage manual, supported options, and environment variables.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400 font-bold">-v, --version</td>
                    <td className="p-3 font-sans text-slate-300">Shows current version string (e.g. <code className="text-slate-200">vv version 0.2.0</code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Environment Variables */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-xs font-bold text-emerald-400">3</span>
              Environment Variables Reference
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 bg-slate-950 font-semibold text-slate-200">
                  <tr>
                    <th className="p-3">Variable</th>
                    <th className="p-3">Default</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  <tr>
                    <td className="p-3 text-emerald-400">VV_NICENESS</td>
                    <td className="p-3 text-slate-400">&quot;19&quot;</td>
                    <td className="p-3 font-sans text-slate-300">CPU scheduling niceness passed to <code className="text-slate-200">nice -n</code>. 19 is lowest CPU priority.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_IO_NICENESS</td>
                    <td className="p-3 text-slate-400">&quot;3&quot;</td>
                    <td className="p-3 font-sans text-slate-300">I/O scheduling class passed to <code className="text-slate-200">ionice -c</code>. 3 is Idle priority.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_SYNC</td>
                    <td className="p-3 text-slate-400">&quot;1&quot;</td>
                    <td className="p-3 font-sans text-slate-300">Runs <code className="text-slate-200">time sync</code> after task completion. Set to <code className="text-slate-200">0</code> to bypass.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_NOTIFY</td>
                    <td className="p-3 text-slate-400">&quot;1&quot;</td>
                    <td className="p-3 font-sans text-slate-300">Sends desktop notifications via <code className="text-slate-200">notify-send</code> or <code className="text-slate-200">osascript</code>.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_BELL</td>
                    <td className="p-3 text-slate-400">&quot;1&quot;</td>
                    <td className="p-3 font-sans text-slate-300">Emits terminal bell (<code className="text-slate-200">\a</code>) if no audio player or sound file is available.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_PLAYER</td>
                    <td className="p-3 text-slate-400">auto</td>
                    <td className="p-3 font-sans text-slate-300">Explicit audio player command (e.g. <code className="text-slate-200">aplay -q</code>, <code className="text-slate-200">paplay</code>, <code className="text-slate-200">afplay</code>).</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_SUCCESS_SOUND</td>
                    <td className="p-3 text-slate-400">auto</td>
                    <td className="p-3 font-sans text-slate-300">File path to custom sound file for successful command exits (<code className="text-slate-200">0</code>).</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-400">VV_FAILURE_SOUND</td>
                    <td className="p-3 text-slate-400">auto</td>
                    <td className="p-3 font-sans text-slate-300">File path to custom sound file for failed command exits (<code className="text-slate-200">!= 0</code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* In-content Ad Unit */}
      <div className="mx-auto max-w-5xl px-4">
        <AdSenseUnit />
      </div>

      {/* Real-world Recipes */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8" id="recipes">
        <div className="border-b border-slate-800 pb-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Popular Recipes & Use Cases</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">Real-world patterns where vv makes everyday terminal work seamless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Terminal className="h-4 w-4 text-emerald-400" />
              Heavy Software Compilation
            </h3>
            <p className="text-slate-400 leading-relaxed">
              When compiling Rust, C++, or Go projects, compilers use all CPU cores and thrash disk caches. <code>vv</code> ensures your desktop UI remains snappy:
            </p>
            <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
vv cargo build --release
vv make -j$(nproc)
vv ninja -C build
            </pre>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-400" />
              System Upgrades in Background
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Run package updates in another terminal or tmux pane without babysitting it. Get notified immediately when it finishes or needs input:
            </p>
            <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
vv sudo apt-get update && vv sudo apt-get upgrade -y
vv sudo pacman -Syu --noconfirm
            </pre>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-emerald-400" />
              Large File Backups & Compression
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Writing gigabytes of archives triggers kernel page cache writeback. The automatic <code>sync</code> step ensures all data is physically committed to disk:
            </p>
            <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
vv tar -czf backup-2026.tar.gz /home/user/data/
vv rsync -avz --progress /source/ /external_drive/
            </pre>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-emerald-400" />
              Fast Network or CPU Tasks (Sync Bypassed)
            </h3>
            <p className="text-slate-400 leading-relaxed">
              If your task is purely CPU or network-bound and does not write to disk, you can bypass the disk sync step to alert immediately:
            </p>
            <pre className="rounded bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
VV_SYNC=0 vv curl -O https://example.com/largefile.iso
VV_SYNC=0 vv pytest -q
            </pre>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" id="faq">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">Common questions about vv, audio backends, and terminal environments.</p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              Does vv work over SSH or inside a remote server?
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Yes! If audio players are not present on a remote headless server, <code>vv</code> gracefully falls back to emitting the terminal bell character (<code className="text-slate-300">\a</code>). Most modern SSH terminals and terminal emulators (like iTerm2, Alacritty, GNOME Terminal, Windows Terminal) support visual or audible bell notifications.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              How does vv preserve exit codes?
            </h3>
            <p className="text-slate-400 leading-relaxed">
              <code>vv</code> executes the wrapped command, immediately traps its exit code (<code className="text-slate-300">cmd_exit=$?</code>), performs the optional <code>sync</code> and notification routines, and terminates with <code className="text-slate-300">exit &quot;$cmd_exit&quot;</code>. This makes <code>vv</code> completely safe inside shell scripts, Makefiles, and CI/CD pipelines.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              Can I customize the sounds to my own audio files?
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Absolutely! Set <code className="text-slate-300">VV_SUCCESS_SOUND=&quot;/path/to/winner.ogg&quot;</code> and <code className="text-slate-300">VV_FAILURE_SOUND=&quot;/path/to/error.ogg&quot;</code> in your <code className="text-slate-300">~/.config/vv/config</code> file.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <AdSenseUnit />
      </div>
    </div>
  );
}
