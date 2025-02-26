import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost', 'strapi.ai-foundry.litebox.dev'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
  },
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    workerThreads: true,
    cpus: 4,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default process.env.ANALYZE ? withBundleAnalyzer({ enabled: true })(nextConfig) : nextConfig;
