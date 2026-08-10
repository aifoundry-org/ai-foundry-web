import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
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
        hostname: 'blog.aifoundry.org',
        pathname: '/**',
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=60'
          },
        ],
      },
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/terms-conditions',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/shelley',
        destination:
          'https://exe.dev/new?prompt=Once%20the%20VM%20is%20up%20and%20running%2C%20make%20sure%20to%20replace%20the%20default%20Shelley%20that%20is%20running%20there%20with%20the%20latest%20version%20of%20Shelley%20available%20from%20https%3A%2F%2Faifoundry-org.github.io%2Fshelley%2F',
        permanent: false,
      }
    ]
  }
};

export default process.env.ANALYZE ? withBundleAnalyzer({ enabled: true })(nextConfig) : nextConfig;
