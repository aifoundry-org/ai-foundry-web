import Link from 'next/link'

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import FadeIn from '@/components/common/universal/FadeIn'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGFindOutMoreBackground from '@/public/imgs/home/findOutMore/backgroundMobile.webp'
import IMGCode from '@/public/imgs/home/findOutMore/codeMobile.webp'
import IMGFindOutMoreTopGraffiti from '@/public/imgs/home/findOutMore/topGraffitiMobile.webp'
import IMGFindOutMoreBottomGraffiti from '@/public/imgs/home/findOutMore/bottomGraffitiMobile.webp'
import IMGIcons from '@/public/imgs/home/findOutMore/iconsMobile.webp'
import IMGErrors from '@/public/imgs/home/findOutMore/errorsMobile.webp'
import IMGStar from '@/public/imgs/home/findOutMore/starMobile.webp'
import IMGCursorDown from '@/public/imgs/home/findOutMore/cursorDownMobile.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUpMobile.webp'
import IMGFoundryBadge from '@/public/imgs/home/findOutMore/badgeMobile.webp'
import SVGArrowDown from '@/public/svgs/findOutMore/ArrowDown'
import SVGProjectArrowDown from '@/public/svgs/findOutMore/ProjectArrowDown'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function FindOutMore() {
    return (
        <LazyMotion>
            <div className='xs:hidden flex flex-col mt-[8vw] relative w-full h-[131.75vw]'>
                <div className='absolute left-0 top-[8.2vw] w-full'>
                    <ImageWrapper src={IMGFindOutMoreBackground.src} alt='' />
                </div>
                <div className='absolute w-[61.1vw] right-0 top-0'>
                    <ImageWrapper src={IMGCode.src} alt='' />
                </div>
                <div className='relative w-full h-full -top-[9vw]'>
                    <div className='absolute w-[34vw] left-[20vw] top-[37.5vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreTopGraffiti.src} alt='' />
                    </div>
                    <div className='absolute w-[44.3vw] left-[30vw] top-[85vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreBottomGraffiti.src} alt='' />
                    </div>
                    <div className='relative w-[9.6vw] left-[10vw] top-[32vw]'>
                        <ImageWrapper src={IMGIcons.src} alt='' />
                    </div>
                </div>
                <FadeUp className='absolute w-full h-full -top-[12vw]'>
                    <p className='relative uppercase w-2/3 left-2/3 -translate-x-1/2 top-[50vw] text-center font-dharma-gothic-e font-black text-[23.5vw] leading-[17.4vw] text-white'>
                        Find<br/>out<br/>more
                    </p> 
                    <div className='relative w-[3vw] left-[87vw] top-[55vw]'>
                        <ImageWrapper src={IMGStar.src} alt='' />
                    </div>
                    <div className='relative w-[32.3vw] left-[10vw] top-[38vw]'>
                        <ImageWrapper src={IMGErrors.src} alt='' />
                    </div>
                    <div className='relative w-[3.75vw] left-[49vw] -top-[13vw]'>
                        <ImageWrapper src={IMGCursorDown.src} alt='' />
                    </div>
                    <div className='relative w-[3.75vw] left-[82vw] top-[33vw]'>
                        <ImageWrapper src={IMGCursorUp.src} alt='' />
                    </div>
                </FadeUp>
                <FadeIn delay={0.5} className='absolute bottom-[15vw] w-full'>
                    <div className='relative w-full flex justify-center'>
                        <Button target='_blank' as={Link} href='https://discord.com/invite/WNKvkefkUs' svg='discord' variant='secondary' content='Join our discord' />
                    </div>
                </FadeIn>
                <FadeDown delay={0.5} className='absolute bg-black text-sand p-[1.5vw] top-[40vw] left-[9.5vw] rounded-lg'>
                    <div className='relative font-helvetica px-[2vw] pt-[4.65vw] pb-[1vw]'>
                        <div className='absolute -top-[4vw] left-0 w-[6.35vw] h-[6.35vw]'>
                            <ImageWrapper src={IMGFoundryBadge.src} alt='' />
                        </div>
                        <div className='text-[2.675vw] mb-[2vw] font-bold'>
                            AIFoundry.org
                            <SVGArrowDown className='inline-block w-[2vw] ml-[2.5vw]' />
                        </div>
                        <div className='flex flex-col gap-[1.2vw]'>
                            <div className='uppercase text-[1.65vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[2vw] mr-[1vw]' />
                                Discussions
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # et-platform
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # quantization
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # compilers
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # open-llms
                            </div>
                        </div>
                    </div>
                </FadeDown>
            </div>
        </LazyMotion>
    )
}
