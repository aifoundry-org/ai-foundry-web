/* eslint-disable */
import Link from 'next/link';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/pngs/blogSlug/backgroundRelatedPosts.png'
import IMGBackgroundDecorations from '@/public/pngs/blogSlug/backgroundDecorations.png'
import IMGGraffiti from '@/public/pngs/blogSlug/graffiti.png'
import IMGError from '@/public/pngs/blogSlug/error.png'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from '@/components/blog/desktop/ArticleThumbnail';

interface BlogArticleProps {
    articles?: StrapiArticle[];
}

export default function RelatedArticles({ articles }: BlogArticleProps) {
  return (
    <div className='bg-peach mt-[28vw] relative w-full'>
        <img className='flex w-[45vw] absolute -top-[20.75vw] right-0' src={IMGBackgroundDecorations.src} />
        <img className='flex w-full absolute -top-[17vw] left-0 -z-[1]' src={IMGBackground.src} />
        <div className='flex flex-col px-[8.5vw] mx-auto max-w-[144rem] lg:max-w-[144rem] xl:max-w-[144rem] 2xl:max-w-[200rem] relative -top-[8vw]'>
            <div className='flex w-full flex-row justify-between mb-[4vw]'>
                <p className='font-black text-[4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] justify-start leading-[5.3rem] uppercase'>Related posts</p>
                <div className='flex justify-end'>
                    <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20'>
                {articles && articles.map((article: any) => ArticleThumbnail({article}))}
            </div>
        </div>
        <img className='flex w-[32.45vw] absolute -bottom-[16vw] left-[3.5vw] mix-blend-overlay z-[1]' src={IMGGraffiti.src} />
        <img className='flex w-[20.92vw] absolute -bottom-[2.5vw] left-[5vw] z-[2]' src={IMGError.src} />
    </div>
  );
};