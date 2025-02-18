'use client'

import Image from 'next/image';
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
import IMGComputer from '@/public/pngs/blog/computerMobile.png'

export default function ArticlesList({
    articles,
    searchTerm,
    onSearchChange,
    filtersOptions,
    onFilterChange
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
        <div className='md:hidden m-auto text-center px-[2.4rem] mb-14 pt-2'>
            <div className='flex flex-col items-start gap-4 mb-16'>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='w-full mt-10' inputClassName='h-[11vw] text-[1.6rem]' value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
            </div>
            <div>
                {!hasMoreArticles && 
                    <div className='flex flex-col w-full items-center mt-[20vw] mb-[10vw]'>
                        <p className='font-dharma-gothic-e text-[3.2rem] leading-[2.6rem] mb-[1.6rem] text-black font-black uppercase'>
                            There are no exact<br/>matches found
                        </p>
                        <p className='font-host-grotesk text-[1.6rem] text-black font-bold'>
                            Please, try again!
                        </p>
                        <Image className='w-[18.2rem] mt-[3.34vw]' width={232} height={204} src={IMGComputer.src} alt='not-found' />
                    </div>
                }

                <ArticlesContainer
                    search={debouncedSearchTerm}
                    tags={filtersOptions.filter(option => option.isChecked).map(option => option.id)}
                    initArticles={articles}
                    ArticleComponent={Article}
                />
            </div>
        </div>
    );
}