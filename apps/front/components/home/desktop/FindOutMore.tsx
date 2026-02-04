import Link from 'next/link';

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGBackground from '@/public/imgs/home/findOutMore/background.webp';
import IMGErrors from '@/public/imgs/home/findOutMore/errors.webp'
import IMGFoundryBadge from '@/public/imgs/home/findOutMore/badge.webp'
import IMGCode from '@/public/imgs/home/findOutMore/code.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUp.webp'
import IMGCursorDown from '@/public/imgs/home/findOutMore/cursorDown.webp'

import SVGArrowDown from '@/public/svgs/findOutMore/ArrowDown'
import SVGProjectArrowDown from '@/public/svgs/findOutMore/ProjectArrowDown'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function FindOutMore() {
    return (
        <div className='hidden xs:flex xs:flex-col xs:relative xs:w-full xs:h-full xs:pt-[4.95vw]'>
            <LazyMotion>
                <div className='w-full h-full'>
                    <ImageWrapper src={IMGBackground.src} alt="Find out more background" />
                </div>
                <div className='absolute w-[29.1vw] top-[1.5vw] right-0'>
                    <ImageWrapper src={IMGCode.src} alt='Code' />
                </div>
                <FadeUp className='absolute text-sand font-dharma-gothic-e uppercase top-[15.5vw] left-[7.6vw] text-[15vw] font-black'>
                    Find
                    <div className='relative w-[21vw] -left-[2.3vw] bottom-[12.8vw]'>
                        <ImageWrapper src={IMGErrors.src} alt='Errors' />
                    </div>
                    <div className='relative w-[1.95vw] left-[17vw] bottom-[10.7vw]'>
                        <ImageWrapper src={IMGCursorUp.src} alt='Cursor up' />
                    </div>
                </FadeUp>
                <FadeDown delay={0.5} className='absolute w-fit h-fit bg-black text-sand p-[1.3vw] top-[15.5vw] left-[30vw] rounded-lg'>
                    <div className='relative font-helvetica px-[0.5vw] pt-[2vw] pb-[0.5vw]'>
                        <div className='absolute -top-[2.8vw] left-0 w-[3.4vw] h-[3.4vw]'>
                            <ImageWrapper src={IMGFoundryBadge.src} alt='AIFoundry badge' />
                        </div>
                        <div className='text-[1.48vw] mb-[1vw] font-bold'>
                            AIFoundry.org
                            <SVGArrowDown className='inline-block w-[0.85vw] ml-[1.4vw]' />
                        </div>
                        <div className='flex flex-col gap-[0.4vw]'>
                            <div className='uppercase flex align-middle text-[0.91vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[0.7vw] mr-[0.5vw]' />
                                Discussions
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # et-platform
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # quantization
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # compilers
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # open-llms
                            </div>
                        </div>
                    </div>
                </FadeDown>
                <FadeUp className='absolute text-sand font-dharma-gothic-e uppercase top-[15.5vw] right-[7.6vw] text-[15vw] font-black'>
                    Out more
                    <div className='relative w-[1.95vw] left-[35.2vw] bottom-[18.2vw]'>
                        <ImageWrapper src={IMGCursorDown.src} alt='Cursor down' />
                    </div>
                </FadeUp>
                <FadeUp delay={0.5} className='absolute bottom-[8vw] w-full'>
                    <div className='relative w-full flex justify-center'>
                        <Button target='_blank' as={Link} href='https://discord.com/invite/WNKvkefkUs' svg='discord' variant='secondary' content='Join our discord' />
                    </div>
                </FadeUp>
            </LazyMotion>
        </div>
    )
}
