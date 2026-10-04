'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Volume2, Bell, CheckCircle2, XCircle, HardDrive, Cpu, Terminal as TerminalIcon } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  cmd: string;
  duration: string;
  success: boolean;
  exitCode: number;
  output: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'build',
    name: 'C/C++ Build (make -j8)',
    cmd: 'vv make -j8',
    duration: '4.21s',
    success: true,
    exitCode: 0,
    output: [
      '[10%] Building C object src/core.o',
      '[45%] Building C object src/parser.o',
      '[85%] Building C object src/utils.o',
      '[100%] Linking C executable bin/myproject',
      'Built target myproject successfully.',
    ],
  },
  {
    id: 'apt',
    name: 'Package Upgrade (apt-get)',
    cmd: 'vv sudo apt-get upgrade -y',
    duration: '12.8s',
    success: true,
    exitCode: 0,
    output: [
      'Reading package lists... Done',
      'Building dependency tree... Done',
      'Calculating upgrade... Done',
      'Unpacking linux-image-generic (6.8.0-45)...',
      'Setting up linux-image-generic (6.8.0-45)...',
      'Processing triggers for initramfs-tools...',
    ],
  },
  {
    id: 'test_fail',
    name: 'Failed Test Suite (cargo test)',
    cmd: 'vv cargo test',
    duration: '2.14s',
    success: false,
    exitCode: 101,
    output: [
      '   Compiling test_suite v0.1.0',
      '    Finished `test` profile [unoptimized + debuginfo]',
      '     Running unittests src/lib.rs',
      'test parser::test_quotes ... ok',
      'test engine::test_oom ... FAILED',
      'failures: engine::test_oom',
      'error: test failed, to rerun pass `--bin test_suite`',
    ],
  },
  {
    id: 'dd',
    name: 'Disk Benchmark (dd sync)',
    cmd: 'vv dd if=/dev/zero of=/tmp/bench bs=1M count=1000',
    duration: '1.82s',
    success: true,
    exitCode: 0,
    output: [
      '1000+0 records in',
      '1000+0 records out',
      '1048576000 bytes (1.0 GB, 1000 MiB) copied, 1.241 s, 845 MB/s',
    ],
  },
];

