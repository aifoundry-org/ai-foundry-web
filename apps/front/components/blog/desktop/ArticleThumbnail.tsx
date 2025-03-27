'use client'

import ArticleTag from '@/components/common/desktop/ArticleTag';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image'
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';

interface ArticleThumbnailProps {
    article: StrapiArticle,
    isFeaturedArticle?: boolean;
}

export default function ArticleThumbnail({article, isFeaturedArticle = false}: ArticleThumbnailProps) {
    const { id, title, date, authors, coverImage, slug, tags } = article;

    return (
        <div onClick={() => {
            window.location.href = `/blog/${slug}`
        }} key={id} className={`flex flex-col w-full h-full ${isFeaturedArticle ? 'sm:col-start-1 sm:col-end-3' : ''}`}>
            <div className={`flex flex-row items-center justify-between mb-[1.675vw] h-[21.4rem] overflow-hidden`}>
                {coverImage ? 
                    <Image width={389} height={214} src={getStrapiMediaUrl(coverImage.url)} className='w-full h-full border-2 border-black rounded-lg object-cover object-top' alt="cover" /> : 
                    <div className='flex w-full h-full border-2 border-black rounded-lg items-center justify-center text-[4vw] uppercase'>No cover image</div>
                }
            </div>
            <div className='max-w-[100%] flex flex-row justify-start items-center flex-wrap mb-[2vw] overflow-x-auto md:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-[1vw]  md:gap-[0.575vw] lg:gap-[0.575vw] xl:gap-[0.575vw] 2xl:gap-[0.575vw]'>
                {tags.map((el: StrapiTag) => ArticleTag({el})) }
            </div>
            <div className='flex flex-row text-start mb-[2vw] md:mb-[1.25vw] lg:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                <h3 className='font-dharma-gothic-e font-black text-[5vw] md:text-[4vw] lg:text-[2.778vw] xl:text-[3.34vw] 2xl:text-[3.34vw] leading-[4vw] md:leading-[4vw] lg:leading-[2.3vw] xl:leading-[2.8vw] 2xl:leading-[2.8vw] uppercase'>{title}</h3>
            </div>
            <div className='flex flex-row'>
                <h4 className='normal-case font-normal text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] sm:leading-[4vw] lg:leading-[1.5vw] xl:leading-[1.5vw] 2xl:leading-[1.5vw] font-host-grotesk mb-8'>
                    {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </h4>
            </div>
            <div className='flex flex-row justify-start mt-auto mr-auto mb-0 ml-0'>
                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
            </div>
        </div>
    )
}