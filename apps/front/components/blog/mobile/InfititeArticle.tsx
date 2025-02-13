import { MouseEventHandler } from 'react';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';

interface InfiniteArticleProp {
    sortedArticles: StrapiData<StrapiArticle[]>,
    hasMoreArticles: boolean,
    showMoreArticles: MouseEventHandler<HTMLButtonElement>,
}

const InfiniteArticle = ({ 
    sortedArticles, 
    hasMoreArticles, 
    showMoreArticles
}: InfiniteArticleProp) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-6'>
                {sortedArticles.data.map(article => {
                    const { id ,title, date, authors, coverImage, slug, tags } = article;

                    return (
                        <div key={id} className='flex flex-col w-full h-full'>
                            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                                <img src={`${process.env.STRAPI_BASE_URL}${coverImage.url}`} className='border-2 border-black rounded-lg' alt="cover" />
                            </div>
                            <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {tags.map((el: any, idx: number) => (
                                    <div key={idx} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                                        <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                                            {el.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                                <p className='font-dharma-gothic-e text-left font-black text-[8.6vw] leading-[7vw] uppercase'>{title}</p>
                            </div>
                            <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                                {authors[0].name} | {new Date(date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className='flex flex-row basis-[80%] justify-start mt-7 mb-9'>
                                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
                            </div>
                        </div>
                    );
                })}
            </div>
            {hasMoreArticles && (
                <div className='flex flex-row basis-[80%] justify-start mt-2 pb-24'>
                    <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
                </div>
            )}
        </>
    )
}

export default InfiniteArticle;