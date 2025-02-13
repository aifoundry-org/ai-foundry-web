import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export interface InfiniteArticlesContainerProps {
  search: string;
  tags: string[];
  initArticles: StrapiData<StrapiArticle[]>;
  featuredArticleId?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  InfiniteArticleComponent: any;
}

export const PAGINATION_LIMIT = 6