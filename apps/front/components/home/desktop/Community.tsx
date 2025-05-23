'use client'

import { useState } from 'react';
import IMGCircle from '@/public/imgs/home/community/circle.webp';
import IMGError from '@/public/imgs/home/community/error.webp';
import CommunityCard from './CommunityCard';
import Button from '@/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import events from '@/mock/home/community/data.json';
import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';
import ImageWrapper from '@/components/common/universal/ImageWrapper';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('@/components/common/universal/LottiePlayer'));

export default function Community() {
    const months = Object.keys(events);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const _events = events as {[key: string]: Array<{[key: string]: string | number}>};
    const hasEvents = _events[selectedMonth].length > 0;

    return (
        <div id='events' className='hidden xs:flex xs:flex-col xs:pt-[7.85vw] xs:relative xs:w-full xs:h-full'>
            <FadeIn delay={0.5} className='relative w-[100vw] h-[10vw]'>
                <div className='absolute w-[33.9vw] left-0 top-0'>
                    <ImageWrapper src={IMGCircle.src} alt="Community circle" />
                </div>
                <div className='absolute w-[25.1vw] right-0 top-[10vw]'>
                    <LottiePlayer 
                        className='w-[17.4vw] right-0'
                        src='/lotties/googles.lottie'
                        autoplay={true}
                        loop={true}
                    />
                </div>
            </FadeIn>
            <div className='relative px-[7.78vw]'>
                <FadeIn delay={0.5} className='relative'>
                    <h2 className='font-black font-dharma-gothic-e text-[6vw] xs:text-[8vw] xl:text-[4.5vw] 2xl:text-[4.5vw] xs:leading-[6.5vw] leading-[5vw] xl:leading-[3.75vw] 2xl:leading-[3.75vw] uppercase'>
                        What&apos;s happening<br/>in the community
                        <div className='absolute w-[21vw] left-[13vw] -top-[1.7vw] -z-[1]'>
                            <ImageWrapper src={IMGError.src} alt='Community error' />
                        </div>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.5}>
                    <h3 className='font-normal normal-case w-full xs:w-[50vw] sm:w-[50vw] md:w-[50vw] lg:w-[50vw] font-host-grotesk text-[2vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.12vw] 2xl:text-[1.12vw] leading-[3vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] pt-[1.675vw] pb-[2.8vw]'>
                        Upcoming podcasts, virtual and physical community events for AI Foundry.
                    </h3>
                </FadeIn>
                <FadeIn delay={0.5}  className='flex flex-row gap-x-[2.5vw] xl:gap-x-[1.12vw] 2xl:gap-x-[1.12vw]'>
                    {months.map((el, idx) => (
                        <div key={idx} onClick={() => setSelectedMonth(el)} className={`uppercase font-dharma-gothic-e font-bold text-[2rem] py-[0.5vw] xl:py-[0.31vw] 2xl:py-[0.31vw] px-[2vw] xl:px-[1vw] 2xl:px-[1vw] cursor-pointer rounded-lg ${selectedMonth == el ? 'bg-orange' : 'bg-peach'}`}>
                            {el}
                        </div>
                    ))}
                </FadeIn>
                <div className={`flex flex-col ${_events[selectedMonth].length > 0 ? 'pt-[6.8vw] xl:pt-[2.8vw] 2xl:pt-[2.8vw] pb-[2.15vw]' : 'py-[10.7vw]'} `}>
                    <FadeUp delay={0.5}>
                        {hasEvents ? _events[selectedMonth].map((el, idx) => (
                            <CommunityCard 
                                key={idx}
                                title={el.title as string}
                                author={el.author as string}
                                date={el.date as string}
                                time={el.time as string}
                                location={el.location as string}
                                href={el.href as string}
                            />
                        )) : 
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col'>
                                    <div className='font-black font-dharma-gothic-e text-[6vw] sm:text-[6vw] md:text-[4vw] xl:text-[2.8vw] 2xl:text-[2.8vw] leading-[3vw] md:leading-[2.3vw] lg:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] uppercase mb-[1.12vw]'>No upcoming events</div>
                                    <div className='font-bold w-full xs:w-[30vw] font-host-grotesk text-[3vw] sm:text-[3vw] md:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[2.1vw]'>Subscribe to keep up with new events!</div>
                                </div> 
                                <FadeIn className='flex items-end' delay={0.5}>
                                    <Button className='flex z-[1]' target='_blank' as={Link} href='https://lu.ma/aifoundryorg' variant='primary' content='View full calendar' svg='arrow-up-right' />
                                </FadeIn>
                            </div> 
                        }
                    </FadeUp>
                </div>
                {hasEvents && 
                    <FadeIn delay={0.5} className={`flex justify-end ${process.env.NEXT_PUBLIC_HIDE_SECTIONS === "true" && 'mb-[5vw]'} `}>
                        <Button className='z-[1]' target='_blank' as={Link} href='https://lu.ma/aifoundryorg' variant='primary' content='View full calendar' svg='arrow-up-right' />
                    </FadeIn>
                }
            </div>
        </div>
    )
}