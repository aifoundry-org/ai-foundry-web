import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGError from '@/public/pngs/notFound/error.png'
import IMGGraffiti from '@/public/pngs/notFound/graffiti.png'
import IMGNumbers from '@/public/pngs/notFound/numbers.png'
import IMGPaper from '@/public/pngs/notFound/paper.png'
import IMGPluses from '@/public/pngs/notFound/pluses.png'
import IMGVertical404 from '@/public/pngs/notFound/vertical_404.png'
import IMGVerticalNotFound from '@/public/pngs/notFound/vertical_notFound.png'

import IMGErrorMobile from '@/public/pngs/notFound/errorMobile.png'
import IMGGraffitiMobile from '@/public/pngs/notFound/graffitiMobile.png'
import IMGNumbersMobile from '@/public/pngs/notFound/numbersMobile.png'
import IMGPaperMobile from '@/public/pngs/notFound/paperMobile.png'
import IMGPlusesMobile from '@/public/pngs/notFound/plusesMobile.png'

import Link from 'next/link'

export default function NotFoundPage() {
  return (
	<>
		<div className='hidden xs:flex xs:relative xs:w-full xs:h-full xs:flex-col'>
			<div className='flex relative flex-col justify-center text-center align-middle mx-auto mt-[13.9rem] gap-y-[1.6rem]'>
				<p className='font-dharma-gothic-e font-black text-[16.115vw] leading-[11.9vw]'>404</p>
				<p className='text-orange font-dharma-gothic-e font-black text-[12.5vw] leading-[9.24vw] uppercase'>page not found</p>
				<img className='absolute w-[19.375vw] -right-[4.935vw] bottom-[1.67vw]' src={IMGError.src} />
				<img className='absolute w-[13.89vw] right-[10.45vw] top-[5.975vw]' src={IMGGraffiti.src} />
				<img className='absolute w-[7.85vw] top-[8.405vw] left-[17.92vw]' src={IMGNumbers.src} />
				<img className='absolute w-[17.64vw] -left-[1.74vw] bottom-[1.4vw] -z-[1]' src={IMGPaper.src} />
				<img className='absolute w-[18.265vw] -left-[4.31vw] bottom-[4.38vw]' src={IMGPluses.src} />
				<img className='absolute w-[0.91vw] -right-[12vw] -top-[1vw]' src={IMGVerticalNotFound.src} />
				<img className='absolute w-[1.115vw] -left-[12.5vw] -bottom-[8vw]' src={IMGVertical404.src} />
			</div>
			<div className='flex relative flex-col justify-center text-center align-middle mt-[4rem] mx-auto'>
				<p className='font-host-grotesk w-fit font-normal text-[3vw] md:text-[3vw] lg:text-[1.67vw] xl:text-[1.67vw] 2xl:text-[1.67vw]'>We're sorry, something went wrong</p>
				<Button className='mx-auto mt-32' as={Link} href='/' variant='primary' content='Back to home' svg='scroll-right'/>
			</div>
		</div>
		<div className='xs:hidden flex relative w-full h-full flex-col'>
			<div className='flex relative flex-col justify-center text-center align-middle mx-auto mt-[6.9rem] gap-y-[0.3rem]'>
				<p className='font-dharma-gothic-e font-black text-[27.75vw] leading-[20.27vw]'>404</p>
				<p className='text-orange font-dharma-gothic-e font-black text-[23.47vw] leading-[17.35vw] uppercase'>page not found</p>
				<img className='absolute w-[40.8vw] left-[49vw] top-[44vw]' src={IMGErrorMobile.src} />
				<img className='absolute w-[33.4vw] right-[8.5vw] top-[5.5vw]' src={IMGGraffitiMobile.src} />
				<img className='absolute w-[18.15vw] top-[13vw] left-[29vw]' src={IMGNumbersMobile.src} />
				<img className='absolute w-[36.6vw] left-[14vw] -z-[1]' src={IMGPaperMobile.src} />
				<img className='absolute w-[36.8vw] left-[11vw] top-[34vw]' src={IMGPlusesMobile.src} />
			</div>
			<div className='flex relative flex-col justify-center text-center align-middle mt-[2.4rem] mx-auto'>
				<p className='font-host-grotesk w-fit font-normal text-[4.8vw]'>We're sorry,<br/>something went wrong</p>
				<Button className='mx-auto mt-[6rem]' as={Link} href='/' variant='primary' content='Back to home' svg='scroll-right'/>
			</div>
		</div>
	</>
  );
}
