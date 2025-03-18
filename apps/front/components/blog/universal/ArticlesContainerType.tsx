import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { ArticleProp } from '../desktop/Article';

export interface ArticlesContainerProps {
  search: string;
  tags: string[];
  initArticles: StrapiData<StrapiArticle[]>;
  featuredArticleId?: number;
  ArticleComponent: React.FC<ArticleProp>;
}

export const PAGINATION_LIMIT = 6