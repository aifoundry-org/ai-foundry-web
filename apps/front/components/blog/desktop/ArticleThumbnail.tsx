import ArticleTag from '@/components/common/desktop/ArticleTag';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';

interface ArticleThumbnailProps {
    article: StrapiArticle,
    isFeaturedArticle?: boolean;
}

export default function ArticleThumbnail({article, isFeaturedArticle = false}: ArticleThumbnailProps) {
    const { id, title, date, authors, coverImage, slug, tags } = article;

    return (
        <div key={id} className={`flex flex-col w-full h-full ${isFeaturedArticle ? 'sm:col-start-1 sm:col-end-3' : ''}`}>
            <div className={`flex flex-row items-center justify-between mb-[1.675vw] h-[21.4rem] overflow-hidden`}>
                {coverImage ? 
                    <img width={389} height={214} src={getStrapiMediaUrl(coverImage.url)} className='w-full h-full border-2 border-black rounded-lg object-cover object-top' alt="cover" /> : 
                    <div className='flex w-full h-full border-2 border-black rounded-lg items-center justify-center text-[4vw] uppercase'>No cover image</div>
                }
            </div>
            <div className='flex flex-row items-center mb-[2vw] overflow-x-auto md:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-x-[1vw] md:gap-x-[0.575vw] lg:gap-x-[0.575vw] xl:gap-x-[0.575vw] 2xl:gap-x-[0.575vw]'>
                {tags.map((el: StrapiTag) => ArticleTag({el})) }
            </div>
            <div className='flex flex-row text-start mb-[2vw] md:mb-[1.25vw] lg:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                <p className='font-dharma-gothic-e font-black text-[5vw] md:text-[4vw] lg:text-[2.778vw] xl:text-[3.34vw] 2xl:text-[3.34vw] leading-[4vw] md:leading-[4vw] lg:leading-[2.3vw] xl:leading-[2.8vw] 2xl:leading-[2.8vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-row font-normal text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] sm:leading-[4vw] lg:leading-[1.5vw] xl:leading-[1.5vw] 2xl:leading-[1.5vw] font-host-grotesk'>
                {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <div className='flex flex-row justify-start mt-8'>
                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
            </div>
        </div>
    )
}