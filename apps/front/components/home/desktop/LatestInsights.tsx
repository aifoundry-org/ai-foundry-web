/* eslint-disable */
import Link from 'next/link'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'

import LatestInsightsCard from './LatestInsightsCard'
import IMGBackground from '@/public/pngs/home/latestInsights/background.png'
import IMGBackgroundTitle from '@/public/pngs/home/latestInsights/backgroundTitle.png'

import { getLastArticles } from '@/backend/blog/actions'

export default async function LatestInsights() {
    const articles = await getLastArticles();

    return (
        <div id='blog' className='hidden xs:flex xs:flex-col xs:pt-[12vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <FadeIn delay={1} className='absolute w-full h-fit -top-[3.5vw] left-0 -z-[1]'>
                <img src={IMGBackground.src} width="100%" height="412" alt="Latest Insights background" />
            </FadeIn>
            <FadeUp className='font-black font-dharma-gothic-e text-[7vw] md:text-[4.45vw] xl:text-[4.45vw] 2xl:text-[4.45vw] leading-[3.7vw] uppercase relative'>
                Explore Our Latest Insights
                <div className='absolute flex w-[39.52vw] -z-[1] -top-[7vw] -left-[3.2vw]'>
                    <img src={IMGBackgroundTitle.src} alt="Latest Insights background" />
                </div>
            </FadeUp>
            <FadeUp className='font-normal md:w-1/2 xl:w-1/2 2xl:w-1/2 text-justify font-host-grotesk text-[2.75vw] md:text-[1.125vw] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[2.75vw] md:leading-[1.675vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] py-[1.675vw]'>
                Stay updated with our community-driven content. Read about past events and 
                access to summaries and video replays of prior AI Hack Labs and Podcasts.
            </FadeUp>
            <FadeUp className='w-full h-fit mb-[3.335vw]'>
                <Button as={Link} href="/blog" variant='primary' content='Visit our blog' />
            </FadeUp>
            <div className='flex flex-col gap-[6vw] md:flex-row xl:flex-row 2xl:flex-row md:gap-[1vw] xl:gap-[1vw] 2xl:gap-[1vw]'>
                {articles.data.map((article, idx) => (
                    <FadeUp key={article.id} delay={0.75+(0.15*idx)}>
                        <LatestInsightsCard article={article} />
                    </FadeUp>
                ))}
            </div>
        </div>
    )
}