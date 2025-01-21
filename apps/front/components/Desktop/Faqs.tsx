'use client'

import { useState } from 'react';
import Accordion from '@/libs/litebox-lib/ui/Accordion/Accordion'
import IMGBanner from '@/public/pngs/faqs/banner.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGErrorsCodes from '@/public/pngs/footer/errorCodes.png'
import FaqsModal from './FaqsModal'

const questions = [{
    title: 'Why is AIFoundry.org focusing on machine learning engineer & developer collaboration?',
    content: 'content test'
},{
    title: 'The AI market is vibrant and dynamic, why is this change needed now?',
    content: 'Machine learning and application development are entirely different disciplines with disparate communities, practices, and tools. The current state of the practice for application development includes continuous integration and deployment, treating configuration as code, and cross-functional integrated teams that own all aspects of delivering business value to production. The current state of the practice for machine learning engineers includes dealing with large datasets, model evaluation, and exploratory analysis tools like Jupyter notebooks. These divergent practices often end up causing friction in application development.'
},{
    title: 'AI is just software, and we know how to develop that. Why is a new approach needed?',
    content: 'content test'
},{
    title: 'Are AI Hack Labs like an unconference?',
    content: 'content test'
},{
    title: 'What are examples of tooling that needs to improve for AI developers?',
    content: 'content test'
}]

export default function Faqs() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='hidden md:flex md:flex-col md:pt-[21.35vw] md:pb-[7.7vw] md:relative md:w-full md:h-fit md:px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[6.4rem] leading-[5.3rem] uppercase'>
                Faqs
            </div>
            <div className='font-normal font-host-grotesk text-[1.6rem] leading-[2.4rem] pt-[1.6rem] pb-[4rem]'>
                Find answers to your questions about AI Foundry<br/>and our community-driven projects.
            </div>
            {questions.map((el,idx) => (
                <Accordion isDesktop key={idx} title={el.title} content={el.content} />
            ))}
            <div className='relative flex flex-row justify-between items-center w-full h-[9.45vw] mt-[2.778vw] border-2 border-black rounded-[4px]'>
                <div className='absolute left-0 top-0 w-full h-full -z-10'>
                    <img className='w-full h-full' src={IMGBanner.src} />
                </div>
                <div className='flex flex-col pl-[2.78vw]'>
                    <p className='flex uppercase font-black text-[3.335vw] leading-[2.8vw]'>Still have questions?</p>
                    <p className='flex font-host-grotesk font-normal text-[1.115vw] leading-[1.67vw] mt-[0.56vw]'>We're here to help!</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className='mr-[2.78vw]' labelProps='w-[4.44vw] h-[1.4vw]' variant='primary' content='contact us' />
            </div>
            <img className='absolute w-[58.27vw] -bottom-[9.3vw] right-[2vw]' src={IMGErrorsCodes.src} />
            <FaqsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    )
}