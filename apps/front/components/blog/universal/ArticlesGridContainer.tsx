'use client'

import { useState } from 'react';
import { ArticlesGridProps } from './ArticlesGridContainerType';
import { FiltersOption } from './FiltersType';
import ArticlesGridDesktop from '@/components/blog/desktop/ArticlesGrid'
import ArticlesGridMobile from '@/components/blog/mobile/ArticlesGrid'

const getInitTags = (tags: FiltersOption[], selectedTags: string[]) => {
    const formattedTags = tags.map(tag => ({
        ...tag,
        isChecked: selectedTags.includes(tag.id.toString()),
    }));
  
    return formattedTags;
};

export default function ArticlesGridContainer({articles, search, tags, selectedTags}: ArticlesGridProps) {
    const [searchTerm, setSearchTerm] = useState<string>(search);
    const [filtersOptions, setFiltersOptions] = useState<FiltersOption[]>(getInitTags(tags, selectedTags));

    const handleSearchChange = (newSearch: string) => setSearchTerm(newSearch);
    const handleFilterChange = (updatedFilters: FiltersOption[]) => setFiltersOptions(updatedFilters);

    return (
        <>
            <ArticlesGridDesktop
                articles={articles}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                filtersOptions={filtersOptions}
                onFilterChange={handleFilterChange}
            />
            <ArticlesGridMobile
                articles={articles}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                filtersOptions={filtersOptions}
                onFilterChange={handleFilterChange}
            />
        </>
    )
}