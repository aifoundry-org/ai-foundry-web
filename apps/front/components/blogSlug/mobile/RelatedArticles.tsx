'use client'

import Link from 'next/link';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/imgs/blogSlug/backgroundRelatedPostsMobile.webp'
import IMGGraffiti from '@/public/imgs/blogSlug/graffitiMobile.webp'
import IMGError from '@/public/imgs/blogSlug/errorMobile.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from '@/components/blog/mobile/ArticleThumbnail';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function RelatedArticles({ articles }: { articles?: StrapiArticle[]}) {
  return (
    <div className='bg-peach mt-[20vw] px-[2.4rem] relative'>
        <div className='flex w-full absolute -top-[21vw] left-0 -z-[1]'>
            <ImageWrapper src={IMGBackground.src} alt="Background" />
        </div>
        <div className='flex flex-col mb-[10vw]'>
            <p className='font-black text-[4.8rem] leading-[4rem] uppercase'>Related posts</p>
        </div>
        <div className='flex flex-col gap-y-[10vw]'>
            {articles && articles.map((article: StrapiArticle) => ArticleThumbnail({article}))}
            <div className='flex w-full justify-start mb-[25vw] -mt-[6vw]'>
                <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
            </div>
        </div>
        <div className='flex w-[60vw] absolute -bottom-[7.5vw] right-0 mix-blend-overlay'>
            <ImageWrapper src={IMGGraffiti.src} alt="Graffiti" />
        </div>
        <div className='flex w-[44.6vw] absolute bottom-0 right-0'>
            <ImageWrapper src={IMGError.src} alt="Error" />
        </div>
    </div>
  );
};