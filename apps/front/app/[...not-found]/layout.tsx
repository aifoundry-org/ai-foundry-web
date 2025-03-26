import type { Metadata } from "next";
import "../globals.css";

import HeaderDesktop from '@/components/notFound/desktop/Header';
import HeaderMobile from '@/components/notFound/mobile/Header';
import IMGOGHome from '@/public/imgs/og/og_home.png'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AiFoundry",
    description: "We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry.",
    openGraph: {
      title: "AiFoundry",
      description: "We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry.",
      images: [IMGOGHome.src],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "AiFoundry",
      description: "We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry.",
      images: [IMGOGHome.src],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

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
