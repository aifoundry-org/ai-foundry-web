'use client'

import Link from 'next/link';
import { getReadTime } from '@/utils/getReadTime';
import IMGArrowLeft from '@/public/imgs/blogSlug/arrowLeft.webp';
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
        <div className={`pb-12 ${className}`}>
            <Link className='flex items-center gap-4 mb-10' href='/blog' rel='noreferrer'>
                <div className='w-[6vw]'>
                    <ImageWrapper src={IMGArrowLeft.src} alt='Arrow left' />
                </div>
                <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>Go Back to Blog</p>
            </Link>
            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                {coverImage ? 
                    <div className='w-full border-2 border-black rounded-lg'>
                        <ImageWrapper src={getStrapiMediaUrl(coverImage.url)} alt='Cover image' />
                    </div> : 
                    <div className='flex w-full h-[48.275vw] border-2 border-black rounded-lg text-center justify-center items-center text-[8vw] uppercase'>No cover image</div>
                }
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
            <h3 className='font-dharma-gothic-e text-[12.8vw] font-black pb-6 leading-[10.675vw] uppercase'>{title}</h3>
            <div className='font-host-grotesk border-b-2 border-black flex flex-col justify-between py-4 font-paralucent gap-2'>
                <h4 className='normal-case flex flex-grow gap-4 text-black items-center font-normal text-[3.75vw] leading-[5.6vw]'>
                    {authors && authors[0] && 
                        <>
                            <span>{authors[0].name}</span>
                            <div className='bg-black w-[1px] h-6' />
                        </>
                    }
                    {date && 
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    }
                </h4>
                <div className='flex flex-grow gap-4 text-black items-center font-normal text-[3.75vw] leading-[5.6vw] my-[3vw]'>
                    <span className='flex items-center'>{getReadTime(cleanParagraphsContent)}</span>
                    <div className='bg-black w-[1px] h-6' />
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
