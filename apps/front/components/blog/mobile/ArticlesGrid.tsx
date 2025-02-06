'use client'

import { useState, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import articles from '@/mock/home/latestInsights/data'
import InfiniteArticles from './InfititeArticles';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import { FiltersOption, CheckOption } from '../universal/FiltersType';

const getInitTags = (tags: FiltersOption[], selectedTags: string[]) => {
    const formattedTags = tags.map(tag => ({
        ...tag,
        isChecked: selectedTags.includes(tag.id.toString()),
    }));
  
    return formattedTags;
};

export default function ArticlesGrid() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const { replace } = useRouter();
    const { createQueryString } = useQueryString();
    const pathname = usePathname();
    const selectedTags : Array<string> = []
    
    // TODO: Replace with strapi implementation
    let allTags: Array<string> = []
    articles.forEach(article => {
        allTags.push(...article.tags);
    })

    allTags = [...new Set(allTags)]
    const tags: Array<FiltersOption> = []
    allTags.forEach((tag, i) => {
        tags.push({
            id: i.toString(),
            isChecked: false,
            name: tag
        })
    })
    // END TODO

    const [filtersOptions, setFiltersOptions] = useState(getInitTags(tags, selectedTags));

    const handleCheckboxChange = (updatedOption: CheckOption) => {
        const updatedfiltersOptions = filtersOptions.map(option => ({
          ...option,
          isChecked: option.id === updatedOption.id ? updatedOption.isChecked : option.isChecked,
        }));
        const checkedFilters = updatedfiltersOptions.filter(option => option.isChecked).map(option => option.id);
    
        setFiltersOptions(updatedfiltersOptions);
        replace(`${pathname}?${createQueryString('tags', checkedFilters)}`, { scroll: false });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const hasMoreArticles = useMemo(() => articles.length > 0, [articles]);

    return (
        <div className='md:hidden m-auto text-center px-10 mb-14 pt-2'>
            <div className='flex flex-col items-start gap-4 mb-16'>
                <Filters options={filtersOptions} onChange={handleCheckboxChange} />
                <SearchInput className='w-full mt-5' value={searchTerm} onChange={handleSearch} />
            </div>
            <div>
                {!hasMoreArticles && <p className='mb-10 text-3xl text-left'>Oops! 😕 We couldn&apos;t find that post</p>}

                <InfiniteArticles
                    search={debouncedSearchTerm}
                    tags={selectedTags}
                    initArticles={articles}
                    featuredArticleId={1}
                />
            </div>
        </div>
    );
}