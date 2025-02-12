import IMGError from '@/public/pngs/notFound/error.png'
import IMGGraffiti from '@/public/pngs/notFound/graffiti.png'
import IMGNumbers from '@/public/pngs/notFound/numbers.png'
import IMGPaper from '@/public/pngs/notFound/paper.png'
import IMGPluses from '@/public/pngs/notFound/pluses.png'
import IMGVertical404 from '@/public/pngs/notFound/vertical_404.png'
import IMGVerticalNotFound from '@/public/pngs/notFound/vertical_notFound.png'

export default function NotFoundPage() {
  return (
    <div className='flex relative w-full h-full flex-col'>
        <div className='flex relative flex-col justify-center text-center align-middle mx-auto mt-[13.9rem] gap-y-[1.6rem]'>
			<p className='font-dharma-gothic-e font-black text-[16.115vw] leading-[11.9vw]'>404</p>
			<p className='text-orange font-dharma-gothic-e font-black text-[12.5vw] leading-[9.24vw] uppercase'>page not found</p>
			<img className='w-[19.375vw] absolute -right-[4.935vw] bottom-[1.67vw]' src={IMGError.src} />
			<img className='w-[13.89vw] absolute right-[10.45vw] top-[5.975vw]' src={IMGGraffiti.src} />
			<img className='w-[7.85vw] absolute top-[8.405vw] left-[17.92vw]' src={IMGNumbers.src} />
			<img className='w-[17.64vw] absolute -left-[1.74vw] bottom-[1.4vw] -z-[1]' src={IMGPaper.src} />
			<img className='w-[18.265vw] absolute -left-[4.31vw] bottom-[4.38vw]' src={IMGPluses.src} />
			<img className='w-[0.91vw] absolute -right-[12vw] -top-[1vw]' src={IMGVerticalNotFound.src} />
		</div>
		<div className='flex relative flex-col justify-center text-center align-middle mt-[4rem] mx-auto'>
			<p className='font-host-grotesk font-normal text-[3vw] md:text-[3vw] lg:text-[1.67vw] xl:text-[1.67vw] 2xl:text-[1.67vw]'>We're sorry, something went wrong</p>
			<img className='w-[1.115vw] absolute -left-[29vw] top-0' src={IMGVertical404.src} />
		</div>
    </div>
  );
}
