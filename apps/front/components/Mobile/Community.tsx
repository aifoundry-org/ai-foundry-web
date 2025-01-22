'use client'

import { useState } from 'react';
import IMGBackground from '@/public/pngs/community/backgroundMobile.png';
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
        <div id='events-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='absolute w-[54vw] top-0 left-0 -z-10'>
                <img src={IMGBackground.src} alt="Community background" />
            </div>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                What's happening<br/>in the community
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                Upcoming podcasts, virtual and physical<br/>community events for AI Foundry.
            </div>
            <div className='flex flex-row gap-x-[2.15vw]'>
                {months.map((el, idx) => (
                    <div key={idx} onClick={() => setSelectedMonth(el)} className={`uppercase font-dharma-gothic-e font-bold text-[4.8vw] py-[2.15vw] px-[3.2vw] cursor-pointer rounded-lg ${selectedMonth == el ? 'bg-orange' : 'bg-peach'}`}>
                        {el}
                    </div>
                ))}
            </div>
            <div className={`flex flex-col ${events[selectedMonth].length > 0 ? 'pt-[10.7vw] pb-[2.15vw]' : 'py-[10.7vw]'} `}>
                {events[selectedMonth].length > 0 ? events[selectedMonth].map((el, idx) => (
                    <CommunityCard 
                        key={el.id}
                        title={el.title as string}
                        author={el.author as string}
                        date={el.date as string}
                        time={el.time as string}
                        location={el.location as string}
                        link={el.link as string} 
                        isLastElement={el.id == events[selectedMonth].length}
                    />
                )) : <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw]'>No events found!</div> 
            }
            </div>
            <div className='flex pb-[8.55vw]'>
                <Button href='' variant='primary' content='View full calendar' svg='arrow-up-right' />
            </div>
        </div>
    )
}