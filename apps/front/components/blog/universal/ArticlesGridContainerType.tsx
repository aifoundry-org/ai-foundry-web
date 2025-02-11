import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { FiltersOption } from './FiltersType';

export interface ArticlesGridProps {
    articles: StrapiData<StrapiArticle[]>;
    search: string;
    tags: FiltersOption[];
    selectedTags: string[];
}