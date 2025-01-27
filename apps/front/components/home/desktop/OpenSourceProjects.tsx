'use client'

import FadeUp from '@/components/common/universal/FadeUp'
import OpenSourceProjectsCard from './OpenSourceProjectsCard'
import IMGBackground from '@/public/pngs/home/openSourceProjects/background.png'
import cards from '@/mock/home/openSourceProjects/data.json';

export default function OpenSourceProjects() {
    return (
        <div id='projects' className='hidden xs:flex xs:flex-col xs:pt-[10.95vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <div className='absolute w-full h-fit -top-[1.1vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" height="412" alt="Open Source Projects background" />
            </div>
            <FadeUp className='font-black font-dharma-gothic-e text-[6.4rem] 2xl:text-[5vw] leading-[5.3rem] 2xl:leading-[4vw] uppercase'>
                View and join our<br/>open-source projects
            </FadeUp>
            <FadeUp className='font-normal font-host-grotesk text-[1.6rem] 2xl:text-[1.25vw] leading-[2.4rem] 2xl:leading-[1.7vw] pt-[1.67vw] pb-[3.9vw]'>
                AI Foundry open source projects are Apache V2 licensed. View the code on<br/>
                our Github, and collaborate with project contributors in our Discord Server.
            </FadeUp>
            <FadeUp className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-[4.8rem]'>
                {cards.map(card => 
                    (<FadeUp className='flex basis-1/4' key={card.id} delay={card.delay} duration={1}>
                        <OpenSourceProjectsCard
                            title={card.title}
                            subtitle={card.subtitle}
                            content={card.content}
                            link={card.link}
                        />
                    </FadeUp>)
                )}
            </FadeUp>
        </div>
    )
}