export function TerminalSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [step, setStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const startSimulation = () => {
    setStep(0);
    setIsRunning(true);
    setShowNotification(false);
    setActiveSound(null);
  };

  useEffect(() => {
    if (!isRunning) return;

    // Step progression
    const timers: NodeJS.Timeout[] = [];

    // Step 1: Launching with nice/ionice
    timers.push(setTimeout(() => setStep(1), 400));
    // Step 2: Running command output
    timers.push(setTimeout(() => setStep(2), 1200));
    // Step 3: Command finishes, time stats
    timers.push(setTimeout(() => setStep(3), 2200));
    // Step 4: now syncing
    timers.push(setTimeout(() => setStep(4), 2900));
    // Step 5: Alerting & notification
    timers.push(
      setTimeout(() => {
        setStep(5);
        setIsRunning(false);
        setShowNotification(true);
        setActiveSound(
          selectedScenario.success
            ? '/usr/share/sounds/freedesktop/stereo/complete.oga'
            : '/usr/share/sounds/freedesktop/stereo/dialog-error.oga'
        );
      }, 3700)
    );

    return () => timers.forEach(clearTimeout);
  }, [isRunning, selectedScenario]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-lg sm:p-6">
      {/* Scenario buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-semibold text-white">Live Simulator</span>
          <span className="text-xs text-slate-400">Select a scenario to test:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedScenario(s);
                setStep(0);
                setIsRunning(false);
                setShowNotification(false);
                setActiveSound(null);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedScenario.id === s.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Terminal Window */}
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800 bg-black/80 font-mono text-xs shadow-inner">
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-slate-850 bg-slate-950 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400">bash - vv wrapper execution</span>
          </div>
          <button
            onClick={startSimulation}
            disabled={isRunning}
            className={`flex items-center gap-1.5 rounded bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors ${
              isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isRunning ? (
              <>
                <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Run {selectedScenario.cmd.split(' ')[1]}</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-5 min-h-[320px] text-slate-200 space-y-2">
          {/* Prompt line */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-slate-100 font-bold">{selectedScenario.cmd}</span>
          </div>

          {step === 0 && !isRunning && (
            <div className="py-12 text-center text-slate-500 italic">
              Click &quot;Run {selectedScenario.cmd.split(' ')[1]}&quot; above to watch vv wrap the command, apply nice/ionice, measure kernel timing, flush dirty write buffers with sync, and trigger audio + desktop notifications.
            </div>
          )}

          {step >= 1 && (
            <div className="rounded border border-slate-800 bg-slate-900/50 p-2 text-[11px] text-slate-400 flex items-center gap-3">
              <Cpu className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                Applied niceness: <strong className="text-slate-200">nice -n 19</strong> (lowest CPU priority) &bull; <strong className="text-slate-200">ionice -c 3</strong> (Idle I/O scheduling)
              </span>
            </div>
          )}

          {step >= 2 && (
            <div className="space-y-1 text-slate-300 pl-2 border-l-2 border-slate-800 my-2">
              {selectedScenario.output.map((line, i) => (
                <div key={i} className={line.includes('FAILED') || line.includes('error:') ? 'text-rose-400 font-semibold' : ''}>
                  {line}
                </div>
              ))}
            </div>
          )}

          {step >= 3 && (
            <div className="text-[11px] text-slate-400 space-y-0.5 border-t border-slate-850 pt-2 font-mono">
              <div className="text-slate-500"># /usr/bin/time -v execution summary:</div>
              <div>&nbsp;&nbsp;User time (seconds): 1.14 &bull; System time: 0.28</div>
              <div>&nbsp;&nbsp;Percent of CPU: 96% &bull; Elapsed wall-clock: {selectedScenario.duration}</div>
              <div>&nbsp;&nbsp;Maximum resident set size: 48,220 KB</div>
              <div>&nbsp;&nbsp;Exit status: <strong className={selectedScenario.success ? 'text-emerald-400' : 'text-rose-400'}>{selectedScenario.exitCode}</strong></div>
            </div>
          )}

          {step >= 4 && (
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold py-1">
              <HardDrive className="h-4 w-4 animate-pulse" />
              <span>now syncing...</span>
              <span className="text-[10px] text-slate-400 font-normal">(flushing unwritten kernel dirty filesystem pages)</span>
            </div>
          )}

          {step >= 5 && (
            <div className="mt-3 space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-emerald-400 animate-bounce" />
                  <span className="text-slate-300 font-bold">Audio Alert:</span>
                  <span className="text-slate-400">
                    {selectedScenario.success ? 'Success Chime (complete.oga)' : 'Failure Alert (dialog-error.oga)'}
                  </span>
                </div>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 font-mono">
                  Backend: paplay / pw-play
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Preserved Exit Code: <strong className={selectedScenario.success ? 'text-emerald-400' : 'text-rose-400'}>{selectedScenario.exitCode}</strong>. Your scripts and CI check <code className="text-slate-300">$?</code> accurately!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Simulated Desktop Notification Toast */}
      {showNotification && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300 rounded-xl border border-slate-700 bg-slate-900/95 p-3.5 shadow-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              selectedScenario.success ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
            }`}>
              {selectedScenario.success ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>{selectedScenario.success ? 'vv: Command succeeded' : `vv: Command failed (${selectedScenario.exitCode})`}</span>
                <span className="text-[10px] font-normal text-slate-400">&bull; notify-send</span>
              </div>
              <div className="text-xs text-slate-300 font-mono mt-0.5">
                {selectedScenario.cmd.replace(/^vv\s+/, '')}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
