'use client';
/* eslint-disable */

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGBackgroundTop from '@/public/imgs/home/testimonials/backgroundTop.webp'
import IMGDoodle from '@/public/imgs/home/testimonials/doodle.webp'
import IMGWhatPeopleSaying from '@/public/imgs/home/testimonials/whatPeopleSaying.webp'
import IMGStarFull from '@/public/imgs/home/testimonials/starFull.webp'
import IMGStarEmpty from '@/public/imgs/home/testimonials/starEmpty.webp'
import cards from '@/mock/home/testimonials/data.json';
import SVGCompanyWebflow from '@/public/svgs/home/testimonials/companyWebflow'
import IMGDeveloper1 from '@/public/imgs/home/testimonials/sergy.webp'
import companyLogo from '@/public/imgs/home/testimonials/cybergyzer.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FadeUp from '@/components/common/universal/FadeUp';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function Testimonials() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    const charLimit = 150;
    const processContent = (content: string) => {
        let newContent = content
        if (newContent && newContent.length > charLimit){
            newContent = newContent.slice(0, charLimit)
            const lastSpaceIndex = newContent.lastIndexOf(' ');
            if (lastSpaceIndex > -1) {
                newContent = newContent.slice(0, lastSpaceIndex) + "...";
            }
        }
        return newContent;
    }
    
    cards[0].avatar = IMGDeveloper1.src;
    cards[0].companyLogo = companyLogo.src;

    return (
        <div className='hidden md:flex md:flex-col md:pt-[6vw] md:pb-[7.7vw] md:relative md:w-full md:h-full'>
            <div className='flex flex-col relative w-full h-[55vw] bg-black text-sand rounded-[1.4vw]'>
                <div className='relative w-full h-fit -top-[3.45vw] left-0'>
                    <ImageWrapper src={IMGBackgroundTop.src} alt='Background top' />
                </div>
                <FadeUp delay={0.5} className='flex flex-row w-full items-center justify-center relative'>
                    <div ref={buttonPrevRef} className='flex basis-[15%] justify-center'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' variant='secondary' svg='scroll-left' noShadow/>
                    </div>
                    <Swiper
                        className='testimonialsSwiper !flex !flex-row !basis-[70%] !w-full !h-full !relative'
                        slidesPerView={1}
                        loop
                        pagination={cards.length > 1 && { 
                            el: '.testimonialsPagination',
                            type: 'bullets',
                            bulletClass: 'testimonials-pagination-bullet',
                            bulletActiveClass: 'testimonials-pagination-bullet-active',
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: buttonPrevRef.current,
                            nextEl: buttonNextRef.current,
                        }}
                        watchOverflow
                        modules={[Pagination, Navigation]}
                        onInit={setSwiperInstance}
                    >
                        {cards.map((el, idx) => (
                            <SwiperSlide className='flex flex-col w-full py-0 px-[5vw] items-center' key={idx}>
                                <div className='flex flex-row w-full justify-start pb-[2.225vw] gap-[0.15vw]'>
                                    {[...Array(5)].map((i, idx) => (
                                        <div key={idx} className='w-[1.9rem]'>
                                            <ImageWrapper src={idx <= el.stars ? IMGStarFull.src : IMGStarEmpty.src} alt='Icon star' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex h-[22vw] items-center font-dharma-gothic-e font-black text-[4.45vw] leading-[4.45vw] tracking-wide uppercase'>
                                    {processContent(el.content)}
                                </div>
                                <div className='flex flex-row mt-[2.223vw] w-full h-[4.17vw] justify-start items-center'>
                                    <div className='w-[3.84vw]'>
                                        <ImageWrapper src={el.avatar} alt='Avatar' />
                                    </div>
                                    <div className='flex flex-col px-[1.5vw] font-host-grotesk border-r-[1px]'>
                                        <div className='font-bold text-[1.115vw] leading-[1.67vw]'>{el.author}</div>
                                        <div className='font-normal text-[1.115vw] leading-[1.67vw]'>{el.position}</div>
                                    </div>
                                    <div className='w-[3.84vw]'>
                                         <ImageWrapper src={el.companyLogo} alt='Logo' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='testimonialsPagination !absolute !flex !w-full !justify-center !items-center !-bottom-[6vw] !gap-[0.905vw] z-[1]' />
                    <div ref={buttonNextRef} className='flex basis-[15%] justify-center'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' variant='secondary' svg='scroll-right' noShadow/>
                    </div>
                </FadeUp>
                <div className='relative w-[25.91vw] -bottom-[6.5vw] left-[70vw] -z-[1]'>
                    <ImageWrapper src={IMGDoodle.src} alt="Doodle" />
                </div>
                <div className='relative w-[12.5vw] bottom-[6.5vw] left-[81.5vw] z-[1]'>
                    <ImageWrapper src={IMGWhatPeopleSaying.src} alt="What people saying" />
                </div>
            </div>
        </div>
    )
}
