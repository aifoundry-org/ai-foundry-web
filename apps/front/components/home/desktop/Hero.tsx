import IMGBackground from '@/public/pngs/home/hero/background.png'
import SVGPaperError from '@/public/svgs/hero/PaperError'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'

export default function Hero() {
    return (
        <div className='hidden xs:flex xs:flex-col xs:w-full xs:h-full relative mb-[8vw] md:mb-[5vw] lg:mb-0 xl:mb-0'>
            <FadeIn delay={1.25} duration={0.5} className='w-[92vw]'>
                <img src={IMGBackground.src} />
            </FadeIn>
            <FadeUp className='absolute w-full top-[4vw]' delay={0.25} duration={1} additionalInitialParams={{lineHeight: '12vw'}} additionalWhileInView={{lineHeight: '9.935vw'}}>
                <p className='uppercase text-[13.475vw] text-center font-black'>
                    An open AI<br/>community<br/>for all
                </p>
            </FadeUp>
            <FadeUp delay={1.25} duration={0.5} className='absolute left-[61vw] top-[18vw] w-[17.365vw]'>
                <SVGPaperError />
            </FadeUp>
            <FadeUp delay={1.25} duration={0.5}>
                <div className='relative w-full h-full xl:w-[62rem] lg:w-[50rem] md:w-1/2 xs:w-3/4 font-normal font-host-grotesk text-center xs:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2rem] left-1/2 -translate-x-1/2 -bottom-[6vw] md:-bottom-[1vw] xl:bottom-[4vw] lg:bottom-[4vw]'>
                    We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                </div>
            </FadeUp>
        </div>
    )
}