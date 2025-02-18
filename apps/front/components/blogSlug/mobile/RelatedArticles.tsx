/* eslint-disable */
import Link from 'next/link';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/pngs/blogSlug/backgroundRelatedPostsMobile.png'
import IMGGraffiti from '@/public/pngs/blogSlug/graffitiMobile.png'
import IMGError from '@/public/pngs/blogSlug/errorMobile.png'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from '@/components/blog/mobile/ArticleThumbnail';

interface BlogArticleProps {
    articles?: StrapiArticle[];
}

export default function RelatedArticles({ articles }: BlogArticleProps) {
  return (
    <div className='bg-peach mt-[20vw] px-[2.4rem] relative'>
        <img className='flex w-full absolute -top-[21vw] left-0 -z-[1]' src={IMGBackground.src} />
        <div className='flex flex-col mb-[10vw]'>
            <p className='font-black text-[4.8rem] leading-[4rem] uppercase'>Related posts</p>
        </div>
        <div className='flex flex-col gap-y-[10vw]'>
            {articles && articles.map((article: any) => ArticleThumbnail({article}))}
            <div className='flex w-full justify-start mb-[25vw] -mt-[6vw]'>
                <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
            </div>
        </div>
        <img className='flex w-[60vw] absolute -bottom-[7.5vw] right-0 mix-blend-overlay' src={IMGGraffiti.src} />
        <img className='flex w-[44.6vw] absolute bottom-0 right-0' src={IMGError.src} />
    </div>
  );
};