'use client';

import React, { useState } from 'react';
import { Sliders, Copy, Check, Terminal, FileCode, Sparkles } from 'lucide-react';

export function ConfigGenerator() {
  const [niceness, setNiceness] = useState<number>(19);
  const [ioNiceness, setIoNiceness] = useState<number>(3);
  const [sync, setSync] = useState<boolean>(true);
  const [notify, setNotify] = useState<boolean>(true);
  const [bell, setBell] = useState<boolean>(true);
  const [player, setPlayer] = useState<string>('auto');
  const [sampleCmd, setSampleCmd] = useState<string>('make -j$(nproc)');
  const [copiedCli, setCopiedCli] = useState<boolean>(false);
  const [copiedConf, setCopiedConf] = useState<boolean>(false);

  // Generate CLI one-liner
  const envOverrides: string[] = [];
  if (niceness !== 19) envOverrides.push(`VV_NICENESS=${niceness}`);
  if (ioNiceness !== 3) envOverrides.push(`VV_IO_NICENESS=${ioNiceness}`);
  if (!sync) envOverrides.push(`VV_SYNC=0`);
  if (!notify) envOverrides.push(`VV_NOTIFY=0`);
  if (!bell) envOverrides.push(`VV_BELL=0`);
  if (player !== 'auto') envOverrides.push(`VV_PLAYER="${player}"`);

  const cliOneLiner = `${envOverrides.length > 0 ? envOverrides.join(' ') + ' ' : ''}vv ${sampleCmd}`;

  // Generate ~/.config/vv/config
  const configContent = `#!/usr/bin/env bash
# ~/.config/vv/config

# CPU Nice level (-20 highest priority, 19 lowest)
VV_NICENESS="${niceness}"

# I/O Nice Class (3 = idle, 2 = best-effort, 1 = realtime)
VV_IO_NICENESS="${ioNiceness}"

# Sync dirty filesystem pages after execution (1 = yes, 0 = no)
VV_SYNC="${sync ? 1 : 0}"

# Send desktop notifications on completion (1 = yes, 0 = no)
VV_NOTIFY="${notify ? 1 : 0}"

# Fallback terminal bell if audio player/sound is unavailable
VV_BELL="${bell ? 1 : 0}"
${player !== 'auto' ? `\n# Explicit audio player\nVV_PLAYER="${player}"` : '# Audio player is auto-detected (paplay, pw-play, aplay, afplay, mpv, etc.)'}
`;

  const copyToClipboard = (text: string, type: 'cli' | 'conf') => {
    navigator.clipboard.writeText(text);
    if (type === 'cli') {
      setCopiedCli(true);
      setTimeout(() => setCopiedCli(false), 2000);
    } else {
      setCopiedConf(true);
      setTimeout(() => setCopiedConf(false), 2000);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="h-5 w-5 text-emerald-400" />
        <h3 className="text-lg font-bold text-white">Interactive Config & Command Builder</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls Column */}
        <div className="space-y-5">
          {/* Sample command */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Command to wrap
            </label>
            <input
              type="text"
              value={sampleCmd}
              onChange={(e) => setSampleCmd(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-mono text-slate-100 focus:border-emerald-500 focus:outline-none"
              placeholder="e.g. make -j8 or apt-get upgrade"
            />
          </div>

          {/* CPU Niceness */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-300">CPU Niceness (nice -n):</span>
              <span className="font-mono text-emerald-400 font-bold">{niceness} {niceness === 19 ? '(Lowest priority)' : ''}</span>
            </div>
            <input
              type="range"
              min="-20"
              max="19"
              value={niceness}
              onChange={(e) => setNiceness(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>-20 (Highest / root)</span>
              <span>0 (Standard)</span>
              <span>19 (Polite / Background)</span>
            </div>
          </div>

          {/* IO Niceness */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              I/O Scheduling (ionice -c):
            </label>
            <select
              value={ioNiceness}
              onChange={(e) => setIoNiceness(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-emerald-500 focus:outline-none"
            >
              <option value={3}>Class 3: Idle (Only access disk when system is quiet)</option>
              <option value={2}>Class 2: Best-Effort (Standard normal I/O priority)</option>
              <option value={1}>Class 1: Real-time (Always gets first disk access)</option>
            </select>
          </div>

          {/* Player Choice */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Preferred Audio Player:
            </label>
            <select
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-emerald-500 focus:outline-none"
            >
              <option value="auto">Auto-detect (System default)</option>
              <option value="paplay">paplay (PulseAudio Linux)</option>
              <option value="pw-play">pw-play (PipeWire Linux)</option>
              <option value="aplay -q">aplay (ALSA Linux)</option>
              <option value="canberra-gtk-play -f">canberra-gtk-play (Desktop theme)</option>
              <option value="afplay">afplay (macOS native)</option>
              <option value="mpv --no-terminal --really-quiet">mpv (Universal)</option>
            </select>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={sync}
                onChange={(e) => setSync(e.target.checked)}
                className="rounded border-slate-700 accent-emerald-500"
              />
              <span>Flush sync</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
                className="rounded border-slate-700 accent-emerald-500"
              />
              <span>Desktop alert</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={bell}
                onChange={(e) => setBell(e.target.checked)}
                className="rounded border-slate-700 accent-emerald-500"
              />
              <span>Terminal bell</span>
            </label>
          </div>
        </div>

        {/* Output Column */}
        <div className="space-y-4">
          {/* CLI Invocation Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-emerald-400" />
                Inline Command (One-off)
              </span>
              <button
                onClick={() => copyToClipboard(cliOneLiner, 'cli')}
                className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedCli ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded bg-black/60 p-3 font-mono text-xs text-emerald-300">
              {cliOneLiner}
            </pre>
          </div>

          {/* Config file Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <FileCode className="h-4 w-4 text-emerald-400" />
                Permanent File: <code className="text-slate-400">~/.config/vv/config</code>
              </span>
              <button
                onClick={() => copyToClipboard(configContent, 'conf')}
                className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {copiedConf ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedConf ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="max-h-[160px] overflow-y-auto overflow-x-auto rounded bg-black/60 p-3 font-mono text-[11px] text-slate-300">
              {configContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
