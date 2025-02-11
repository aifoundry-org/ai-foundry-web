import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export interface InfiniteArticlesContainerProps {
  search: string;
  tags: string[];
  initArticles: StrapiData<StrapiArticle[]>;
  featuredArticleId?: number;
  InfiniteArticleComponent: any;
}

export const PAGINATION_LIMIT = 3