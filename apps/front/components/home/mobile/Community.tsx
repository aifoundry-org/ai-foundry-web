'use client'

import { useState } from 'react';
import IMGBackground from '@/public/imgs/home/community/backgroundMobile.webp';
import CommunityCard from './CommunityCard';
import Button from '@/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import events from '@/mock/home/community/data.json';
import FadeUp from '@/components/common/universal/FadeUp';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function Community() {
    const months = Object.keys(events);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const _events = events as {[key: string]: Array<{[key: string]: string | number}>};
    const hasEvents = _events[selectedMonth].length > 0;

    return (
        <div id='events-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <FadeUp className='absolute w-[54vw] top-0 left-0 -z-10'>
                <ImageWrapper src={IMGBackground.src} alt="Community background" />
            </FadeUp>
            <FadeUp delay={0.5} className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                What&apos;s happening<br/>in the community
            </FadeUp>
            <FadeUp delay={1} className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                Upcoming podcasts, virtual and physical<br/>community events for AI Foundry.
            </FadeUp>
            <FadeUp delay={1} className='flex flex-row gap-x-[2.15vw]'>
                {months.map((el, idx) => (
                    <div key={idx} onClick={() => setSelectedMonth(el)} className={`uppercase font-dharma-gothic-e font-bold text-[4.8vw] py-[2.15vw] px-[3.2vw] cursor-pointer rounded-lg ${selectedMonth == el ? 'bg-orange' : 'bg-peach'}`}>
                        {el}
                    </div>
                ))}
            </FadeUp>
            <FadeUp delay={1.7}>
                <div className={`flex flex-col ${_events[selectedMonth].length > 0 ? 'pt-[10.7vw] pb-[2.15vw]' : 'py-[10.7vw]'} `}>
                    <FadeUp delay={0.9}>
                        {hasEvents ? _events[selectedMonth].map((el, idx) => (
                                <CommunityCard 
                                    key={idx}
                                    title={el.title as string}
                                    author={el.author as string}
                                    date={el.date as string}
                                    time={el.time as string}
                                    location={el.location as string}
                                    href={el.href as string} 
                                    isLastElement={el.id == _events[selectedMonth].length}
                                />
                        )) : 
                            <div className='flex flex-col'>
                                <div className='font-black font-dharma-gothic-e text-[10vw] leading-[9vw] uppercase mb-[1.12vw]'>No upcoming events</div>
                                <div className='font-bold w-3/4 font-host-grotesk text-[6vw] leading-[6vw]'>Subscribe to keep up with new events!</div>
                            </div>
                        }
                    </FadeUp>
                </div>
                <div className='flex pb-[8.55vw]'>
                    <Button target='_blank' as={Link} href='https://lu.ma/aifoundryorg' variant='primary' content='View full calendar' svg='arrow-up-right' />
                </div>
            </FadeUp>
        </div>
    )
}