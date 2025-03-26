import IMGArrow from '@/public/imgs/home/hero/arrow.webp';
import IMGErrors from '@/public/imgs/home/hero/errors.webp';
import IMGJoinString from '@/public/imgs/home/hero/joinString.webp';
import IMGTheNetworkString from '@/public/imgs/home/hero/theNetworkString.webp';
import IMGPunchCard from '@/public/imgs/home/hero/punchCard.webp';
import IMGPluses from '@/public/imgs/home/hero/pluses.webp';
import IMGCircle from '@/public/imgs/home/hero/circle.webp';
import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function Hero() {
  return (
    <div className='hidden xs:flex xs:flex-col xs:w-full xs:h-full relative mb-[8vw] md:mb-[5vw] lg:mb-0 xl:mb-0'>
      <FadeIn delay={0.75} className='w-[100vw] h-[41vw] relative'>
        <div className='absolute w-[1.115vw] right-[8vw] bottom-[0.8vw]'>
          <ImageWrapper src={IMGJoinString.src} alt='Join string'/>
        </div>
        <div className='absolute w-[0.905vw] right-[8.13vw] bottom-[10vw]'>
          <ImageWrapper src={IMGTheNetworkString.src} alt='The network string'/>
        </div>
        <div className='absolute w-[11.75vw] right-[15.8vw] top-[1.5vw]'>
          <ImageWrapper src={IMGPunchCard.src} alt='Punch card'/>
        </div>
        <div className='absolute w-[7.1vw] right-[26vw] bottom-[7.5vw]'>
          <ImageWrapper src={IMGArrow.src} alt='Arrow'/>
        </div>
        <div className='absolute w-[50.15vw] bottom-[14.5vw] left-[18.5vw]'>
          <ImageWrapper src={IMGPluses.src} alt='Pluses'/>
        </div>
        <div className='absolute w-[40.417vw]'>
          <ImageWrapper src={IMGCircle.src} alt='Circle'/>
        </div>
      </FadeIn>
      <FadeUp
        className='absolute w-full top-[4vw]'
        delay={0.25}
        duration={0.75}
        additionalInitialParams={{ lineHeight: '12vw' }}
        additionalWhileInView={{ lineHeight: '9.935vw' }}>
        <h1 className='uppercase text-[13.475vw] text-center font-black'>
          An open AI
          <br />
          community
          <br />
          for all
        </h1>
        <FadeUp delay={0.75}>
          <h2 className='relative font-normal font-host-grotesk text-center text-[1vw] leading-[1.5vw] mt-[4vh] normal-case'>
            We are a community of practitioners building an open-source,
            <br /> composable AI ecosystem. Our goal is to reduce the complexity of
            <br /> the AI industry. Join our thriving community and share, collaborate
            <br /> and innovate with us.
          </h2>
        </FadeUp>
      </FadeUp>
      <FadeIn delay={0.75} className='absolute left-[61vw] top-[18vw] w-[17.365vw]'>
        <ImageWrapper src={IMGErrors.src} alt='Errors' />
      </FadeIn>
    </div>
  );
}
