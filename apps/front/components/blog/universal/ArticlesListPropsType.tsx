import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { FiltersOption } from './FiltersType';

export interface ArticlesListProps {
    articles: StrapiData<StrapiArticle[]>;
    searchTerm: string;
    onSearchChange: (newSearch: string) => void;
    filtersOptions: FiltersOption[];
    onFilterChange: (updatedFilters: FiltersOption[]) => void;
    featuredArticleId: number;
}