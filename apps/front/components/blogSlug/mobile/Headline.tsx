'use client'
/* eslint-disable */
import Link from 'next/link';
import { getReadTime } from '@/utils/getReadTime';
import IMGArrowLeft from '@/public/pngs/blogSlug/arrowLeft.png';
import SocialShareLink from '@/components/blogSlug/universal/SocialLink';
import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface HeadlineProps {
    article: any
    className?: string;
}

const Headline = ({ article, className }: HeadlineProps) => {
    const { title, date, authors, coverImage, tags, paragraphs } = article;
    const paragraphsContent = paragraphs.flatMap((el: any) => el.content.flatMap((el: any) => el.children.flatMap((el: any) => el.text))).join(' ');
    const cleanParagraphsContent = paragraphsContent.replace(/<[^>]*>/g, ' ');

    return (
        <div className={`pb-12 ${className}`}>
            <Link className='flex items-center gap-4 mb-10' href='/blog' rel='noreferrer'>
                <img src={IMGArrowLeft.src} className='w-[6vw]' />
                <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>Go Back to Blog</p>
            </Link>
            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                <img src={`${process.env.STRAPI_BASE_URL}${coverImage.url}`} className='w-full border-2 border-black rounded-lg' />
            </div>
            <div className='flex flex-wrap gap-2 pb-10'>
                {tags.map((tag: StrapiTag) => (
                    <div key={tag.id} className='bg-orange rounded-md px-[2.15vw] py-[3.2vw] md:px-[1.2vw] md:py-[1.2vw]'>
                        <p className='font-dharma-gothic-e font-bold text-[5vw] md:text-[2.8vw] leading-[1.4vw] uppercase'>
                            {tag.name}
                        </p>
                    </div>
                ))}
            </div>
            <h1 className='font-dharma-gothic-e text-[12.8vw] font-black pb-6 leading-[10.675vw] uppercase'>{title}</h1>
            <div className='font-host-grotesk border-b-2 border-neutral-900 flex flex-col justify-between py-4 font-paralucent gap-2'>
                <div className='flex flex-grow gap-4 text-neutral-900 items-center font-normal text-[3.75vw] leading-[5.6vw]'>
                    <span>{authors[0].name}</span>
                    <div className='bg-neutral-900 w-[1px] h-6' />
                    <time dateTime={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>
                <div className='flex flex-grow gap-4 text-neutral-900 items-center font-normal text-[3.75vw] leading-[5.6vw] my-[3vw]'>
                    <span className='flex items-center'>{getReadTime(cleanParagraphsContent)}</span>
                    <div className='bg-neutral-900 w-[1px] h-6' />
                    <div className='flex items-center gap-4'>
                        <span className='flex mr-[3vw]'>Share:</span>
                        <div className='flex flex-row justify-between items-center gap-11'>
                            <SocialShareLink className='w-[6.4vw] h-[6.4vw]' platform='instagram' title={title} articleContent={title} />
                            <SocialShareLink className='w-[6.4vw] h-[6.4vw]' platform='linkedin' title={title} articleContent={title} />
                            <SocialShareLink className='w-[6.4vw] h-[6.4vw]' platform='x' title={title} articleContent={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headline;
