'use client'
/* eslint-disable */
import IMGArrow from '@/public/pngs/home/hero/arrowMobile.png'
import IMGCircle from '@/public/pngs/home/hero/circleMobile.png'
import IMGPluses from '@/public/pngs/home/hero/plusesMobile.png'
import IMGPunchCard from '@/public/pngs/home/hero/punchCardMobile.png'

import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'

export default function Hero() {
    return (
        <div className='xs:hidden block relative bg-black'>
            <div className='relative flex flex-col w-full bg-sand'>
                <div className='relative w-[100vw] h-[72vw] flex flex-col gap-y-[6vw]'>
                    <FadeIn delay={0.75} className='relative w-full h-full'>
                        <img className='absolute w-fit top-0 left-0' src={IMGCircle.src} />
                        <img className='absolute w-fit bottom-[13.5vw] left-[9.5vw]' src={IMGPluses.src} />
                        <img className='absolute w-fit top-0 right-0' src={IMGPunchCard.src} />
                        <img className='absolute w-fit bottom-[10.5vw] right-[10vw]' src={IMGArrow.src} />
                    </FadeIn>
                    <FadeUp delay={0.25} duration={1} additionalInitialParams={{lineHeight: '20vw'}} additionalWhileInView={{lineHeight: '17.4vw'}} className='absolute w-full top-[10vw]'>
                        <p className='uppercase text-[23.5vw] text-center font-black'>
                            An open AI<br/>community<br/>for all
                        </p>
                    </FadeUp>
                </div>
                <FadeUp delay={0.75} className='relative w-full'>
                    <p className='text-center text-[1.6rem] px-[2.5rem] font-normal font-host-grotesk'>
                        We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                    </p>
                </FadeUp>
            </div>
        </div>
    )
}