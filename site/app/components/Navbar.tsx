'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Volume2, Menu, X, BookOpen, Sliders, Bell } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
            <Volume2 className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                vv
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                v0.2.0
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">polite cli wrapper</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#simulator" className="hover:text-white transition-colors">
            Interactive Demo
          </Link>
          <Link href="/#configurator" className="hover:text-white transition-colors">
            Configurator
          </Link>
          <Link href="/#docs" className="hover:text-white transition-colors">
            Docs & Reference
          </Link>
          <Link href="/#recipes" className="hover:text-white transition-colors">
            Recipes
          </Link>
          <Link href="/about/" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/joshuacox/vv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
          <Link
            href="/#features"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Features
          </Link>
          <Link
            href="/#simulator"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Interactive Demo
          </Link>
          <Link
            href="/#configurator"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Configurator
          </Link>
          <Link
            href="/#docs"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Docs & Reference
          </Link>
          <Link
            href="/#recipes"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Recipes
          </Link>
          <Link
            href="/about/"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            About
          </Link>
          <Link
            href="/privacy/"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Privacy Policy
          </Link>
          <div className="pt-2">
            <a
              href="https://github.com/joshuacox/vv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
