'use client'

import Button from '@/litebox-lib/ui/Button/Button';
import SVGIconArrowUpRight from '@/public/svgs/common/ArrowUpRightMobile';
import Link from 'next/link';

export default function OpenSourceProjectsCard({title = '', subtitle = '', content = '', link = '', onClickLeft = () => {}, onClickRight = () => {}}) {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center justify-between'>
                <p className='font-dharma-gothic-e font-black text-[8.6vw] uppercase'>{title}</p>
                <SVGIconArrowUpRight />
            </div>
            <div className='flex flex-col border-y-2 border-black mt-[2vw] py-[6.4vw] h-[70vw] leading-[5.6vw]'>
                <div className='font-host-grotesk font-bold text-[4.3vw]'>{subtitle}</div>
                {content !== '' && <div dangerouslySetInnerHTML={{__html: content}} className='font-host-grotesk font-normal text-[3.75vw] pt-[4.3vw] leading-[5vw]' />}
            </div>
            <div className='flex flex-row'>
                <div className='flex basis-[10%] mt-8'>
                    <Button onClick={onClickLeft} variant='secondary' svg='scroll-left' />
                </div>
                <div className='flex basis-[80%] justify-center mt-8'>
                    <Button target="_blank" as={Link} href={link} variant='secondary' content='View repo' svg='github' />
                </div>
                <div className='flex basis-[10%] mt-8'>
                    <Button onClick={onClickRight} variant='secondary' svg='scroll-right' />
                </div>
            </div>
        </div>
        )
}
