import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { FiltersOption } from './FiltersType';

export interface ArticlesGridProps {
    articles: StrapiData<StrapiArticle[]>;
    searchTerm: string;
    onSearchChange: (newSearch: string) => void;
    filtersOptions: FiltersOption[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFilterChange: (updatedFilters: any[]) => void;
    featuredArticleId: number;
}