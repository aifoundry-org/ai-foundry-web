'use client'

import { useRef, useState } from 'react'
import IMGBackground from '@/public/pngs/home/latestInsights/backgroundMobile.png'
import IMGLLamaEvent from '@/public/pngs/home/latestInsights/llamaEvent.png'
import IMGPodcast from '@/public/pngs/home/latestInsights/podcast.png'
import IMGProductionStack from '@/public/pngs/home/latestInsights/productionStack.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cards = [{
    title: "Llama Shaving Podcast: Is Data Truly a Moat for an Enterprise?",
    tags: ['podcast', 'big data', 'enterprise ai'],
    author: 'Tanya Dadasheva',
    date: 'November 19, 2024',
    imageUrl: IMGLLamaEvent.src,
    link: "https://aifoundry.org/blog/llama-shaving-podcast-is-data-truly-a-moat-for-an-enterprise"
},{
    title: "Productionizing AI: Three Layers of Models Production Stack",
    tags: ['podcast', 'opening ai', 'productionization'],
    author: 'Tanya Dadasheva',
    date: 'November 13, 2024',
    imageUrl: IMGPodcast.src,
    link: "https://aifoundry.org/blog/productionizing-ai-three-layers-of-models-production-stack"
},{
    title: "Low-Level AI Engineering and Hacking: AIFoundry.org Podcast",
    tags: ['podcast', 'community', 'fosdem'],
    author: 'Tanya Dadasheva',
    date: 'November 12, 2024',
    imageUrl: IMGProductionStack.src,
    link: "https://aifoundry.org/blog/low-level-ai-engineering-and-hacking-aifoundry.org-podcast"
}]

export default function LatestInsights() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    return (
        <div id='blog-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='absolute w-full h-fit top-[5.5vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" alt="Latest Insights background" />
            </div>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                Explore Our Latest<br/>Insights
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[4.275vw]'>
                Stay updated with our community-driven content.<br/>
                Read about past events and access to summaries<br/>
                and video replays of prior AI Hack Labs and<br/>
                Podcasts.
            </div>
            <div className='w-full h-fit mb-[8.55vw]'>
                <Button labelProps='h-[5vw]' variant='primary' content='Visit our blog' />
            </div>
            <div className='flex flex-col w-full h-full items-center justify-center'>
                <Swiper
                    onSlideChange={swiper => setCurrentIndex(swiper.activeIndex)}
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
                    {cards.map((card, idx) => (
                        <SwiperSlide key={idx} className='flex flex-col w-full h-full'>
                            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                                <img src={card.imageUrl} className='border-2 border-black rounded-lg' />
                            </div>
                            <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                                {card.tags.map((el, idx) => (
                                    <div key={idx} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                                        <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                                            {el}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                                <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7vw] uppercase'>{card.title}</p>
                            </div>
                            <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                                {card.author} | {card.date}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='openSourceProjectsMobilePagination flex flex-row w-full relative mt-[6.4vw]'>
                    <div ref={buttonPrevRef} className='flex basis-[10%] justify-start'>
                        <Button variant='secondary' svg='scroll-left' />
                    </div>
                    <div className='flex basis-[80%] justify-center'>
                        <Button target="_blank" as={Link} href={cards[currentIndex].link} labelProps='w-[20.1vw] h-[6.6vw]' variant='secondary' content='Read more' />
                    </div>
                    <div ref={buttonNextRef} className='flex basis-[10%] justify-end'>
                        <Button variant='secondary' svg='scroll-right' />
                    </div>
                </div>
            </div>
        </div>
    )
}