import IMGPaperBackground from '@/public/pngs/hero/paperBackground.png'
import SVGPaperError from '@/public/svgs/hero/PaperError'
import IMGPaperGraffiti from '@/public/pngs/hero/paperGraffiti.png'

export default function Hero() {
    return (
        <div className='hidden xs:flex xs:flex-col xs:gap-y-[6vw] xs:w-full xs:h-full'>
            <div className='hero relative w-full h-full'>
                <img src={IMGPaperBackground.src} width="100%" height="100%" />
                <p className='absolute uppercase text-[15vw] lg:text-[16.15vw] leading-[0.75] text-center font-black -bottom-[1.1vw] left-1/2 -translate-x-1/2'>
                    An open AI<br/>community<br/>for all
                </p>
                <div className='absolute left-[calc(50%+12.5vw)] top-[calc(50%+2.5vw)] w-[21.9vw]'>
                    <SVGPaperError />
                </div>
                <div className='absolute w-[10vw] right-[calc(25%-6.5vw)] top-[calc(25%+2.7vw)] lg:right-[calc(25%-9vw)] lg:top-[calc(25%+0.4vw)] lg:w-[11vw] mix-blend-multiply'>
                    <img src={IMGPaperGraffiti.src} width="100%" height="100%" />
                </div>
            </div>
            <div className='w-full h-full'>
                <p className='xl:w-[62rem] lg:w-1/2 md:w-1/2 xs:w-3/4 mx-auto font-normal font-host-grotesk text-center xs:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2rem] px-[2rem] lg:px-0'>
                    We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                </p>
            </div>
        </div>
    )
}