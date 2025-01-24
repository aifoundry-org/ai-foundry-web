'use client'

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGBackgroundTop from '@/public/pngs/home/testimonials/backgroundTopMobile.png'
import IMGDoodle from '@/public/pngs/home/testimonials/doodleMobile.png'
import IMGWhatPeopleSay from '@/public/pngs/home/testimonials/whatPeopleSayMobile.png'
import IMGStarFull from '@/public/pngs/home/testimonials/starFull.png'
import IMGStarEmpty from '@/public/pngs/home/testimonials/starEmpty.png'

import IMGCompanyWebflow from '@/public/pngs/home/testimonials/companyWebflow.png'
import IMGDeveloper1 from '@/public/pngs/home/testimonials/developer1.png'
import IMGDeveloper2 from '@/public/pngs/home/testimonials/developer2.png'
import IMGDeveloper3 from '@/public/pngs/home/testimonials/developer3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [{
    stars: 3,
    content: '"AI Foundry has been a game-changer for my development journey. The collaborative spirit and innovative projects inspire me every day."',
    author: 'Jordan Smith',
    avatar: IMGDeveloper1.src,
    position: 'Developer, TechCorp',
    companyLogo: IMGCompanyWebflow.src
},{
    stars: 5,
    content: 'This is an example with a short text',
    author: 'Thomas Anderson',
    avatar: IMGDeveloper2.src,
    position: 'Developer, Meta Cortex',
    companyLogo: IMGCompanyWebflow.src
},{
    stars: 0,
    content: 'This is an example with a very long text that needs to be cut to avoid the component to take too much vertical space, so instead of showing the full text it is been truncate with "..." somewhere before the end',
    author: 'Agent Smith',
    avatar: IMGDeveloper3.src,
    position: 'Agent, Matrix',
    companyLogo: IMGCompanyWebflow.src
}]

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

    return (
        <div className='md:hidden flex flex-col pt-[18.35vw] pb-[7.7vw] relative w-full h-fit'>
            <div className='flex flex-col relative w-full bg-black text-sand rounded-[5.35vw] h-[162.7vw]'>
                <div className='absolute w-full h-fit -top-[6.75vw] left-0'>
                    <img src={IMGBackgroundTop.src} />
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <Swiper
                        className='testimonialsSwiper !flex !flex-col !w-full !h-full'
                        slidesPerView={1}
                        loop
                        pagination={{ 
                            el: '.testimonialsPaginationMobile',
                            type: 'bullets',
                            bulletClass: 'testimonials-pagination-mobile-bullet',
                            bulletActiveClass: 'testimonials-pagination-bullet-mobile-active',
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: buttonPrevRef.current,
                            nextEl: buttonNextRef.current,
                        }}
                        modules={[Pagination, Navigation]}
                        onInit={setSwiperInstance}
                    >
                        {cards.map((el, idx) => (
                            <SwiperSlide className='flex flex-col w-full px-[8vw] items-center' key={idx}>
                                <div className='flex flex-row mt-[15vw] gap-[0.5vw]'>
                                    {[...Array(5)].map((i, idx) => (
                                        <img key={idx} width='13' height='13' src={idx <= el.stars ? IMGStarFull.src : IMGStarEmpty.src} />
                                    ))}
                                </div>
                                <div className='font-dharma-gothic-e font-black text-[10vw] mt-[9vw] leading-[8.8vw] tracking-wide uppercase'>
                                    {processContent(el.content)}
                                </div>
                                <div className='flex flex-row w-full gap-[5.35vw] mt-[9vw] mb-[10.7vw]'>
                                    <div>
                                        <img width='55' src={el.avatar} />
                                    </div>
                                    <div className='flex flex-col font-host-grotesk w-full'>
                                        <div className='font-bold text-[3.75vw] leading-[5.6vw] select-none'>{el.author}</div>
                                        <div className='font-normal text-[3.75vw] leading-[5.6vw] select-none'>{el.position}</div>
                                        <div className='w-[21.9vw] h-[8.6vw] select-none'>
                                            <img src={el.companyLogo} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex w-full justify-center items-center px-[7vw]'>
                        <div ref={buttonPrevRef} className='flex basis-[15%] justify-center'>
                            <Button variant='secondary' svg='scroll-left' noShadow/>
                        </div>
                        <div className='testimonialsPaginationMobile !gap-[3.2vw] flex basis-[80%] justify-center' />
                        <div ref={buttonNextRef} className='flex basis-[15%] justify-center'>
                            <Button variant='secondary' svg='scroll-right' noShadow/>
                        </div>
                    </div>
                </div>
                <div className='absolute w-[83.2vw] -bottom-[31vw] right-[1vw] -z-[1]'>
                    <img src={IMGDoodle.src} />
                </div>
                <div className='absolute w-[48vw] -bottom-[8.5vw] right-[9vw] z-[1]'>
                    <img src={IMGWhatPeopleSay.src} />
                </div>
            </div>
        </div>
    )
}