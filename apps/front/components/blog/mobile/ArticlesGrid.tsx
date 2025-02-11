'use client'

import { useMemo, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import InfiniteArticlesContainer from '../universal/InfiniteArticlesContainer';
import InfiniteArticle from './InfititeArticle';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import { CheckOption } from '../universal/FiltersType';
import { ArticlesGridProps } from '../universal/ArticlesGridPropsType';

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
        <div className='md:hidden m-auto text-center px-10 mb-14 pt-2'>
            <div className='flex flex-col items-start gap-4 mb-16'>
                <Filters options={filtersOptions} onClick={() => handleFilterClick} />
                <SearchInput className='w-full mt-5' value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
            </div>
            <div>
                {!hasMoreArticles && <p className='mb-10 text-3xl text-left'>Oops! 😕 We couldn&apos;t find that post</p>}

                <InfiniteArticlesContainer
                    search={debouncedSearchTerm}
                    tags={filtersOptions.filter(option => option.isChecked).map(option => option.id)}
                    initArticles={articles}
                    InfiniteArticleComponent={InfiniteArticle}
                />
            </div>
        </div>
    );
}