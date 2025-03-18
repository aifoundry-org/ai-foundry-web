'use client'

import Link from 'next/link';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/imgs/blogSlug/backgroundRelatedPosts.webp'
import IMGBackgroundDecorations from '@/public/imgs/blogSlug/backgroundDecorations.webp'
import IMGGraffiti from '@/public/imgs/blogSlug/graffiti.webp'
import IMGError from '@/public/imgs/blogSlug/error.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from '@/components/blog/desktop/ArticleThumbnail';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function RelatedArticles({ articles }: {
    articles?: StrapiArticle[];
}) {
  return (
    <div className='bg-peach mt-[28vw] relative w-full'>
        <div className='flex w-[45vw] absolute -top-[20.75vw] right-0'>
            <ImageWrapper src={IMGBackgroundDecorations.src} alt='Background decorations'/>
        </div>
        <div className='flex w-full absolute -top-[17vw] left-0 -z-[1]'>
            <ImageWrapper src={IMGBackground.src} alt='Background'/>
        </div>
        <div className='flex flex-col px-[8.5vw] mx-auto max-w-[144rem] lg:max-w-[144rem] xl:max-w-[144rem] 2xl:max-w-[200rem] relative -top-[8vw]'>
            <div className='flex w-full flex-row justify-between mb-[4vw]'>
                <p className='font-black text-[4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] justify-start leading-[5.3rem] uppercase'>Related posts</p>
                <div className='flex justify-end'>
                    <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20'>
                {articles && articles.map((article: StrapiArticle) => ArticleThumbnail({article}))}
            </div>
        </div>
        <div className='flex w-[32.45vw] absolute -bottom-[16vw] left-[3.5vw] mix-blend-overlay z-[1]'>
            <ImageWrapper src={IMGGraffiti.src} alt='Graffiti'/>
        </div>
        <div className='flex w-[20.92vw] absolute -bottom-[2.5vw] left-[5vw] z-[2]'>
            <ImageWrapper src={IMGError.src} alt='Error'/>
        </div>
    </div>
  );
};