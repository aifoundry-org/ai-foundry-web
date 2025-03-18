import Link from 'next/link';

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGBackground from '@/public/imgs/home/findOutMore/background.webp';
import IMGSusanAvatar from '@/public/imgs/home/findOutMore/susanAvatar.webp'
import IMGMaraAvatar from '@/public/imgs/home/findOutMore/maraAvatar.webp'
import IMGErrors from '@/public/imgs/home/findOutMore/errors.webp'
import IMGFoundryBadge from '@/public/imgs/home/findOutMore/badge.webp'
import IMGCode from '@/public/imgs/home/findOutMore/code.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUp.webp'
import IMGCursorDown from '@/public/imgs/home/findOutMore/cursorDown.webp'

import SVGArrowDown from '@/public/svgs/findOutMore/ArrowDown'
import SVGArrowRight from '@/public/svgs/findOutMore/ArrowRight'
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
                            AiFoundry.org
                            <SVGArrowDown className='inline-block w-[0.85vw] ml-[1.4vw]' />
                        </div>
                        <div className='flex flex-col gap-[0.4vw]'>
                            <div className='uppercase flex align-middle text-[0.91vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[0.7vw] mr-[0.5vw]' />
                                Projects
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # llamagator
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.15vw]'>
                                # project-prompt
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
                <FadeDown delay={0.5} className='absolute flex flex-row items-center w-fit h-[3.65vw] p-[0.5vw] rounded-full bg-black top-[14.3vw] right-[25.2vw]'>
                    <div className='flex w-[3.3vw]'>
                        <ImageWrapper src={IMGSusanAvatar.src} alt='Avatar susan' />
                    </div>
                    <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[1.15vw] text-sand'>
                        Welcome Susan!
                    </div>
                </FadeDown>
                <FadeDown delay={0.5} className='absolute flex flex-row items-center w-fit h-[3.65vw] p-[0.5vw] rounded-full bg-black top-[18.8vw] right-[25.2vw]'>
                    <div className='flex w-[3.3vw]'>
                        <ImageWrapper src={IMGMaraAvatar.src} alt='Avatar mara' />
                    </div>
                    <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[1.15vw] text-sand'>
                        Glad to join this community! 
                    </div>
                </FadeDown>
                <FadeUp delay={0.5} className='absolute w-fit h-fit bg-black text-sand px-[0.5vw] py-[0.5vw] bottom-[9.8vw] right-[11.2vw] rounded-lg'>
                    <div className='relative font-helvetica'>
                        <div className='flex flex-col font-normal items-middle'>
                            <div className='flex text-[1.12vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] pb-[0.5vw] pr-[0.5vw]'>
                                <SVGArrowRight className='inline-block w-[0.85vw]' /> Mara joined the party
                            </div>
                            <div className='flex text-[1.12vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                <SVGArrowRight className='inline-block w-[0.85vw]' /> Everyone welcome Nina
                            </div>
                            <div className='flex text-[1.12vw] gap-x-[0.7vw] m-[1vw] pr-[0.5vw] mt-0'>
                                <SVGArrowRight className='inline-block w-[0.85vw]' /> Glad you&apos;re here, Tuana!
                            </div>
                        </div>
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
