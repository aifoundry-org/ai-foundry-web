'use client'

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGBackgroundTop from '@/public/pngs/home/testimonials/backgroundTop.png'
import IMGDoodle from '@/public/pngs/home/testimonials/doodle.png'
import IMGWhatPeopleSaying from '@/public/pngs/home/testimonials/whatPeopleSaying.png'
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
        <div className='hidden md:flex md:flex-col md:pt-[6vw] md:pb-[7.7vw] md:relative md:w-full md:h-full'>
            <div className='flex flex-col relative w-full h-[55vw] bg-black text-sand rounded-[1.4vw]'>
                <div className='absolute w-full h-fit -top-[3.45vw] left-0'>
                    <img src={IMGBackgroundTop.src} />
                </div>
                <div className='flex flex-row w-full items-center justify-center'>
                    <div ref={buttonPrevRef} className='flex basis-[15%] justify-center'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' variant='secondary' svg='scroll-left' noShadow/>
                    </div>
                    <Swiper
                        className='testimonialsSwiper !flex !flex-row !basis-[70%] !w-full !h-full !relative'
                        slidesPerView={1}
                        loop
                        pagination={{ 
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
                        modules={[Pagination, Navigation]}
                        onInit={setSwiperInstance}
                    >
                        {cards.map((el, idx) => (
                            <SwiperSlide className='flex flex-col w-full py-[10vw] px-[5vw] items-center' key={idx}>
                                <div className='flex flex-row w-full justify-start pb-[2.225vw] gap-[0.15vw]'>
                                    {[...Array(5)].map((i, idx) => (
                                        <img key={idx} width='19' src={idx <= el.stars ? IMGStarFull.src : IMGStarEmpty.src} />
                                    ))}
                                </div>
                                <div className='flex h-[22vw] items-center font-dharma-gothic-e font-black text-[4.45vw] leading-[4.45vw] tracking-wide uppercase'>
                                    {processContent(el.content)}
                                </div>
                                <div className='flex flex-row mt-[2.223vw] w-full h-[4.17vw] justify-start items-center'>
                                    <div className='w-[3.84vw]'>
                                        <img width='55' src={el.avatar} />
                                    </div>
                                    <div className='flex flex-col px-[1.5vw] font-host-grotesk border-r-[1px]'>
                                        <div className='font-bold text-[1.115vw] leading-[1.67vw]'>{el.author}</div>
                                        <div className='font-normal text-[1.115vw] leading-[1.67vw]'>{el.position}</div>
                                    </div>
                                    <div className='w-[21.9vw] pl-[1.5vw]'>
                                        <img src={el.companyLogo} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='testimonialsPagination !absolute !flex !w-full !justify-center !items-center !bottom-[6vw] !gap-[0.905vw] z-[1]' />
                    <div ref={buttonNextRef} className='flex basis-[15%] justify-center'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' variant='secondary' svg='scroll-right' noShadow/>
                    </div>
                </div>
                <div className='absolute w-[25.91vw] -bottom-[10.75vw] right-[4.45vw] -z-[1]'>
                    <img src={IMGDoodle.src} />
                </div>
                <div className='absolute w-[12.5vw] -bottom-[2.25vw] right-[6.25vw] z-[1]'>
                    <img src={IMGWhatPeopleSaying.src} />
                </div>
            </div>
        </div>
    )
}