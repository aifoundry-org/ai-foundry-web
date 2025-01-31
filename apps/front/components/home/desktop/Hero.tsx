import IMGArrow from '@/public/pngs/home/hero/arrow.png';
import IMGErrors from '@/public/pngs/home/hero/errors.png';
import IMGJoinString from '@/public/pngs/home/hero/joinString.png';
import IMGTheNetworkString from '@/public/pngs/home/hero/theNetworkString.png';
import IMGPunchCard from '@/public/pngs/home/hero/punchCard.png';
import IMGPluses from '@/public/pngs/home/hero/pluses.png';
import IMGCircle from '@/public/pngs/home/hero/circle.png';
import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';

export default function Hero() {
  return (
    <div className='hidden xs:flex xs:flex-col xs:w-full xs:h-full relative mb-[8vw] md:mb-[5vw] lg:mb-0 xl:mb-0'>
      <FadeIn delay={0.75} className='w-[100vw] h-[41vw] relative'>
        <img className='absolute w-[1.115vw] right-[8vw] bottom-[0.8vw]' src={IMGJoinString.src} />
        <img className='absolute w-[0.905vw] right-[8.13vw] bottom-[10vw]' src={IMGTheNetworkString.src} />
        <img className='absolute w-[11.75vw] right-[15.8vw] top-[1.5vw]' src={IMGPunchCard.src} />
        <img className='absolute w-[7.1vw] right-[26vw] bottom-[7.5vw]' src={IMGArrow.src} />
        <img className='absolute w-[50.15vw] bottom-[14.5vw] left-[18.5vw]' src={IMGPluses.src} />
        <img className='absolute w-[40.417vw]' src={IMGCircle.src} />
      </FadeIn>
      <FadeUp
        className='absolute w-full top-[4vw]'
        delay={0.25}
        duration={0.75}
        additionalInitialParams={{ lineHeight: '12vw' }}
        additionalWhileInView={{ lineHeight: '9.935vw' }}>
        <p className='uppercase text-[13.475vw] text-center font-black'>
          An open AI
          <br />
          community
          <br />
          for all
        </p>
        <FadeUp delay={0.75}>
          <div className='relative font-normal font-host-grotesk text-center text-[1vw] leading-[1.5vw] mt-[4vh]'>
            We are a community of practitioners building an open-source,
            <br /> composable AI ecosystem. Our goal is to reduce the complexity of
            <br /> the AI industry. Join our thriving community and share, collaborate
            <br /> and innovate with us.
          </div>
        </FadeUp>
      </FadeUp>
      <FadeIn delay={0.75} className='absolute left-[61vw] top-[18vw] w-[17.365vw]'>
        <img src={IMGErrors.src} />
      </FadeIn>
    </div>
  );
}
