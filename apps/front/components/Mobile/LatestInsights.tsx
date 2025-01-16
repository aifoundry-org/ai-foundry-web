'use client'

import { useState } from 'react'
import LatestInsightsCard from './LatestInsightsCard'
import IMGBackground from '@/public/pngs/latestInsights/backgroundMobile.png'
import IMGLLamaEvent from '@/public/pngs/latestInsights/llamaEvent.png'
import IMGPodcast from '@/public/pngs/latestInsights/podcast.png'
import IMGProductionStack from '@/public/pngs/latestInsights/productionStack.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import LatestInsightsCard from './LatestInsightsCard'

const cards = [{
    title: "Llama Shaving Podcast: Is Data Truly a Moat for an Enterprise?",
    tags: ['podcast', 'big data', 'enterprise ai'],
    author: 'Tanya Dadasheva',
    date: 'November 19, 2024',
    imageUrl: IMGLLamaEvent.src,
    link: ""
},{
    title: "Productionizing AI: Three Layers of Models Production Stack",
    tags: ['podcast', 'opening ai', 'productionization'],
    author: 'Tanya Dadasheva',
    date: 'November 13, 2024',
    imageUrl: IMGPodcast.src,
    link: ""
},{
    title: "Low-Level AI Engineering and Hacking: AIFoundry.org Podcast",
    tags: ['podcast', 'community', 'fosdem'],
    author: 'Tanya Dadasheva',
    date: 'November 12, 2024',
    imageUrl: IMGProductionStack.src,
    link: ""
}]

export default function LatestInsights() {
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
        <div className='xs:hidden flex flex-col pt-[21.35vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='absolute w-full h-fit -top-[3.5vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" alt="Latest Insights background" />
            </div>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                Explore Our Latest<br/>Insights
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[4.275vw]'>
                Stay updated with our community-driven content.<br/>
                Read about past events and access to summaries<br/>
                and video replays of prior AI Hack Labs and<br/>
                Podcasts.
            </div>
            <div className='w-full h-fit mb-[8.55vw]'>
                <Button labelProps='h-[5vw]' variant='primary' content='Visit our blog' />
            </div>
            <LatestInsightsCard 
                title={cards[cardIndex].title}
                tags={cards[cardIndex].tags}
                author={cards[cardIndex].author}
                date={cards[cardIndex].date}
                imageUrl={cards[cardIndex].imageUrl}
                link={cards[cardIndex].link}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
        </div>
    )
}