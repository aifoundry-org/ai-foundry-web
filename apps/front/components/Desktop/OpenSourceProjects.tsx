'use client'

import OpenSourceProjectsCard from './OpenSourceProjectsCard'
import IMGBackground from '@/public/pngs/openSourceProjects/background.png'

const cards = [{
    id: 1,
    title: "Llamagator",
    subtitle: "Llamagator (your LLM aggregator) is a multi-LLM prompt testing tool.",
    content: `
        <ul>
            <li>Test prompts against multiple LLMs or LLM versions</li>
            <li>Observe the relative performance of generated responses</li>
            <li>Run prompts multiple times to observe the reliability </li>
            <li>Supports local and API access to LLMs</li>
            <li>Licensed under Apache License, Version 2.0</li>
        </ul>
    `,
    link: ""
},{
    id: 2,
    title: "$blame.ai",
    subtitle: "$blame.ai is a demo app for testing AI infrastructure from LLMs to inference engines.",
    content: "We're building an open data set, application code, and reference implementation that any developer can use to showcase their AI infrastructure.",
    link: ""
},{
    id: 3,
    title: "Quantization-Aware Training",
    subtitle: "A community research project to investigate data-free quantization-aware training.",
    content: "",
    link: ""
}]

export default function OpenSourceProjects() {
    return (
        <div className='hidden xs:flex xs:flex-col xs:pt-[10.95vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <div className='absolute w-full h-fit -top-[1.1vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" height="412" alt="Open Source Projects background" />
            </div>
            <div className='font-black font-dharma-gothic-e text-[6.4rem] 2xl:text-[5vw] leading-[5.3rem] 2xl:leading-[4vw] uppercase'>
                View and join our<br/>open-source projects
            </div>
            <div className='font-normal font-host-grotesk text-[1.6rem] 2xl:text-[1.25vw] leading-[2.4rem] 2xl:leading-[1.7vw] pt-[1.67vw] pb-[3.9vw]'>
                AI Foundry open source projects are Apache V2 licensed. View the code on<br/>
                our Github, and collaborate with project contributors in our Discord Server.
            </div>
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-[4.8rem]'>
                {cards.map(card => 
                    (<OpenSourceProjectsCard
                        key={card.id}
                        title={card.title}
                        subtitle={card.subtitle}
                        content={card.content}
                        link={card.link}
                    />)
                )}
            </div>
        </div>
    )
}