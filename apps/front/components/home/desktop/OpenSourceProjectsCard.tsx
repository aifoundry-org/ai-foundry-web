'use client'

import ImageWrapper from '@/components/common/universal/ImageWrapper';
import Button from '@/litebox-lib/ui/Button/Button';
import IMGArrowUpRight from '@/public/imgs/home/openSourceProjects/arrowUpRight.webp';
import Link from 'next/link';

export default function OpenSourceProjectsCard({title = '', subtitle = '', content = '', link = ''}) {
    return (
        <div className='flex flex-col w-full h-full'>
            <div onClick={() => {
                window.location.href = link
            }} className='flex flex-row h-fit min-h-[7vw] items-center md:items-start xl:items-start 2xl:items-start justify-between border-b-2 border-black'>
                <h3 className='font-dharma-gothic-e font-black text-[4rem] md:text-[3rem] xl:text-[2.78vw] 2xl:text-[2.78vw] leading-0 md:leading-[2.5vw] xl:leading-[2.5vw] 2xl:leading-[2.5vw] uppercase'>{title}</h3>
                <div className='w-[3vw] md:w-[2.125vw] xl:w-[2.125vw] 2xl:w-[2.125vw] inline-block'>
                    <ImageWrapper src={IMGArrowUpRight.src} alt='Arrow up right' />
                </div>
            </div>
            <div className='flex flex-col mt-[1.67vw] h-full border-b-2 border-black leading-[2.4rem]'>
                <div className={`font-host-grotesk font-bold text-[2rem] md:text-[1.7rem] lg:text-[1.5vw] xl:text-[1.115vw] 2xl:text-[1.115vw] xl:leading-[1.67vw] 2xl:leading-[1.67vw] ${content == '' && 'pb-[3vw] md:pb-0 xl:pb-0 lg:pb-0'}`}>{subtitle}</div>
                {content !== '' && <div dangerouslySetInnerHTML={{__html: content}} className='font-host-grotesk font-normal text-[2rem] md:text-[1.7rem] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw] xl:leading-[1.46vw] 2xl:leading-[1.46vw] pt-[1.125vw] pb-[3.5vw] xl:pb-[1.67vw] 2xl:pb-[1.8vw]' />}
            </div>
            <Button target="_blank" as={Link} href={link} className='mt-8' variant='secondary' content='View repo' svg='github' />
        </div>
        )
}
