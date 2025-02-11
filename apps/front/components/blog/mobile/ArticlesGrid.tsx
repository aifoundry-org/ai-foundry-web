'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import InfiniteArticles from '../universal/InfiniteArticles';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import { FiltersOption, CheckOption } from '../universal/FiltersType';
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import InfiniteArticle from './InfititeArticle';

const getInitTags = (tags: FiltersOption[], selectedTags: string[]) => {
    const formattedTags = tags.map(tag => ({
        ...tag,
        isChecked: selectedTags.includes(tag.id.toString()),
    }));
  
    return formattedTags;
};

interface ArticlesGridProps {
    articles: StrapiData<StrapiArticle[]>;
    search: string;
    tags: FiltersOption[];
    selectedTags: string[];
}

export default function ArticlesGrid({articles, search, tags, selectedTags}: ArticlesGridProps) {
    const pathname = usePathname();
    const { replace } = useRouter();
    const router = useRouter();
    const { createQueryString } = useQueryString();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(search);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const [filtersOptions, setFiltersOptions] = useState(getInitTags(tags, selectedTags));
    const tagsParams = searchParams.get('tags');
    const hasMoreArticles = useMemo(() => articles.data.length > 0, [articles]);

    useEffect(() => {
        if (debouncedSearchTerm !== search) {
            const newUrl = debouncedSearchTerm
            ? `${pathname}?${createQueryString('search', [debouncedSearchTerm])}`
            : `${pathname}${
                tagsParams
                    ? `?tags=${tagsParams
                        .split(',')
                        .map(tag => encodeURIComponent(tag))
                        .join('%2C')}`
                    : ''
                }`;
            replace(newUrl, { scroll: false });
        }
    }, [debouncedSearchTerm, search, pathname, replace, createQueryString, tagsParams, router]);

    const handleFilterClick = (updatedOption: CheckOption) => {
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

    return (
        <div className='md:hidden m-auto text-center px-10 mb-14 pt-2'>
            <div className='flex flex-col items-start gap-4 mb-16'>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='w-full mt-5' value={searchTerm} onChange={handleSearch} />
            </div>
            <div>
                {!hasMoreArticles && <p className='mb-10 text-3xl text-left'>Oops! 😕 We couldn&apos;t find that post</p>}

                <InfiniteArticles
                    search={debouncedSearchTerm}
                    tags={selectedTags}
                    initArticles={articles.data}
                    InfiniteArticleComponent={InfiniteArticle}
                />
            </div>
        </div>
    );
}