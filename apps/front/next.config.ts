import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['127.0.0.1', 'localhost', 'strapi.ai-foundry.litebox.dev', 'substackcdn.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.ai-foundry.litebox.dev',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        pathname: '/**',
      },
    ]
  },
  compress: true,
  experimental: {
    scrollRestoration: true,
    cssChunking: true,
    optimizeCss: true,
    optimizePackageImports: [
      '@dotlottie/react-player',
      '@gsap/react',
      'motion',
      'swiper',
    ],
  },
  webpack: (config) => {
    config.parallelism = 4;
    return config;
  },
};

export default process.env.ANALYZE ? withBundleAnalyzer({ enabled: true })(nextConfig) : nextConfig;
