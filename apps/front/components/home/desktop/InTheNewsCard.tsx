'use client'

import Button from '@/litebox-lib/ui/Button/Button'
import IMGLogoCnn from '@/public/pngs/home/inTheNews/logoCnn.png'

export default function InTheNewsCard({title = '', subtitle = '', tag = '', source = '', link = ''}) {
    let logo = source == 'cnn' ? IMGLogoCnn.src : '';
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row items-center mb-[1.67vw] gap-x-[0.56vw]'>
                {logo && 
                    <div className='flex border-[1px] p-[1vw] rounded-[0.28vw] border-black'>
                        <img className='w-[2.225vw]' src={logo} />
                    </div>
                }
                {tag && 
                    <div className='flex font-bold text-[1.395vw] bg-orange rounded-[0.28vw] px-[1vw] py-[1vw] leading-[1.395vw] font-dharma-gothic-e uppercase items-center'>
                        {tag}
                    </div>
                }
            </div>
            <div className='flex flex-col w-full h-fit'>
                <p className='font-dharma-gothic-e font-black text-[2.8vw] leading-[2.3vw] uppercase'>{title}</p>
                <p className='pt-[1.115vw] font-host-grotesk font-normal text-[0.975vw]'>{subtitle}</p>
                <Button className='mt-[1.67vw]' href={link} variant='secondary' content='Read more' svg='arrow-up-right' />
            </div>
        </div>
    )
}
