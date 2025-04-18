import type { Metadata } from 'next';
import '../../globals.css';
import IMGOGBlog from '@/public/imgs/og/og_blog.png'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AIFoundry Blog",
    description: "AIFoundry Blog - Latest news from the aifoundry world",
    openGraph: {
      title: "AIFoundry Blog",
      description: "AIFoundry Blog - Latest news from the aifoundry world",
      images: [IMGOGBlog.src],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: "AIFoundry Blog",
      description: "AIFoundry Blog - Latest news from the aifoundry world",
      images: [IMGOGBlog.src],
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
  return children
}
