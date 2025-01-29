import type { Metadata } from 'next';
import './globals.css';

import Head from 'next/head';
import HeaderDesktop from '@/components/common/desktop/Header';
import HeaderMobile from '@/components/common/mobile/Header';

import FooterMobile from '@/components/common/mobile/Footer';
import FooterDesktop from '@/components/common/desktop/Footer';

export const metadata: Metadata = {
  title: 'AI Foundry',
  description: 'An Open AI community for all',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/favicon-180x180.png' sizes='180x180' />
        <link rel='icon' href='/favicon.png' type='image/png' sizes='60x60' />
      </Head>
      <body>
        <HeaderDesktop />
        <HeaderMobile />
        {children}
        <FooterMobile />
        <FooterDesktop />
      </body>
    </html>
  );
}
