'use client'

import { useMemo, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryString } from '@/hooks/useQueryString';
import useDebounce from '@/hooks/useDebounce';
import ArticlesContainer from '../universal/ArticlesContainer';
import Article from './Article';
import Filters from './Filters';
import SearchInput from '../universal/SearchInput';
import { CheckOption } from '../universal/FiltersType';
import { ArticlesListProps } from '../universal/ArticlesListPropsType';
import IMGComputer from '@/public/imgs/blog/computer.webp'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function ArticlesList({
    articles,
    searchTerm,
    onSearchChange,
    filtersOptions,
    onFilterChange,
    featuredArticleId
  }: ArticlesListProps) {
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
        <div className='hidden md:block md:w-[84.45vw] xl:w-[84.394vw] 2xl:w-[84.394vw] md:m-auto md:text-center'>
            <div className='flex flex-row items-center gap-4 mb-20'>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='w-[19.9vw]' inputClassName='h-[3.37vw] text-[1.6rem]' value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
            </div>
            <div>
                {!hasMoreArticles && 
                    <div className='flex flex-col w-full items-center my-[10vw]'>
                        <p className='font-dharma-gothic-e text-[4rem] text-black font-black uppercase'>
                            There are no exact matches found
                        </p>
                        <p className='font-host-grotesk text-[2rem] text-black font-bold'>
                            Please, try again!
                        </p>
                        <div className='w-[23.2rem] mt-[3.34vw]'>
                            <ImageWrapper src={IMGComputer.src} alt='Computer not found' />
                        </div>
                    </div>
                }

                <ArticlesContainer
                    search={debouncedSearchTerm}
                    tags={filtersOptions.filter(option => option.isChecked).map(option => option.id)}
                    initArticles={articles}
                    featuredArticleId={featuredArticleId}
                    ArticleComponent={Article}
                />
            </div>
        </div>
    );
}