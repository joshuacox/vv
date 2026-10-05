import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'vv — The Polite Command-Line Wrapper with Audio & Notifications',
  description:
    'A polite CLI wrapper for long-running builds, updates, and benchmarks. Sets nice/ionice, times execution, syncs filesystem caches, and alerts you with audio cues and desktop notifications.',
  keywords: [
    'vv',
    'cli wrapper',
    'nice',
    'ionice',
    'linux audio alert',
    'command line sound',
    'desktop notification',
    'notify-send',
    'sync',
    'terminal utility',
    'bash wrapper',
    'devops tools',
  ],
  authors: [{ name: 'Joshua Edward McLaughlin Cox' }],
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
  openGraph: {
    title: 'vv — The Polite CLI Wrapper',
    description:
      'Run long terminal tasks politely, time them, sync filesystem caches, and receive audio alerts and notifications when done.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8973108060277483" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔊</text></svg>" />
        
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1H2CLH4R3');
          `}
        </Script>

        {/* Google AdSense Main Tag */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
