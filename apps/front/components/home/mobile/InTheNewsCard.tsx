'use client'

import Button from '@/litebox-lib/ui/Button/Button'
import IMGLogoCnn from '@/public/pngs/home/inTheNews/logoCnn.png'

export default function InTheNewsCard({title = '', subtitle = '', tag = '', source = '', link = '', onClickLeft = () => {}, onClickRight = () => {}}) {
    let logo = source == 'cnn' ? IMGLogoCnn.src : '';
    return (
        <div className='flex flex-col w-full h-[64.2vw] relative'>
            <div className='flex flex-row items-center mb-[6.4vw] gap-x-[2.15vw]'>
                {logo && 
                    <div className='flex w-[12.8vw] border-[1px] rounded-[1.1vw] p-[2vw] border-black'>
                        <img src={logo} />
                    </div>
                }
                {tag && 
                    <div className='flex font-bold text-[4.8vw] bg-orange rounded-[1.075vw] py-[2.135vw] px-[3.75vw] leading-[4.85vw] font-dharma-gothic-e uppercase'>
                        {tag}
                    </div>
                }
            </div>
            <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7.16vw] uppercase'>{title}</p>
            <p className='font-host-grotesk font-normal pt-[4.27vw] text-[3.2vw]'>{subtitle}</p>
            <div className='flex flex-row mt-[9.075vw]'>
                <div className='flex basis-[10%]'>
                    <Button onClick={onClickLeft} variant='secondary' svg='scroll-left'/>
                </div>
                <div className='flex basis-[80%] justify-center'>
                    <Button href={link} variant='secondary' content='Read more' svg='arrow-up-right' />
                </div>
                <div className='flex basis-[10%]'>
                    <Button onClick={onClickRight} variant='secondary' svg='scroll-right'/>
                </div>
            </div>
        </div>
    )
}
