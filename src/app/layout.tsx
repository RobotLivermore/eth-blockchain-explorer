import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ethereum Blockchain Explorer',
  description:
    'explore the world of Ethereum, latest block, details of addresses, transactions...',
  'google-site-verification': 'zoUsaNnteV0crCLpi16BzaZTuo2ptsBgoNYBgFalOW0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="zoUsaNnteV0crCLpi16BzaZTuo2ptsBgoNYBgFalOW0"
      />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V0MLBRTK1C"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V0MLBRTK1C');
        `}
      </Script>
      <body
        className={`${inter.className} bg-[#F3F7F7] min-h-screen flex flex-col`}
      >
        <main className="flex flex-col items-center justify-between flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
