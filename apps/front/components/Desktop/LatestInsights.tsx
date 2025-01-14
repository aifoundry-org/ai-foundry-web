'use client'

import LatestInsightsCard from './LatestInsightsCard'
import IMGBackground from '@/public/pngs/latestInsights/background.png'
import IMGLLamaEvent from '@/public/pngs/latestInsights/llamaEvent.png'
import IMGPodcast from '@/public/pngs/latestInsights/podcast.png'
import IMGProductionStack from '@/public/pngs/latestInsights/productionStack.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'

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
    return (
        <div className='hidden xs:flex xs:flex-col xs:pt-[12vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <div className='absolute w-full h-fit -top-[3.5vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" height="412" alt="Latest Insights background" />
            </div>
            <div className='font-black font-dharma-gothic-e text-[7vw] md:text-[4.45vw] xl:text-[4.45vw] 2xl:text-[4.45vw] leading-[3.7vw] uppercase'>
                Explore Our Latest Insights
            </div>
            <div className='font-normal md:w-1/2 xl:w-1/2 2xl:w-1/2 text-justify font-host-grotesk text-[2.75vw] md:text-[1.125vw] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[2.75vw] md:leading-[1.675vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] py-[1.675vw]'>
                Stay updated with our community-driven content. Read about past events and 
                access to summaries and video replays of prior AI Hack Labs and Podcasts.
            </div>
            <div className='w-full h-fit mb-[3.335vw]'>
                <Button className='ml-0' variant='primary' content='Visit our blog' />
            </div>
            <div className='flex flex-col gap-[6vw] md:flex-row xl:flex-row 2xl:flex-row md:gap-[1vw] xl:gap-[1vw] 2xl:gap-[1vw]'>
                {cards.map((card, idx) => (
                    <LatestInsightsCard 
                        key={idx}
                        title={card.title}
                        tags={card.tags}
                        author={card.author}
                        date={card.date}
                        imageUrl={card.imageUrl}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    )
}