import SVGIconPaperBackground from '@/public/svgs/PaperBackground'
import SVGIconPaperError from '@/public/svgs/PaperError'
import SVGIconPaperGraffiti from '@/public/svgs/PaperGraffiti'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-y-[6vw] w-full h-full'>
        <div className='relative w-full h-full'>
          <SVGIconPaperBackground />
          <p className='absolute uppercase text-[15vw] lg:text-[15.35vw] leading-[0.75] text-center font-black -bottom-[1.1vw] left-1/2 -translate-x-1/2'>
            An open AI<br/>community<br/>for all
          </p>
          <div className='absolute left-[calc(50%+12.5vw)] top-[calc(50%+2.5vw)] w-[21.9vw]'>
            <SVGIconPaperError />
          </div>
          <div className='absolute right-[calc(25%-7.7vw)] top-[calc(25%+1.6vw)] w-[11vw]'>
            <SVGIconPaperGraffiti />
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
