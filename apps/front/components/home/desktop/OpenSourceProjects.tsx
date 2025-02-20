'use client'
/* eslint-disable */
import FadeUp from '@/components/common/universal/FadeUp'
import OpenSourceProjectsCard from './OpenSourceProjectsCard'
import IMGBackground from '@/public/pngs/home/openSourceProjects/background.png'
import cards from '@/mock/home/openSourceProjects/data.json';

export default function OpenSourceProjects() {
    return (
        <div id='projects' className='hidden xs:flex xs:flex-col xs:pt-[10.95vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <img className='absolute w-[18vw] -top-[1.1vw] right-0 -z-[1]' src={IMGBackground.src} alt="Open Source Projects background" />
            <FadeUp className='font-black font-dharma-gothic-e text-[6.4rem] 2xl:text-[5vw] leading-[5.3rem] 2xl:leading-[4vw] uppercase'>
                View and join our<br/>open-source projects
            </FadeUp>
            <FadeUp className='font-normal font-host-grotesk text-[1.6rem] 2xl:text-[1.25vw] leading-[2.4rem] 2xl:leading-[1.7vw] pt-[1.67vw] pb-[3.9vw]'>
                AI Foundry open source projects are Apache V2 licensed. View the code on<br/>
                our Github, and collaborate with project contributors in our Discord Server.
            </FadeUp>
            <FadeUp className='flex flex-col md:flex-row justify-between gap-[7rem] mt-[4rem] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 md:gap-[3.34vw] lg:gap-[3.34vw] xl:gap-[3.34vw] 2xl:gap-[3.34vw]'>
                {cards.map(card => 
                    (<FadeUp className='flex basis-1/3' key={card.id} delay={card.delay} duration={1}>
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