import type { Metadata } from "next";
import "./globals.css";

import HeaderDesktop from '@/components/Desktop/Header';
import HeaderMobile from '@/components/Mobile/Header';

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
      </body>
    </html>
  );
}
