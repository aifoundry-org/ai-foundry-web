'use client';

import Button from '@/litebox-lib/ui/Button/Button';
import IMGIconCalendar from '@/public/pngs/community/calendar.png';
import IMGIconPosition from '@/public/pngs/community/position.png';
import IMGIconCam from '@/public/pngs/community/cam.png';

export default function CommunityCard({
    title = '',
    author = '',
    date = '',
    time = '',
    location = '',
    link = ''
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
        <div className='flex flex-row w-full h-full pb-[3.35vw] mb-[3.35vw] border-b-2 border-black'>
            <div className='flex flex-col basis-1/4 '>
                <p className='font-dharma-gothic-e font-black leading-[5vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] text-[5vw] xl:text-[2.8vw] 2xl:text-[2.8vw] pb-[0.56vw] uppercase'>{title}</p>
                <p className='font-host-grotesk font-normal text-[3vw] xl:text-[1vw] 2xl:text-[1vw]'>By {author}</p>
            </div>
            <div className='flex flex-col xl:flex-row 2xl:flex-row basis-1/2 ml-[2.75vw] xl:justify-center 2xl:justify-center'>
                <div className='flex flex-col xs:pb-[4vw] xl:basis-1/2 2xl:basis-1/2 font-host-grotesk font-normal'>
                    <img className='pb-[0.42vw]' src={IMGIconCalendar.src} width='24' height='24' />
                    <p className='text-[3vw] xl:text-[1.15vw] 2xl:text-[1.15vw]'><b>{newDate}</b> {day}</p>
                    <p className='text-[3vw] xl:text-[1.15vw] 2xl:text-[1.15vw]'>{time}</p>
                </div>
                <div className={`flex flex-col xl:basis-1/3 2xl:basis-1/3 font-host-grotesk ${location == 'Virtual' ? 'font-bold' : 'font-normal'}`}>
                    <img className='pb-[0.42vw]' src={location == 'Virtual' ? IMGIconCam.src : IMGIconPosition.src} width='20' height='20' />
                    <p className='text-[3vw] xl:text-[1.15vw] 2xl:text-[1.15vw]'>{location !== 'Virtual' ? <><b>{city}</b>{state}</> : 'Virtual'}</p>
                </div>
            </div>
            <div className='flex basis-1/4 justify-end'>
                <Button href={link} variant='secondary' content='Event page' svg='arrow-up-right' />
            </div>
        </div>
        )
}
