'use client';
/* eslint-disable */

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGLogoCnn from '@/public/imgs/home/inTheNews/logoCnn.webp'
import Link from 'next/link';
import cards from '@/mock/home/inTheNews/data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function InTheNews() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    return (
        <div className='hidden md:flex md:flex-col md:py-[7.7vw] md:relative md:w-full md:h-full md:px-[5.6vw]'>
            <FadeUp className='font-black font-dharma-gothic-e text-[4.45vw] leading-[3.685vw] uppercase'>
                AI Foundry in the News
            </FadeUp>
            <FadeUp className='font-normal font-host-grotesk text-[1.115vw] leading-[1.675vw] pt-[1.67vw] pb-[3.06vw]'>
                Explore the latest news about our community.
            </FadeUp>
            <div className='flex flex-col w-full h-full items-center justify-center'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    loop
                    className='inTheNewsSwiper !flex !flex-row !w-full !h-full'
                    pagination={{ 
                        el: '.inTheNewsPagination',
                        type: 'bullets',
                        bulletClass: 'inTheNews-pagination-bullet',
                        bulletActiveClass: 'inTheNews-pagination-bullet-active',
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: buttonPrevRef.current,
                        nextEl: buttonNextRef.current,
                    }}
                    modules={[Pagination, Navigation]}
                    onInit={setSwiperInstance}
                >
                    {cards.map((card, idx) => (
                        <SwiperSlide key={idx} className='flex flex-col w-full h-full'>
                            <FadeIn delay={card.delay}>
                                <div className='flex flex-row items-center mb-[1.67vw] gap-x-[0.56vw]'>
                                    {(card.source == 'cnn' ? IMGLogoCnn.src : '') && 
                                        <div className='flex border-[1px] px-[0.8vw] py-[0.59vw] rounded-[0.28vw] border-black'>
                                            <div className='w-[2.225vw]'>
                                                <ImageWrapper src={(card.source == 'cnn' ? IMGLogoCnn.src : '')} alt='Logo' />
                                            </div>
                                        </div>
                                    }
                                    {card.tag && 
                                        <div className='flex font-bold text-[1.395vw] bg-orange rounded-[0.28vw] px-[1.1vw] py-[0.5vw] leading-[1.395vw] font-dharma-gothic-e uppercase items-center'>
                                            {card.tag}
                                        </div>
                                    }
                                </div>
                                <div className='flex flex-col w-full h-full pb-[0.5vw]'>
                                    <div className='flex md:min-h-[8vw] sm:min-h-[2vw] lg:min-h-[2vw] xl:min-h-[2vw] 2xl:min-h-[2vw] font-dharma-gothic-e font-black md:text-[2.7rem] lg:text-[2.8vw] xl:text-[2.8vw] 2xl:text-[2.8vw] md:leading-[2.2rem] lg:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] uppercase'>{card.title}</div>
                                    <div className='flex md:min-h-[5vw] sm:min-h-[1vw] lg:min-h-[1vw] xl:min-h-[1vw] 2xl:min-h-[1vw] pt-[1.115vw] font-host-grotesk font-normal md:text-[1.5rem] lg:text-[0.975vw] xl:text-[0.975vw] 2xl:text-[0.975vw] md:leading-[1.5rem] lg:leading-[2vw] xl:leading-[2vw] 2xl:leading-[2vw]'>{card.subtitle}</div>
                                    <Button target='_blank' as={Link} className='flex mt-[1.67vw]' href={card.link} variant='secondary' content='Read more' svg='arrow-up-right' />
                                </div>
                            </FadeIn>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <FadeUp className='flex flex-row w-full relative mt-[2.73vw]'>
                    <div ref={buttonPrevRef} className='flex basis-[15%] justify-start'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' variant='secondary' svg='scroll-left'/>
                    </div>
                    <div className='inTheNewsPagination !flex !basis-[70%] !justify-center !items-center !bottom-[6vw] !gap-[0.905vw]' />
                    <div ref={buttonNextRef} className='flex basis-[15%] justify-end'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' variant='secondary' svg='scroll-right'/>
                    </div>
                </FadeUp>
            </div>
        </div>
    )
}