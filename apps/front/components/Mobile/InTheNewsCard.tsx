'use client'

import Button from '@/litebox-lib/ui/Button/Button'
import IMGLogoCnn from '@/public/pngs/inTheNews/LogoCnn.png'

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
            <div className='flex flex-row items-center justify-between'>
                <p className='font-dharma-gothic-e font-black text-[8.6vw] leading-[7.16vw] uppercase'>{title}</p>
            </div>
            <div className='flex flex-col pt-[4.27vw] h-[10vw] leading-[5.6vw]'>
                <div className='font-host-grotesk font-normal text-[3.2vw]'>{subtitle}</div>
            </div>
            <div className='flex flex-row'>
                <div className='flex basis-[10%] mt-8'>
                    <Button className='ml-0' onClick={onClickLeft} variant='secondary' svg='scroll-left' resetContainerPadding/>
                </div>
                <div className='flex basis-[80%] justify-center mt-8'>
                    <Button href={link} variant='secondary' content='Read more' svg='arrow-up-right' svgProps={{width: '22', height: '22'}} />
                </div>
                <div className='flex basis-[10%] mt-8'>
                    <Button onClick={onClickRight} variant='secondary' svg='scroll-right' resetContainerPadding/>
                </div>
            </div>
        </div>
    )
}
