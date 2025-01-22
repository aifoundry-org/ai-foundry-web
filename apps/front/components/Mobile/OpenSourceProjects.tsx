'use client'

import { useState } from 'react'
import OpenSourceProjectsCard from './OpenSourceProjectsCard'

const cards = [{
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
    title: "$blame.ai",
    subtitle: "$blame.ai is a demo app for testing AI infrastructure from LLMs to inference engines.",
    content: "",
    link: ""
},{
    title: "Quantization-Aware Training",
    subtitle: "A community research project to investigate data-free quantization-aware training.",
    content: "We're building an open data set, application code, and reference implementation that any developer can use to showcase their AI infrastructure.",
    link: ""
}]

export default function OpenSourceProjects() {
    const [cardIndex, setCardIndex] = useState(0);

    const onClickLeft = () => {
        if(cardIndex-1 < 0){
            setCardIndex(cards.length-1)
        } else {
            setCardIndex(cardIndex-1);
        }
    }

    const onClickRight = () => {
        if(cardIndex+1 > cards.length-1){
            setCardIndex(0)
        } else {
            setCardIndex(cardIndex+1);
        }
    };

    return (
        <div id='projects-mobile' className='xs:hidden flex flex-col pt-[30vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                View and join our<br/>open-source<br/>projects
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                AI Foundry open source projects are Apache<br/>
                V2 licensed. View the code on our Github, and<br/>
                collaborate with project contributors in our<br/>
                Discord Server.
            </div>
            <OpenSourceProjectsCard 
                title={cards[cardIndex].title}
                subtitle={cards[cardIndex].subtitle}
                content={cards[cardIndex].content}
                link={cards[cardIndex].link}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
        </div>
    )
}