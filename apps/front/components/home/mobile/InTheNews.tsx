'use client'

import { useRef, useState } from 'react'
import IMGBackground from '@/public/pngs/home/inTheNews/backgroundMobile.png'
import IMGLogoCnn from '@/public/pngs/home/inTheNews/logoCnn.png'
import Button from '@/litebox-lib/ui/Button/Button'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    return (
        <div className='md:hidden flex flex-col pt-[28vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                AI Foundry<br/>in the News
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                Explore the latest news about our community.
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
                        <SwiperSlide key={idx} className='flex flex-col w-full h-[64.2vw] relative'>
                            <div className='flex flex-row items-center mb-[6.4vw] gap-x-[2.15vw]'>
                                {(card.source == 'cnn' ? IMGLogoCnn.src : '') && 
                                    <div className='flex w-[12.8vw] border-[1px] rounded-[1.1vw] p-[2vw] border-black'>
                                        <img src={(card.source == 'cnn' ? IMGLogoCnn.src : '')} />
                                    </div>
                                }
                                {card.tag && 
                                    <div className='flex font-bold text-[4.8vw] bg-orange rounded-[1.075vw] py-[2.135vw] px-[3.75vw] leading-[4.85vw] font-dharma-gothic-e uppercase'>
                                        {card.tag}
                                    </div>
                                }
                            </div>
                            <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7.16vw] uppercase'>{card.title}</p>
                            <p className='font-host-grotesk font-normal pt-[4.27vw] text-[3.2vw]'>{card.subtitle}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='openSourceProjectsMobilePagination flex flex-row w-full relative mt-[6.4vw]'>
                    <div ref={buttonPrevRef} className='flex basis-[10%] justify-start'>
                        <Button variant='secondary' svg='scroll-left' />
                    </div>
                    <div className='flex basis-[80%] justify-center'>
                        <Button target="_blank" as={Link} href={cards[currentIndex].link} variant='secondary' content='Read more' svg='arrow-up-right' />
                    </div>
                    <div ref={buttonNextRef} className='flex basis-[10%] justify-end'>
                        <Button variant='secondary' svg='scroll-right' />
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-[27.5vw] left-0 w-full -z-10'>
                <img className='w-full' src={IMGBackground.src} alt="In the News Background" />
            </div>
        </div>
    )
}