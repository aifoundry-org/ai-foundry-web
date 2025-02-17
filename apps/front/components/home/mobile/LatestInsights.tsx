'use client'
/* eslint-disable */
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Button from '@/libs/litebox-lib/ui/Button/Button'
import FadeUp from '@/components/common/universal/FadeUp'
import { Swiper as SwiperType } from 'swiper/types';

import IMGBackground from '@/public/pngs/home/latestInsights/backgroundMobile.png'
import IMGGraffiti from '@/public/pngs/home/latestInsights/graffitiMobile.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getLastArticles } from '@/backend/blog/actions';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export default function LatestInsights() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);

    const [articles, setArticles] = useState<StrapiArticle[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    useEffect(() => {
        const loadArticles = async () => {
            const articles = await getLastArticles();
            setArticles(articles.data);
        }
        loadArticles()
    }, [])

    return (
        <div id='blog-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <FadeUp className='absolute w-[24vw] top-[5.5vw] left-0 -z-[1]'>
                <img src={IMGGraffiti.src} />
            </FadeUp>
            <FadeUp className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase relative'>
                Explore Our Latest<br/>Insights
                <div className='absolute flex -z-[1] -top-[16.5vw] -left-[6vw]'>
                    <img src={IMGBackground.src} width='100%' alt="Latest Insights background" />
                </div>
            </FadeUp>
            <FadeUp className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[4.275vw]'>
                Stay updated with our community-driven content.<br/>
                Read about past events and access to summaries<br/>
                and video replays of prior AI Hack Labs and<br/>
                Podcasts.
            </FadeUp>
            <FadeUp className='w-full h-fit mb-[8.55vw]'>
                <Button as={Link} href="/blog" variant='primary' content='Visit our blog' />
            </FadeUp>
            <FadeUp className='flex flex-col w-full h-full items-center justify-center'>
                {articles && articles.length > 0 && <>
                    <Swiper
                        onSlideChange={(swiper: SwiperType) => setCurrentIndex(swiper.activeIndex)}
                        slidesPerView={1}
                        spaceBetween={40}
                        loop
                        className='openSourceProjectsMobileSwiper !flex !flex-row !w-full !h-full'
                        navigation={{
                            prevEl: buttonPrevRef.current,
                            nextEl: buttonNextRef.current,
                        }}
                        modules={[Navigation]}
                        onInit={setSwiperInstance}
                    >
                        {articles.map((article, idx) => (
                            <SwiperSlide key={idx} className='flex flex-col w-full h-full'>
                                <div className='flex flex-row items-center justify-between mb-[7vw]'>
                                    {article.coverImage ? 
                                        <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${article.coverImage.url}`} className='border-2 border-black rounded-lg' /> : 
                                        <div className='flex w-full h-[49.1vw] border-2 border-black rounded-lg text-center justify-center items-center text-[8vw] uppercase'>No cover image</div>
                                    }
                                </div>
                                <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                                    {article.tags.map((el, idx) => (
                                        <div key={idx} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                                            <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                                                {el.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                                    <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7vw] uppercase'>{article.title}</p>
                                </div>
                                <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                                    {article.authors[0].name} | {new Date(article.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='openSourceProjectsMobilePagination flex flex-row w-full relative mt-[6.4vw]'>
                        <div ref={buttonPrevRef} className='flex basis-[10%] justify-start'>
                            <Button variant='secondary' svg='scroll-left' />
                        </div>
                        <div className='flex basis-[80%] justify-center'>
                            <Button as={Link} href={`/blog/${articles[currentIndex].slug}`} variant='secondary' content='Read more' />
                        </div>
                        <div ref={buttonNextRef} className='flex basis-[10%] justify-end'>
                            <Button variant='secondary' svg='scroll-right' />
                        </div>
                    </div>
                </>}
            </FadeUp>
        </div>
    )
}