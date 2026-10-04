'use client';

import React, { useEffect, useRef } from 'react';

interface AdSenseUnitProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  label?: string;
}

export function AdSenseUnit({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  label = 'Advertisement',
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      // AdSense push may throw if ad blockers are active or already rendered
    }
  }, []);

  return (
    <div className={`my-8 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 text-center ${className}`}>
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>
      <div className="flex min-h-[90px] w-full items-center justify-center overflow-hidden">
        {slot ? (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8973108060277483"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />
        ) : (
          <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/40 py-6 text-xs text-slate-400">
            <span>AdSense Responsive Unit &bull; Client ID: <code className="text-slate-300">ca-pub-8973108060277483</code></span>
          </div>
        )}
      </div>
    </div>
  );
}
