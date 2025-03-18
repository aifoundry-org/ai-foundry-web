'use client';

import Button from '@/litebox-lib/ui/Button/Button';
import IMGIconCalendar from '@/public/imgs/home/community/calendar.webp';
import IMGIconPosition from '@/public/imgs/home/community/position.webp';
import IMGIconCam from '@/public/imgs/home/community/cam.webp';
import Link from 'next/link';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function CommunityCard({
    title = '',
    author = '',
    date = '',
    time = '',
    location = '',
    href = '',
    isLastElement = false
}) {
    const day = date !== '' ? date.split(' ').pop() : '';
    let newDate = '';
    if(day){
        newDate = date.replace(day, '').trim();
    }
    
    const state = location == 'Virtual' ? '' : location.split(' ').pop();
    let city = '';
    if(state){
        city = location == 'Virtual' ? '' : location.replace(state, ' ');
    }
    
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-start pb-[2.15vw]'>
                <p className='font-dharma-gothic-e font-black leading-[7vw] text-[8.6vw] uppercase'dangerouslySetInnerHTML={{__html:title}} />
            </div>
            <div className='flex flex-row items-start pb-[4.3vw]'>
                <p className='font-host-grotesk font-normal leading-[4.8vw] text-[3.2vw]'>By {author}</p>
            </div>
            <div className='flex flex-row pb-[5.35vw]'>
                <div className='flex flex-col basis-1/2 font-host-grotesk font-normal'>
                    <div className='pb-[1.65vw] w-[2rem]'>
                        <ImageWrapper src={IMGIconCalendar.src} alt='Icon calendar' />
                    </div>
                    <p className='text-[3.75vw]'><b>{newDate}</b> {day}</p>
                    <p className='text-[3.75vw]'>{time}</p>
                </div>
                <div className={`flex flex-col basis-1/2 font-host-grotesk ${location == 'Virtual' ? 'font-bold' : 'font-normal'}`}>
                    <div className='pb-[1.65vw] w-[2rem]'>
                        <ImageWrapper src={location == 'Virtual' ? IMGIconCam.src : IMGIconPosition.src} alt='Location icon' />
                    </div>
                    <p className='text-[3.75vw]'>{location !== 'Virtual' ? <><b>{city}</b>{state}</> : 'Virtual'}</p>
                </div>
            </div>
            <div className='flex pb-[8.55vw]'>
                <Button as={Link} href={href} target='_blank' variant='secondary' content='Event page' svg='arrow-up-right' />
            </div>
            {!isLastElement && <div className='h-[8.55vw] border-t-2 border-black' />}
        </div>
        )
}
