import type { Metadata } from "next";
import "../globals.css";

import HeaderDesktop from '@/components/common/desktop/Header';
import HeaderMobile from '@/components/common/mobile/Header';

import FooterMobile from '@/components/common/mobile/Footer';
import FooterDesktop from '@/components/common/desktop/Footer';

export const metadata: Metadata = {
  title: "AI Foundry",
  description: "An Open AI community for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
