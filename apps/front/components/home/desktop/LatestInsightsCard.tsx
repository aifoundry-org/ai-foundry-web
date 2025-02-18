'use client'
/* eslint-disable */
import Link from 'next/link';
import Button from '@/litebox-lib/ui/Button/Button';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';

export default function LatestInsightsCard({article = {} as StrapiArticle}) {
    const { title, date, authors, coverImage, tags, slug } = article;
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center justify-between mb-[1.675vw]'>
                {coverImage ? 
                    <img src={getStrapiMediaUrl(coverImage.url)} className='w-[27.05vw] border-2 border-black rounded-lg' /> : 
                    <div className='flex w-[27.05vw] h-[15vw] border-2 border-black rounded-lg text-center justify-center items-center text-[2vw] uppercase'>No cover image</div>
                }
            </div>
            <div className='flex flex-row items-center mb-[2vw] md:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-x-[0.575vw]'>
                {tags.map(el => (
                    <div key={el.id} className='bg-orange rounded-md px-[2vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw] py-[2vw] md:py-[0.75vw] xl:py-[0.75vw] 2xl:py-[0.75vw]'>
                        <p className='font-dharma-gothic-e font-bold text-[4vw] md:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                            {el.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row items-center justify-between mb-[2vw] md:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                <p className='font-dharma-gothic-e font-black text-[5vw] md:text-[2.778vw] xl:text-[2.778vw] 2xl:text-[2.778vw] leading-[4vw] md:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-row font-normal text-[3vw] md:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] leading-[1.5vw] font-host-grotesk'>
                {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <div className='flex flex-row basis-[80%] justify-start mt-8'>
                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
            </div>
        </div>
    )
}
