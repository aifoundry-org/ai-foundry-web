import SVGIconPaperBackground from '@/public/svgs/PaperBackground'
import SVGIconPaperError from '@/public/svgs/PaperError'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-y-14 w-full h-full'>
        <div className='w-full h-full'>
          <SVGIconPaperBackground />
          <div className='absolute w-full h-full top-[13rem] md:top-[14.6rem] lg:top-[15.8rem]'>
            <p className='uppercase text-[15vw] lg:text-[15.35vw] leading-[0.75] text-center font-black'>
              An open AI<br/>community<br/>for all
            </p>
            <div className='relative left-[63vw] bottom-[19vw] w-[10vw] hidden xl:block lg:block'>
              <SVGIconPaperError />
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <p className='text-center text-[1.35vw] font-normal font-host-grotesk leading-[2.65vw]'>
            We are a community of practitioners building an open-source<br/>composable AI ecosystem. Our aim is to reduce the complexity of<br/>the AI industry. Join our thriving community and share, collaborate<br/>and innovate with us.
          </p>
        </div>
      </div>
    </main>
  );
}
