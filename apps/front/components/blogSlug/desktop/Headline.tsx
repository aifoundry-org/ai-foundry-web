'use client'
/* eslint-disable */
import Link from 'next/link';
import { getReadTime } from '@/utils/getReadTime';
import IMGArrowLeft from '@/public/pngs/blogSlug/arrowLeft.png';
import IMGArrows from '@/public/pngs/blogSlug/arrows.png';
import IMGPaper from '@/public/pngs/blogSlug/paper.png';
import SocialShareLink from '@/components/blogSlug/universal/SocialLink';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface HeadlineProps {
    article: StrapiArticle;
    className?: string;
}

const Headline = ({ article, className }: HeadlineProps) => {
    const { title, date, authors, coverImage, tags, paragraphs } = article;
    const paragraphsContent = paragraphs.flatMap((el: any) => el.content.flatMap((el: any) => el.children.flatMap((el: any) => el.text))).join(' ');
    const cleanParagraphsContent = paragraphsContent.replace(/<[^>]*>/g, ' ');

    return (
        <div className={`pb-12 ${className}`}>
            <Link className='flex items-center gap-4 mb-10' href='/blog' rel='noreferrer'>
                <img src={IMGArrowLeft.src} className='w-[2.4rem]' />
                <p className='font-dharma-gothic-e font-bold text-[2rem] leading-[2rem] uppercase'>Go Back to Blog</p>
            </Link>
            <div className='mb-[2.225vw] relative w-fit'>
                <img src={IMGPaper.src} className='absolute w-[25.56vw] -top-[2vw] -right-[2.5vw] -z-[1]' />
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${coverImage.url}`} className='relative w-[80.3rem] border-2 border-black rounded-lg' />
                <img src={IMGArrows.src} className='absolute w-[8.345vw] -bottom-[2vw] right-0' />
            </div>
            <div className='flex flex-wrap gap-2 pb-[2.4rem]'>
                {tags.map((tag: StrapiTag) => (
                    <div key={tag.id} className='bg-orange rounded-md px-[1.4rem] py-[1rem]'>
                        <p className='font-dharma-gothic-e font-bold text-[2rem] leading-[2rem] uppercase'>
                            {tag.name}
                        </p>
                    </div>
                ))}
            </div>
            <h1 className='font-dharma-gothic-e text-[6.4rem] font-black pb-6 leading-[5.3rem] uppercase'>{title}</h1>
            <div className='font-host-grotesk border-b-2 border-neutral-900 flex flex-wrap justify-between gap-y-[2rem] pt-[3.2rem] pb-[2.4rem] font-paralucent gap-2'>
                <div className='flex gap-4 text-neutral-900 items-center font-normal text-[1.6rem] leading-[2.4rem]'>
                    <span className='flex text-wrap'>{authors[0].name}</span>
                    <div className='bg-neutral-900 w-[1px] h-6' />
                    <time className='flex flex-nowrap text-nowrap' dateTime={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <div className='bg-neutral-900 w-[1px] h-6' />
                    <span className='flex flex-nowrap text-nowrap items-center'>{getReadTime(cleanParagraphsContent)}</span>
                </div>
                <div className='flex gap-4 text-neutral-900 items-center justify-start md:justify-end pt-5 md:pt-0 font-normal text-[1.6rem] leading-[2.4rem]'>
                    <div className='flex items-center gap-4'>
                        <span className='flex mr-[1.67vw]'>Share:</span>
                        <div className='flex flex-row items-center gap-[1.67vw]'>
                            <SocialShareLink className='w-[2.4rem]' platform='instagram' title={title} articleContent={title} />
                            <SocialShareLink className='w-[2.4rem]' platform='linkedin' title={title} articleContent={title} />
                            <SocialShareLink className='w-[2.4rem]' platform='x' title={title} articleContent={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headline;
