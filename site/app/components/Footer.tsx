import React from 'react';
import Link from 'next/link';
import { Volume2, Terminal, Shield, FileText, Heart } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function Footer() {
  return (
    <footer className="border-t border-slate-850 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Volume2 className="h-4 w-4" />
              </div>
              <span className="font-mono text-lg font-bold text-white">vv</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              A polite wrapper for command line tasks. Runs politely with nice & ionice, times execution, syncs filesystem caches, and alerts you when your work is done.
            </p>
            <p className="text-[11px] text-slate-500">
              Free and open-source software under the GPLv3 license.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Documentation
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/#install" className="hover:text-emerald-400 transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-emerald-400 transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link href="/#simulator" className="hover:text-emerald-400 transition-colors">
                  Interactive Terminal Demo
                </Link>
              </li>
              <li>
                <Link href="/#configurator" className="hover:text-emerald-400 transition-colors">
                  Config Generator
                </Link>
              </li>
              <li>
                <Link href="/#docs" className="hover:text-emerald-400 transition-colors">
                  Environment Variables
                </Link>
              </li>
              <li>
                <Link href="/#recipes" className="hover:text-emerald-400 transition-colors">
                  Common Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Integrations & Audio
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <span className="text-slate-400">Linux PulseAudio (`paplay`)</span>
              </li>
              <li>
                <span className="text-slate-400">PipeWire (`pw-play`)</span>
              </li>
              <li>
                <span className="text-slate-400">ALSA Output (`aplay`)</span>
              </li>
              <li>
                <span className="text-slate-400">Desktop Sound Themes (`canberra`)</span>
              </li>
              <li>
                <span className="text-slate-400">macOS Native (`afplay`)</span>
              </li>
              <li>
                <span className="text-slate-400">Desktop Notifications (`notify-send`)</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Legal & Community
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/privacy/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <FileText className="h-3 w-3" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-emerald-400 transition-colors">
                  About vv & Maintainers
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/joshuacox/vv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3 w-3" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/joshuacox/vv/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} vv Project. Originally created by Joshua Edward McLaughlin Cox.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-slate-400">Privacy</Link>
            <span>&bull;</span>
            <Link href="/terms/" className="hover:text-slate-400">Terms</Link>
            <span>&bull;</span>
            <Link href="/about/" className="hover:text-slate-400">About</Link>
            <span>&bull;</span>
            <a href="/ads.txt" target="_blank" className="hover:text-slate-400">ads.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
