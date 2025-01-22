'use client'

import Button from '@/litebox-lib/ui/Button/Button';

export default function LatestInsightsCard({title = '', tags = [] as Array<string>, imageUrl = '', author = '', date = '', link = ''}) {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center justify-between mb-[1.675vw]'>
                <img src={imageUrl} className='border-2 border-black rounded-lg' />
            </div>
            <div className='flex flex-row items-center mb-[2vw] md:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-x-[0.575vw]'>
                {tags.map((el, idx) => (
                    <div key={idx} className='bg-orange rounded-md px-[2vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw] py-[2vw] md:py-[0.75vw] xl:py-[0.75vw] 2xl:py-[0.75vw]'>
                        <p className='font-dharma-gothic-e font-bold text-[4vw] md:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                            {el}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row items-center justify-between mb-[2vw] md:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                <p className='font-dharma-gothic-e font-black text-[5vw] md:text-[2.778vw] xl:text-[2.778vw] 2xl:text-[2.778vw] leading-[4vw] md:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-row font-normal text-[3vw] md:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] leading-[1.5vw] font-host-grotesk'>
                {author} | {date}
            </div>
            <div className='flex flex-row basis-[80%] justify-start mt-8'>
                <Button href={link} variant='secondary' content='Read more' />
            </div>
        </div>
        )
}
