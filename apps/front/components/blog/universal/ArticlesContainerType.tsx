import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export interface ArticlesContainerProps {
  search: string;
  tags: string[];
  initArticles: StrapiData<StrapiArticle[]>;
  featuredArticleId?: number;
  ArticleComponent: any;
}

export const PAGINATION_LIMIT = 6