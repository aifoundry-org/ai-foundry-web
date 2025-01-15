'use client'

import { useState } from 'react'
import InTheNewsCard from './InTheNewsCard'
import IMGBackground from '@/public/pngs/inTheNews/backgroundMobile.png'

const cards = [{
    title: "Community Contributions to AI Projects",
    subtitle: "Discover how developers are collaborating on AI initiatives.",
    source: "cnn",
    tag: "Insights",
    link: ""
},{
    title: "AI Foundry Featured in Tech News",
    subtitle: "AI Foundry is making waves in the developer community.",
    source: "cnn",
    tag: "Updates",
    link: ""
},{
    title: "Upcoming AI Workshops and Meetups",
    subtitle: "Join us for our next exciting AI event.",
    source: "cnn",
    tag: "Events",
    link: ""
},{
    title: "This is a test event news",
    subtitle: "This is a test event news content",
    source: "cnn",
    tag: "Insights",
    link: ""
}]

export default function InTheNews() {
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
        <div className='xs:hidden flex flex-col pt-[28vw] pb-[7.7vw] relative w-full h-fit px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                AI Foundry<br/>in the News
            </div>
            <div className='font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw] pt-[4.3vw] pb-[8.55vw]'>
                Explore the latest news about our community.
            </div>
            <InTheNewsCard 
                title={cards[cardIndex].title}
                subtitle={cards[cardIndex].subtitle}
                tag={cards[cardIndex].tag}
                source={cards[cardIndex].source}
                link={cards[cardIndex].link}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
            <div className='absolute -bottom-[27.5vw] left-0 w-full -z-10'>
                <img src={IMGBackground.src} alt="In the News Background" />
            </div>
        </div>
    )
}