import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export interface InfiniteArticlesProps {
    search: string;
    tags: string[];
    initArticles: StrapiArticle[];
    featuredArticleId: number;
}
  
export const PAGINATION_LIMIT = 10;