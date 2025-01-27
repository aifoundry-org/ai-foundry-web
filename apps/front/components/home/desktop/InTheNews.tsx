'use client'

import { useRef, useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGLogoCnn from '@/public/pngs/home/inTheNews/logoCnn.png'
import IMGBackground from '@/public/pngs/home/inTheNews/background.png'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [{
    title: "Community Contributions to AI Projects",
    subtitle: "Discover how developers are collaborating on AI initiatives.",
    source: "cnn",
    tag: "Insights",
    link: "https://edition.cnn.com/"
},{
    title: "AI Foundry Featured in Tech News",
    subtitle: "AI Foundry is making waves in the developer community.",
    source: "cnn",
    tag: "Updates",
    link: "https://edition.cnn.com/"
},{
    title: "Upcoming AI Workshops and Meetups",
    subtitle: "Join us for our next exciting AI event.",
    source: "cnn",
    tag: "Events",
    link: "https://edition.cnn.com/"
},{
    title: "This is a test event news",
    subtitle: "This is a test event news content",
    source: "cnn",
    tag: "Insights",
    link: "https://edition.cnn.com/"
}]

export default function InTheNews() {
    //Add a state that will force a re-render
    const [_, setSwiperInstance] = useState<any>(null);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    return (
        <div className='hidden md:flex md:flex-col md:pt-0 md:pb-[7.7vw] md:relative md:w-full md:h-full md:px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[4.45vw] leading-[3.685vw] uppercase'>
                AI Foundry in the News
            </div>
            <div className='font-normal font-host-grotesk text-[1.115vw] leading-[1.675vw] pt-[1.67vw] pb-[3.06vw]'>
                Explore the latest news about our community.
            </div>
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
                            <div className='flex flex-row items-center mb-[1.67vw] gap-x-[0.56vw]'>
                                {(card.source == 'cnn' ? IMGLogoCnn.src : '') && 
                                    <div className='flex border-[1px] p-[1vw] rounded-[0.28vw] border-black'>
                                        <img className='w-[2.225vw]' src={(card.source == 'cnn' ? IMGLogoCnn.src : '')} />
                                    </div>
                                }
                                {card.tag && 
                                    <div className='flex font-bold text-[1.395vw] bg-orange rounded-[0.28vw] px-[1vw] py-[1vw] leading-[1.395vw] font-dharma-gothic-e uppercase items-center'>
                                        {card.tag}
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col w-full h-[15vw] pb-[0.5vw]'>
                                <div className='flex font-dharma-gothic-e font-black text-[2.8vw] leading-[2.3vw] uppercase'>{card.title}</div>
                                <div className='flex flex-1 pt-[1.115vw] font-host-grotesk font-normal text-[0.975vw]'>{card.subtitle}</div>
                                <Button as={Link} className='flex mt-[1.67vw]' href={card.link} variant='secondary' content='Read more' svg='arrow-up-right' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex flex-row w-full relative mt-[2.73vw]'>
                    <div ref={buttonPrevRef} className='flex basis-[15%] justify-start'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' variant='secondary' svg='scroll-left'/>
                    </div>
                    <div className='inTheNewsPagination !flex !basis-[70%] !justify-center !items-center !bottom-[6vw] !gap-[0.905vw]' />
                    <div ref={buttonNextRef} className='flex basis-[15%] justify-end'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' variant='secondary' svg='scroll-right'/>
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-0 left-0 w-full -z-10'>
                <img className='w-full' src={IMGBackground.src} alt="In the News Background" />
            </div>
        </div>
    )
}