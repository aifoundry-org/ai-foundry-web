import ArticleTag from '@/components/common/mobile/ArticleTag';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image'
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';

interface ArticleThumbnailProps {
    article: StrapiArticle,
}

export default function ArticleThumbnail({article}: ArticleThumbnailProps) {
    const { id, title, date, authors, coverImage, slug, tags } = article;

    return (
        <div key={id} className='flex flex-col w-full h-full'>
            <div className='flex flex-row mb-[7vw]'>
                {coverImage ? 
                    <Image width={1000} height={214} src={getStrapiMediaUrl(coverImage.url)} className='border-2 border-black rounded-lg w-full h-[57.1vw] object-cover' alt="cover" /> : 
                    <div className='flex w-full h-[48vw] border-2 border-black rounded-lg uppercase text-[8vw] justify-center items-center'>No cover image</div>}
            </div>
            <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw] flex-wrap gap-y-[2.15vw]'>
                {tags.map((el: StrapiTag) => ArticleTag({el})) }
            </div>
            <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                <p className='font-dharma-gothic-e text-left font-black text-[8.6vw] leading-[7vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <div className='flex flex-row basis-[80%] justify-start mt-7 mb-9'>
                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
            </div>
        </div>
    )
}