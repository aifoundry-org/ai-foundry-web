import IMGBackground from '@/public/pngs/home/hero/background.png'
import SVGPaperError from '@/public/svgs/hero/PaperError'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeIn from '@/components/common/universal/FadeIn'


{/* <div className='hidden xs:flex xs:flex-col xs:w-full xs:h-full relative mb-[8vw] md:mb-[5vw] lg:mb-0 xl:mb-0'>
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
</div> */}

export default function Hero() {
    return (
<div className="h-screen w-full flex flex-col">

  <div className="bg-red-500 h-24 flex items-center justify-center sticky top-0">
    <p className="text-white">Header 6rem (siempre visible)</p>
  </div>

  <div className="bg-green-500 flex-1 overflow-auto">
    <div className="min-h-full flex items-center justify-center p-4">
      <p className="text-white">Contenido scrollable (adaptable)</p>
      

      <div className="h-[150vh]"></div>
    </div>
  </div>


  <div className="bg-blue-500 h-60 flex items-center justify-center sticky bottom-0">
    <p className="text-white">Footer 15rem (siempre visible)</p>
  </div>
</div>
    )
}