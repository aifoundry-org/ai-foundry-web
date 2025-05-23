'use client'

// TODO: Uncomment the lines where applies when 
// the sending form is fully implemented

// import { useState } from 'react';
import FadeUp from '@/components/common/universal/FadeUp';
import Accordion from '@/libs/litebox-lib/ui/Accordion/Accordion'
import questions from '@/mock/home/faqs/data.json'
// import IMGBanner from '@/public/imgs/home/faqs/bannerMobile.webp'
// import Button from '@/libs/litebox-lib/ui/Button/Button'
// import FaqsModal from './FaqsModal'
// import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function Faqs() {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='md:hidden flex flex-col pt-[21.35vw] pb-[30.7vw] relative w-full h-fit px-[5.6vw]'>
            <FadeUp>
                <h2 className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                    Faqs
                </h2>
            </FadeUp>
            <FadeUp>
                <h3 className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw] normal-case'>
                    Find answers to your questions about AI Foundry<br/>and our community-driven projects.
                </h3>
            </FadeUp>
            {questions.map((el,idx) => (
                <FadeUp delay={idx/8} key={idx}>
                    <Accordion title={el.title} content={el.content} />
                </FadeUp>
            ))}
            {/* <FadeUp className='relative flex w-[87.2vw] h-[72.55vw] mt-[10.67vw] border-2 border-black rounded-[4px]'>
                <div className='absolute left-0 top-0 w-full h-full'>
                    <ImageWrapper src={IMGBanner.src} alt='Banner' />
                </div>
                <div className='flex flex-col p-[6.4vw]'>
                    <p className='flex uppercase font-black text-[12.8vw] leading-[10.7vw]'>Still have<br/>questions?</p>
                    <p className='flex font-normal text-[4.27vw] leading-[6vw] mt-[2.15vw]'>We&apos;re here to help!</p>
                    <Button onClick={() => setIsModalOpen(true)} className='mt-[9.6vw] z-10' variant='primary' content='contact us' />
                </div>
            </FadeUp>
            {isModalOpen && <FaqsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />} */}
        </div>
    )
}