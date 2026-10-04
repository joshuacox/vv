import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { AdSenseUnit } from '../components/AdSenseUnit';

export const metadata = {
  title: 'Privacy Policy — vv Documentation',
  description: 'Privacy Policy and Google AdSense cookie compliance for vv documentation.',
};

export default function PrivacyPolicyPage() {
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
          <Shield className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: October 4, 2026</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-slate-300">
        <p>
          At <strong>vv</strong> (accessible from our website), the privacy of our visitors is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by our documentation website and how it is used.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            1. Information We Collect
          </h2>
          <p>
            Like most standard website servers, we collect and use log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks to analyze trends, administer the site, track user&apos;s movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            2. Google AdSense & Third-Party Advertising
          </h2>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DoubleClick DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Google Ads Settings
              </a>.
            </li>
            <li>
              Alternatively, visitors can opt out of third-party vendor cookies for personalized advertising by visiting{' '}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <AdSenseUnit />

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            3. Cookies and Web Beacons
          </h2>
          <p>
            Our site uses cookies to store information about visitors&apos; preferences, to record user-specific information on which pages the site visitor accesses or visits, and to customize web page content based on visitors&apos; browser type or other information that the visitor sends via their browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            4. Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
            5. Contact Us
          </h2>
          <p>
            If you have any questions or require more information about our Privacy Policy, please feel free to reach out via our GitHub repository issues at{' '}
            <a
              href="https://github.com/joshuacox/vv/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              github.com/joshuacox/vv/issues
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
