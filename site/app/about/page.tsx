import React from 'react';
import Link from 'next/link';
import { Volume2, ArrowLeft, Terminal, Heart, Award, Shield } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { AdSenseUnit } from '../components/AdSenseUnit';

export const metadata = {
  title: 'About vv — The Polite CLI Task Wrapper',
  description: 'Learn about the philosophy, history, and author of the vv project.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to vv Documentation
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <Volume2 className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">About vv</h1>
          <p className="text-xs text-slate-400">The Polite Command Line Companion</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-slate-300">
        <p className="text-base text-slate-200">
          <strong>vv</strong> is a lightweight, zero-dependency command line wrapper created by{' '}
          <a
            href="https://github.com/joshuacox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-semibold"
          >
            Joshua Edward McLaughlin Cox
          </a>.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            The Philosophy: Why was vv built?
          </h2>
          <p>
            When developers run long tasks in a terminal — like <code>apt upgrade</code>, <code>make -j16</code>, <code>docker build</code>, or a large disk backup — they often switch to a browser or other windows. Two frustrating problems frequently occur:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300">
            <li>
              <strong>Resource starvation:</strong> A heavy compilation spikes CPU and disk queues, causing UI stutters, lagging audio, and unresponsive browser tabs.
            </li>
            <li>
              <strong>Uncertain completion & lost context:</strong> You forget about the terminal, only to check back 30 minutes later to discover it completed in 40 seconds (or failed after 2 seconds with an error).
            </li>
            <li>
              <strong>False completion from kernel writeback caches:</strong> When a disk-heavy job finishes, the Linux page cache may still be holding hundreds of megabytes of unwritten data. Unmounting or shutting down immediately can cause data loss or unexpected hangs.
            </li>
          </ol>
          <p>
            <code>vv</code> elegantly solves all three: it runs tasks at nice CPU priority (19) and idle I/O priority (3), times the execution, explicitly flushes dirty pages with <code>sync</code>, and alerts you via an audible chime and desktop notification the exact moment it is done.
          </p>
        </section>

        <AdSenseUnit />

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            Open Source & Community
          </h2>
          <p>
            <code>vv</code> is 100% free and open source software licensed under the GNU General Public License v3.0 (GPLv3). We welcome contributions, bug reports, and suggestions from developers worldwide.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/joshuacox/vv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://github.com/joshuacox/vv/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Submit an Issue
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
