'use client'

import IMGArrow from '@/public/imgs/home/hero/arrowMobile.webp'
import IMGCircle from '@/public/imgs/home/hero/circleMobile.webp'
import IMGPluses from '@/public/imgs/home/hero/plusesMobile.webp'
import IMGPunchCard from '@/public/imgs/home/hero/punchCardMobile.webp'

import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function Hero() {
    return (
        <div className='xs:hidden block relative bg-black'>
            <div className='relative flex flex-col w-full bg-sand'>
                <div className='relative w-[100vw] h-[72vw] flex flex-col gap-y-[6vw]'>
                    <FadeIn delay={0.75} className='relative w-full h-full'>
                        <div className='absolute w-fit top-0 left-0'>
                            <ImageWrapper src={IMGCircle.src} alt='Circle' />
                        </div>
                        <div className='absolute w-fit bottom-[13.5vw] left-[9.5vw]'>
                            <ImageWrapper src={IMGPluses.src} alt='Pluses' />
                        </div>
                        <div className='absolute w-fit top-0 right-0'>
                            <ImageWrapper src={IMGPunchCard.src} alt='Punch card' />
                        </div>
                        <div className='absolute w-fit bottom-[10.5vw] right-[10vw]'>
                            <ImageWrapper src={IMGArrow.src} alt='Arrow' />
                        </div>
                    </FadeIn>
                    <FadeUp delay={0.25} duration={1} additionalInitialParams={{lineHeight: '20vw'}} additionalWhileInView={{lineHeight: '17.4vw'}} className='absolute w-full top-[10vw]'>
                        <h1 className='uppercase text-[23.5vw] text-center font-black'>
                            An open AI<br/>community<br/>for all
                        </h1>
                    </FadeUp>
                </div>
                <FadeUp delay={0.75} className='relative w-full'>
                    <h2 className='text-center text-[1.6rem] px-[2.5rem] font-normal font-host-grotesk normal-case leading-10'>
                        We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                    </h2>
                </FadeUp>
            </div>
        </div>
    )
}