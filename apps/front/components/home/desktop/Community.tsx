'use client'

import { useState } from 'react';
import IMGBackground from '@/public/pngs/home/community/background.png';
import CommunityCard from './CommunityCard';
import Button from '@/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import events from '@/mock/home/community/data.json';
import FadeUp from '@/components/common/universal/FadeUp';

export default function Community() {
    const months = Object.keys(events);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const _events = events as {[key: string]: Array<{[key: string]: string | number}>};

    return (
        <div id='events' className='hidden xs:flex xs:flex-col xs:pt-[7.85vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <FadeUp className='absolute w-full top-0 left-0 -z-10'>
                <img src={IMGBackground.src} alt="Community background" />
            </FadeUp>
            <FadeUp delay={0.5} className='font-black font-dharma-gothic-e pt-[3.5vw] text-[8vw] xl:text-[4.5vw] 2xl:text-[4.5vw] leading-[6.5vw] xl:leading-[3.75vw] 2xl:leading-[3.75vw] uppercase'>
                What's happening<br/>in the community
            </FadeUp>
            <FadeUp delay={1} className='font-normal font-host-grotesk text-[3vw] xl:text-[1.12vw] 2xl:text-[1.12vw] leading-[3vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] pt-[1.675vw] pb-[2.8vw]'>
                Upcoming podcasts, virtual and physical community events for AI Foundry.
            </FadeUp>
            <FadeUp delay={1}  className='flex flex-row gap-x-[2.5vw] xl:gap-x-[1.12vw] 2xl:gap-x-[1.12vw]'>
                {months.map((el, idx) => (
                    <div key={idx} onClick={() => setSelectedMonth(el)} className={`uppercase font-dharma-gothic-e font-bold text-[5vw] xl:text-[1.4vw] 2xl:text-[1.4vw] py-[0.5vw] xl:py-[0.31vw] 2xl:py-[0.31vw] px-[2vw] xl:px-[1vw] 2xl:px-[1vw] cursor-pointer rounded-lg ${selectedMonth == el ? 'bg-orange' : 'bg-peach'}`}>
                        {el}
                    </div>
                ))}
            </FadeUp>
            <div className={`flex flex-col ${_events[selectedMonth].length > 0 ? 'pt-[6.8vw] xl:pt-[2.8vw] 2xl:pt-[2.8vw] pb-[2.15vw]' : 'py-[10.7vw]'} `}>
                {_events[selectedMonth].length > 0 ? _events[selectedMonth].map((el, idx) => (
                    <FadeUp key={el.id} delay={el.delay as number}>
                        <CommunityCard 
                            title={el.title as string}
                            author={el.author as string}
                            date={el.date as string}
                            time={el.time as string}
                            location={el.location as string}
                            link={el.link as string}
                        />
                    </FadeUp>
                )) : <div className='font-normal font-host-grotesk text-[3.75vw] md:text-[2.75vw] xl:text-[2.5vw] 2xl:text-[2.5vw] leading-[5.6vw]'>No events found!</div> 
            }
            </div>
            <div className='flex justify-end'>
                <Button target='_blank' as={Link} href='https://lu.ma/aifoundryorg' variant='primary' content='View full calendar' svg='arrow-up-right' />
            </div>
        </div>
    )
}