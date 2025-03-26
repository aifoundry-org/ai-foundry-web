import Link from 'next/link'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'

import IMGGraffitiTop from '@/public/imgs/home/latestInsights/graffitiTop.webp'
import IMGGraffitiBottom from '@/public/imgs/home/latestInsights/graffitiBottom.webp'
import IMGBackgroundTitle from '@/public/imgs/home/latestInsights/backgroundTitle.webp'

import { getLastArticles } from '@/backend/blog/actions'
import ArticleThumbnail from '@/components/blog/desktop/ArticleThumbnail'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default async function LatestInsights() {
    const articles = await getLastArticles();

    return (
        <div id='blog' className='hidden xs:flex xs:flex-col xs:pt-[12vw] xs:pb-[7.7vw] xs:relative xs:w-full xs:h-fit xs:px-[7.78vw]'>
            <FadeIn delay={1} className='absolute w-[20vw] h-fit -top-[2.5vw] left-0 -z-[1]'>
                <ImageWrapper src={IMGGraffitiTop.src} alt="Graffiti Top" />
            </FadeIn>
            {articles.data.length >= 3 && 
                <FadeIn delay={1} className='absolute w-[25.95vw] h-fit -z-[1]
                    top-[calc(50%-80vw)] sm:top-[calc(50%-75vw)] md:top-[calc(50%-60vw)] lg:top-[calc(50%-30vw)] xl:top-[calc(50%-20vw)] 2xl:top-[calc(50%-20vw)] 
                    right-[calc(50%-48vw)] sm:right-[calc(50%-48vw)] md:right-[calc(50%-48vw)] lg:right-[calc(50%-48vw)] xl:right-[calc(50%-48vw)] 2xl:right-[calc(50%-48vw)] 
                '>
                    <ImageWrapper src={IMGGraffitiBottom.src} alt="Graffiti Top" />
                </FadeIn>
            }
            <FadeUp>
                <h2 className='font-black font-dharma-gothic-e text-[7vw] md:text-[4.45vw] xl:text-[4.45vw] 2xl:text-[4.45vw] leading-[3.7vw] uppercase relative'>
                    Explore Our Latest Insights
                    <div className='absolute flex w-[39.52vw] -z-[1] -top-[7vw] -left-[3.2vw]'>
                        <ImageWrapper src={IMGBackgroundTitle.src} alt="Latest Insights background" />
                    </div>
                </h2>
            </FadeUp>
            <FadeUp>
                <h3 className='font-normal normal-case md:w-1/2 xl:w-1/2 2xl:w-1/2 text-justify font-host-grotesk text-[2.75vw] md:text-[1.125vw] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[2.75vw] md:leading-[1.675vw] xl:leading-[1.675vw] 2xl:leading-[1.675vw] py-[1.675vw]'>
                    Stay updated with our community-driven content. Read about past events and 
                    access to summaries and video replays of prior AI Hack Labs and Podcasts.
                </h3>
            </FadeUp>
            <FadeUp className='w-full h-fit mb-[3.335vw]'>
                <Button as={Link} href="/blog" variant='primary' content='Visit our blog' />
            </FadeUp>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20 auto-rows-fr'>
                {articles.data.map((article, idx) => (
                    <FadeUp key={article.id} delay={0.75+(0.15*idx)}>
                        <ArticleThumbnail article={article} />
                    </FadeUp>
                ))}
            </div>
        </div>
    )
}