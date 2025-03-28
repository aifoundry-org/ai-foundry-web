'use client';
/* eslint-disable */

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGArrowUpRight from '@/public/imgs/home/openSourceProjects/arrowUpRightMobile.webp';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FadeUp from '@/components/common/universal/FadeUp';
import cards from '@/mock/home/openSourceProjects/data.json';
import { Swiper as SwiperType } from 'swiper/types';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function OpenSourceProjects() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    return (
        <div id='projects-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <FadeUp>
                <h2 className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                    View and join our<br/>open-source<br/>projects
                </h2>
            </FadeUp>
            <FadeUp>
                <h3 className='font-normal normal-case font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                    AI Foundry open source projects are Apache<br/>
                    V2 licensed. View the code on our GitHub, and<br/>
                    collaborate with project contributors in our<br/>
                    Discord Server.
                </h3>
            </FadeUp>
            <FadeUp delay={0.5} className='flex flex-col w-full h-full items-center justify-center'>
                <Swiper
                    onSlideChange={(swiper: SwiperType) => setCurrentIndex(swiper.realIndex)}
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
                            <div className='flex flex-col w-full h-full'>
                                <div className='flex flex-row items-center justify-between'>
                                    <h3 className='font-dharma-gothic-e font-black text-[8.6vw] uppercase'>{card.title}</h3>
                                    <div className='w-[5.87vw]'>
                                        <ImageWrapper src={IMGArrowUpRight.src} alt='Arrow up right' />
                                    </div>
                                </div>
                                <div className='flex flex-col border-y-2 border-black mt-[2vw] py-[6.4vw] h-[70vw] leading-[5.6vw]'>
                                    <div className='font-host-grotesk font-bold text-[4.3vw]'>{card.subtitle}</div>
                                    {card.content !== '' && <div dangerouslySetInnerHTML={{__html: card.content}} className='font-host-grotesk font-normal text-[3.75vw] pt-[4.3vw] leading-[5vw]' />}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='openSourceProjectsMobilePagination flex flex-row w-full relative mt-[6.4vw]'>
                    <div ref={buttonPrevRef} className='flex basis-[10%] justify-start'>
                        <Button variant='secondary' svg='scroll-left' />
                    </div>
                    <div className='flex basis-[80%] justify-center'>
                        <Button target="_blank" as={Link} href={cards[currentIndex].link} variant='secondary' content='View repo' svg='github' />
                    </div>
                    <div ref={buttonNextRef} className='flex basis-[10%] justify-end'>
                        <Button variant='secondary' svg='scroll-right' />
                    </div>
                </div>
            </FadeUp>
        </div>
    )
}