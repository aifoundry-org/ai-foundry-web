'use client'

import { useState } from 'react';
import IMGBackground from '@/public/pngs/community/background.png';
import CommunityCard from './CommunityCard';
import Button from '@/litebox-lib/ui/Button/Button';

const events: {[key: string]: Array<{[key: string]: string | number}>} = {
    'january': [{
        id: 1,
        title: 'speaker dinner',
        author: 'Nina Daydova',
        date: 'Jan 2, 2025 Sunday',
        time: '6:30 PM - 9:00 PM GMT+1',
        location: 'Ixelles, Bruxelles',
        href: ''
    },{
        id: 2,
        title: 'FOSDEM fringe: AI plumbers conference',
        author: 'Tanya Dadasheva & Roman Shaposhnik',
        date: 'Jan 3, 2025 Monday',
        time: '9:00 AM - 5:00 PM GMT+1',
        location: 'Ghent, Flanders',
        href: ''
    },{
        id: 3,
        title: 'Distillation Reverse Annealing Quantization DRAQ',
        author: 'Nina Davydova',
        date: 'Jan 16, 2025 Thursday',
        time: '3:30 PM - 4:30 PM GMT-3',
        location: 'Virtual',
        href: ''
    }],
    'febraury': [],
    'march': [],
}

export default function Community() {
    const months = Object.keys(events);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);

    return (
        <div className='hidden xs:flex xs:flex-col xs:pt-[7.85vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <div className='absolute w-full top-0 left-0 -z-10'>
                <img src={IMGBackground.src} alt="Community background" />
            </div>
            <div className='font-black font-dharma-gothic-e pt-[3.5vw] text-[8vw] xl:text-[4.5vw] 2xl:text-[4.5vw] leading-[6.5vw] xl:leading-[3.75vw] 2xl:leading-[3.75vw] uppercase'>
                What's happening<br/>in the community
            </div>
            <div className='font-normal font-host-grotesk text-[3vw] xl:text-[1.12vw] 2xl:text-[1.12vw] leading-[3vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] pt-[1.675vw] pb-[2.8vw]'>
                Upcoming podcasts, virtual and physical community events for AI Foundry.
            </div>
            <div className='flex flex-row gap-x-[2.5vw] xl:gap-x-[1.12vw] 2xl:gap-x-[1.12vw]'>
                {months.map((el, idx) => (
                    <div key={idx} onClick={() => setSelectedMonth(el)} className={`uppercase font-dharma-gothic-e font-bold text-[5vw] xl:text-[1.4vw] 2xl:text-[1.4vw] py-[0.5vw] xl:py-[0.31vw] 2xl:py-[0.31vw] px-[2vw] xl:px-[1vw] 2xl:px-[1vw] cursor-pointer rounded-lg ${selectedMonth == el ? 'bg-orange' : 'bg-peach'}`}>
                        {el}
                    </div>
                ))}
            </div>
            <div className={`flex flex-col ${events[selectedMonth].length > 0 ? 'pt-[6.8vw] xl:pt-[2.8vw] 2xl:pt-[2.8vw] pb-[2.15vw]' : 'py-[10.7vw]'} `}>
                {events[selectedMonth].length > 0 ? events[selectedMonth].map((el, idx) => (
                    <CommunityCard 
                        key={el.id}
                        title={el.title as string}
                        author={el.author as string}
                        date={el.date as string}
                        time={el.time as string}
                        location={el.location as string}
                        link={el.link as string}
                    />
                )) : <div className='font-normal font-host-grotesk text-[3.75vw] md:text-[2.75vw] xl:text-[2.5vw] 2xl:text-[2.5vw] leading-[5.6vw]'>No events found!</div> 
            }
            </div>
            <div className='flex justify-end'>
                <Button href='' variant='primary' content='View full calendar' svg='arrow-up-right' className='mx-0' svgProps={{width: '22', height: '22'}} />
            </div>
        </div>
    )
}