'use client'

import { useState } from 'react'
import InTheNewsCard from './InTheNewsCard'
import IMGSliderCircleFull from '@/public/pngs/inTheNews/sliderCircleFull.png'
import IMGSliderCircleEmpty from '@/public/pngs/inTheNews/sliderCircleEmpty.png'
import IMGBackground from '@/public/pngs/inTheNews/background.png'

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
    const cardPerPage = 3;
    const totalCards = cards.length;
    const totalPages = Math.ceil(totalCards/cardPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className='hidden md:flex md:flex-col md:pt-0 md:pb-[7.7vw] md:relative md:w-full md:h-fit md:px-[5.6vw]'>
            <div className='font-black font-dharma-gothic-e text-[4.45vw] leading-[3.685vw] uppercase'>
                AI Foundry in the News
            </div>
            <div className='font-normal font-host-grotesk text-[1.115vw] leading-[1.675vw] pt-[1.67vw] pb-[3.06vw]'>
                Explore the latest news about our community.
            </div>
            <div className='flex flex-row gap-x-[1.675vw]'>
                {cards.slice(currentPage*cardPerPage,(currentPage*cardPerPage)+cardPerPage).map((card, idx) => (
                    <InTheNewsCard 
                        key={idx}
                        title={card.title}
                        subtitle={card.subtitle}
                        tag={card.tag}
                        source={card.source}
                        link={card.link}
                    />
                ))}
            </div>
            <div className='flex w-full justify-center items-center mt-[4.515vw] gap-[0.905vw]'>
                {[...Array(totalPages)].map((i, idx) => (
                    <img onClick={() => setCurrentPage(idx)} key={idx} className='w-[13px] cursor-pointer' src={idx == currentPage ? IMGSliderCircleFull.src : IMGSliderCircleEmpty.src} />
                ))}
            </div>
            <div className='absolute -bottom-0 left-0 w-full -z-10'>
                <img className='w-full' src={IMGBackground.src} alt="In the News Background" />
            </div>
        </div>
    )
}