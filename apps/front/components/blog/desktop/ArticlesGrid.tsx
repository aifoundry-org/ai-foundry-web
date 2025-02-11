'use client'

import { useMemo, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import InfiniteArticles from '../universal/InfiniteArticles';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import InfiniteArticle from './InfititeArticle';
import { CheckOption, FiltersOption } from '../universal/FiltersType';

interface ArticlesGridProps {
    articles: any;
    searchTerm: string;
    onSearchChange: (newSearch: string) => void;
    filtersOptions: FiltersOption[];
    onFilterChange: (updatedFilters: any[]) => void;
}

export default function ArticlesGrid({
    articles,
    searchTerm,
    onSearchChange,
    filtersOptions,
    onFilterChange
  }: ArticlesGridProps) {
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const pathname = usePathname();
    const { replace } = useRouter();
    const { createQueryString } = useQueryString();
    const searchParams = useSearchParams();
    const tagsParams = searchParams.get('tags');

    const hasMoreArticles = useMemo(() => articles.data.length > 0, [articles]);

    useEffect(() => {
        const newUrl = debouncedSearchTerm
            ? `${pathname}?${createQueryString('search', [debouncedSearchTerm])}`
            : `${pathname}${tagsParams ? `?tags=${tagsParams}` : ''}`;

        replace(newUrl, { scroll: false });
    }, [debouncedSearchTerm, pathname, replace, createQueryString, tagsParams]);

    const handleFilterClick = (updatedOption: CheckOption) => {
        const updatedFilters = filtersOptions.map(option => ({
        ...option,
        isChecked: option.id === updatedOption.id ? updatedOption.isChecked : option.isChecked,
        }));

        onFilterChange(updatedFilters);

        const checkedFilters = updatedFilters.filter(option => option.isChecked).map(option => option.id);
        replace(`${pathname}?${createQueryString('tags', checkedFilters)}`, { scroll: false });
    };

    return (
        <div className='hidden md:block md:max-w-[130rem] md:m-auto md:text-center md:mb-14 md:px-20'>
            <div className='flex flex-row items-start gap-4 mb-20'>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='w-[19.9vw]' value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
            </div>
            <div>
                {!hasMoreArticles && <p className='mb-10 font-host-grotesk text-[1.8vw] text-left'>Oops! 😕 We couldn&apos;t find that article</p>}

                <InfiniteArticles
                    search={debouncedSearchTerm}
                    tags={filtersOptions.filter(option => option.isChecked).map(option => option.id)}
                    initArticles={articles.data}
                    featuredArticleId={0}
                    InfiniteArticleComponent={InfiniteArticle}
                />
            </div>
            
        </div>
    );
}