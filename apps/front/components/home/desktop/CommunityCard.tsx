'use client';
/* eslint-disable */
import Link from 'next/link';
import Button from '@/litebox-lib/ui/Button/Button';
import IMGIconCalendar from '@/public/pngs/home/community/calendar.png';
import IMGIconPosition from '@/public/pngs/home/community/position.png';
import IMGIconCam from '@/public/pngs/home/community/cam.png';

export default function CommunityCard({
    title = '',
    author = '',
    date = '',
    time = '',
    location = '',
    href = ''
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
        <div className='flex flex-row w-full h-full mb-[3.35vw] pb-[4vw] md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 border-b-2 border-black'>
            <div className='flex flex-col w-[32vw] mr-[5vw]'>
                <p className='font-dharma-gothic-e font-black leading-[2.6rem] lg:leading-[3.4rem] xl:leading-[3.4rem] 2xl:leading-[3.4rem] text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] pb-[0.56vw] uppercase'dangerouslySetInnerHTML={{__html:title}} />
                <p className='font-host-grotesk font-normal text-[1.4rem]'>By {author}</p>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-[35vw] gap-0 md:gap-[5vw] lg:gap-[5vw] xl:gap-[5vw] 2xl:gap-[5vw]'>
                <div className='flex flex-col pb-[4vw] font-host-grotesk font-normal'>
                    <img className='w-[1.67vw] h-[2.1vw] pb-[0.42vw]' src={IMGIconCalendar.src} />
                    <p className='text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[1.6rem]'><b>{newDate}</b> {day}</p>
                    <p className='text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[1.6rem]'>{time}</p>
                </div>
                <div className={`flex flex-col font-host-grotesk ${location == 'Virtual' ? 'font-bold' : 'font-normal'}`}>
                    <img className='w-[1.67vw] h-[2.1vw] pb-[0.42vw]' src={location == 'Virtual' ? IMGIconCam.src : IMGIconPosition.src} />
                    <p className='text-[1.4rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[1.6rem]'>{location !== 'Virtual' ? <><b>{city}</b>{state}</> : 'Virtual'}</p>
                </div>
            </div>
            <div className='flex justify-end w-[30vw]'>
                <Button as={Link} href={href} target='_blank' variant='secondary' content='Event page' svg='arrow-up-right' />
            </div>
        </div>
        )
}
