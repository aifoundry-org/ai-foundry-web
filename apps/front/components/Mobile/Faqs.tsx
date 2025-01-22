'use client'

import { useState } from 'react';
import Accordion from '@/libs/litebox-lib/ui/Accordion/Accordion'
import IMGBanner from '@/public/pngs/faqs/bannerMobile.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'
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
        <div className='md:hidden flex flex-col pt-[21.35vw] pb-[30.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                Faqs
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                Find answers to your questions about AI Foundry<br/>and our community-driven projects.
            </div>
            {questions.map((el,idx) => (
                <Accordion key={idx} title={el.title} content={el.content} />
            ))}
            <div className='relative flex w-[87.2vw] h-[72.55vw] mt-[10.67vw] border-2 border-black rounded-[4px]'>
                <div className='absolute left-0 top-0 w-full h-full'>
                    <img src={IMGBanner.src} />
                </div>
                <div className='flex flex-col p-[6.4vw]'>
                    <p className='flex uppercase font-black text-[12.8vw] leading-[10.7vw]'>Still have<br/>questions?</p>
                    <p className='flex font-normal text-[4.27vw] leading-[6vw] mt-[2.15vw]'>We're here to help!</p>
                    <Button onClick={() => setIsModalOpen(true)} className='mt-[9.6vw] z-10' labelProps='w-[20.87vw] h-[6.875vw]' variant='primary' content='contact us' />
                </div>
            </div>
            <FaqsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    )
}