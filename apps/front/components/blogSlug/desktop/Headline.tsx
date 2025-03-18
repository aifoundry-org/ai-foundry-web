'use client'

import Link from 'next/link';
import { getReadTime } from '@/utils/getReadTime';
import IMGArrowLeft from '@/public/imgs/blogSlug/arrowLeft.webp';
import IMGArrows from '@/public/imgs/blogSlug/arrows.webp';
import IMGPaper from '@/public/imgs/blogSlug/paper.webp';
import SocialShareLink from '@/components/blogSlug/universal/SocialLink';
import { StrapiArticle, StrapiParagraph, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

interface HeadlineProps {
    article: StrapiArticle;
    className?: string;
}

const Headline = ({ article, className }: HeadlineProps) => {
    const { title, date, authors, coverImage, tags, paragraphs } = article;
    const paragraphsContent = paragraphs.flatMap((el: StrapiParagraph) => el.content.flatMap((el) => el.children.flatMap((el: {type:string, text: string}) => el.text))).join(' ');
    const cleanParagraphsContent = paragraphsContent.replace(/<[^>]*>/g, ' ');

    return (
        <div className={className}>
            <Link className='flex items-center gap-4 mb-10' href='/blog' rel='noreferrer'>
                <div className='w-[2.4rem]'>
                    <ImageWrapper src={IMGArrowLeft.src} alt="Arrow left" />
                </div>
                <p className='font-dharma-gothic-e font-bold text-[2rem] leading-[2rem] uppercase'>Go Back to Blog</p>
            </Link>
            <div className='mb-[2.225vw] relative w-fit'>
                <div className='absolute w-[25.56vw] -top-[2vw] -right-[2.5vw] -z-[1]'>
                    <ImageWrapper src={IMGPaper.src} alt="Paper background" />
                </div>
                {coverImage ? 
                    <div className='relative w-[80.3rem] border-2 border-black rounded-lg'>
                        <ImageWrapper src={getStrapiMediaUrl(coverImage.url)} alt="Cover image" />
                    </div> : 
                    <div className='flex w-[80.3rem] h-[44.3rem] border-2 border-black bg-sand rounded-lg text-center justify-center items-center text-[2vw] uppercase'>No cover image</div>
                }
                <div className='absolute w-[8.345vw] -bottom-[2vw] right-0'>
                    <ImageWrapper src={IMGArrows.src} alt="Arrows background" />
                </div>
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
            <div className='font-host-grotesk border-b-2 border-black flex flex-wrap justify-between gap-y-[2rem] pt-[3.2rem] pb-[2.4rem] font-paralucent gap-2'>
                <div className='flex gap-4 text-black items-center font-normal text-[1.6rem] leading-[2.4rem]'>
                    {authors && authors[0] && 
                        <>
                            <span className='flex text-wrap'>{authors[0].name}</span>
                            <div className='bg-black w-[1px] h-6' />
                        </>
                    }
                    {date && 
                        <time className='flex flex-nowrap text-nowrap' dateTime={date}>
                            {new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    }
                    <div className='bg-black w-[1px] h-6' />
                    <span className='flex flex-nowrap text-nowrap items-center'>{getReadTime(cleanParagraphsContent)}</span>
                </div>
                <div className='flex gap-4 text-black items-center justify-start md:justify-end pt-5 md:pt-0 font-normal text-[1.6rem] leading-[2.4rem]'>
                    <div className='flex items-center gap-4'>
                        <span className='flex mr-[1.67vw]'>Share:</span>
                        <div className='flex flex-row items-center gap-[1.67vw]'>
                            <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='instagram' title={title} articleContent={title} />
                            <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='linkedin' title={title} articleContent={title} />
                            <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='x' title={title} articleContent={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headline;
