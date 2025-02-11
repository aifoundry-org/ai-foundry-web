'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import InfiniteArticles from '../universal/InfiniteArticles';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import { FiltersOption, CheckOption } from '../universal/FiltersType';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
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
    const [searchTerm, setSearchTerm] = useState(search);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const [filtersOptions, setFiltersOptions] = useState(getInitTags(tags, selectedTags));
    const pathname = usePathname();
    const { replace } = useRouter();
    const router = useRouter();
    const { createQueryString } = useQueryString();
    const searchParams = useSearchParams();
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
        <div className='hidden md:block md:max-w-[130rem] md:m-auto md:text-center md:mb-14 md:px-20'>
            <div className='flex flex-row items-start gap-4 mb-20'>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='w-[19.9vw]' value={searchTerm} onChange={handleSearch} />
            </div>
            <div>
                {!hasMoreArticles && <p className='mb-10 font-host-grotesk text-[1.8vw] text-left'>Oops! 😕 We couldn&apos;t find that article</p>}

                <InfiniteArticles
                    search={debouncedSearchTerm}
                    tags={selectedTags}
                    initArticles={articles.data}
                    featuredArticleId={0}
                    InfiniteArticleComponent={InfiniteArticle}
                />
            </div>
            
        </div>
    );
}