'use client'

import { useState } from 'react';
import Accordion from '@/libs/litebox-lib/ui/Accordion/Accordion'
import IMGBanner from '@/public/imgs/home/faqs/banner.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import FaqsModal from './FaqsModal'
import questions from '@/mock/home/faqs/data.json'
import FadeUp from '@/components/common/universal/FadeUp';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function Faqs() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='hidden md:flex md:flex-col md:pt-[21.35vw] md:pb-[7.7vw] md:relative md:w-full md:h-fit md:px-[5.6vw]'>
            <FadeUp className='font-black font-dharma-gothic-e text-[6.4rem] leading-[5.3rem] uppercase'>
                Faqs
            </FadeUp>
            <FadeUp className='font-normal font-host-grotesk text-[1.6rem] leading-[2.4rem] pt-[1.6rem] pb-[4rem]'>
                Find answers to your questions about AI Foundry<br/>and our community-driven projects.
            </FadeUp>
            {questions.map((el,idx) => (
                <FadeUp delay={idx/8} key={idx}>
                    <Accordion isDesktop key={idx} title={el.title} content={el.content} />
                </FadeUp>
            ))}
            <FadeUp className='relative flex flex-row justify-between items-center w-full h-[9.45vw] mt-[2.778vw] border-2 border-black rounded-[4px]'>
                <div className='absolute left-0 top-0 w-full h-full -z-10'> 
                    <ImageWrapper style={{height: '100%'}} src={IMGBanner.src} alt='Banner' />
                </div>
                <div className='flex flex-col pl-[2.78vw]'>
                    <p className='flex uppercase font-black text-[3.335vw] leading-[2.8vw]'>Still have questions?</p>
                    <p className='flex font-host-grotesk font-normal text-[1.115vw] leading-[1.67vw] mt-[0.56vw]'>We&apos;re here to help!</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className='mr-[2.78vw]' variant='primary' content='contact us' />
            </FadeUp>
            {isModalOpen && <FaqsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />}
        </div>
    )
}