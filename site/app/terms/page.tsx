import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — vv Documentation',
  description: 'Terms of service for the vv documentation website.',
};

export default function TermsPage() {
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
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs text-slate-400">Last updated: October 4, 2026</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-slate-300">
        <p>
          Welcome to the <strong>vv</strong> project documentation website. By accessing or using this website, you agree to be bound by these Terms of Service.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            1. Open Source License
          </h2>
          <p>
            The <code>vv</code> software utility is open source software distributed under the GNU General Public License v3.0 (GPLv3). You are free to view, copy, modify, and distribute the script in accordance with the terms of the GPLv3 license.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            2. Disclaimer of Warranties
          </h2>
          <p>
            The software and documentation are provided &quot;as is&quot;, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            3. Accuracy of Materials
          </h2>
          <p>
            The documentation and materials appearing on this website could include technical, typographical, or photographic errors. We may make changes to the materials contained on this website at any time without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            4. External Links
          </h2>
          <p>
            This website may contain links to external sites such as GitHub. We are not responsible for the contents of any such linked site.
          </p>
        </section>
      </div>
    </div>
  );
}
