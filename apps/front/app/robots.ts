import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/terms-and-conditions/', '/not-found/'],
    },
    sitemap: 'https://aifoundry.org/sitemap.xml',
    host: 'https://aifoundry.org'
  }
}