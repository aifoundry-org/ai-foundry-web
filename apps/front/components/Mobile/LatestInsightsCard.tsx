'use client'

import Button from '@/litebox-lib/ui/Button/Button';

export default function LatestInsightsCard({title = '', tags = [] as Array<string>, imageUrl = '', author = '', date = '', link = '', onClickLeft = () => {}, onClickRight = () => {}}) {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                <img src={imageUrl} className='border-2 border-black rounded-lg' />
            </div>
            <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                {tags.map((el, idx) => (
                    <div key={idx} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                        <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                            {el}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                {author} | {date}
            </div>
            <div className='flex flex-row'>
                <div className='flex basis-[10%] mt-8'>
                    <Button className='ml-0' onClick={onClickLeft} variant='secondary' svg='scroll-left' resetContainerPadding/>
                </div>
                <div className='flex basis-[80%] justify-center mt-8'>
                    <Button href={link} variant='secondary' content='Read more' />
                </div>
                <div className='flex basis-[10%] mt-8'>
                    <Button className='mr-0' onClick={onClickRight} variant='secondary' svg='scroll-right' resetContainerPadding/>
                </div>
            </div>
        </div>
        )
}
