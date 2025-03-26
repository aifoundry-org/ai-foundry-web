 
import type { MetadataRoute } from 'next';
import { getArticles } from '@/backend/blog/actions';

const BASE_URL = 'https://aifoundry.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogArticles: MetadataRoute.Sitemap = [];

  try {
    const articles = await getArticles();

    if (articles && Array.isArray(articles.data) && true) {
      blogArticles = articles.data.map(article => {
        const dateToUse = article.updatedAt;
        return {
          url: `${BASE_URL}/blog/${article.slug}`,
          lastModified: dateToUse ? new Date(dateToUse) : new Date(),
        };
      });
    } else {
      console.error('Unexpected response structure from getArticles:', articles);
    }
  } catch (error) {
    console.error('Error fetching blog articles:', error);
  }

  return [{
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    }, 
    ...blogArticles,
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/not-found`,
      lastModified: new Date(),
    }
  ];
}
