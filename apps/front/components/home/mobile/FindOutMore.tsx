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
import IMGSusanAvatar from '@/public/imgs/home/findOutMore/susanAvatar.webp'
import IMGMaraAvatar from '@/public/imgs/home/findOutMore/maraAvatar.webp'

import SVGArrowRight from '@/public/svgs/findOutMore/ArrowRight'
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
                    <div className='absolute w-[34vw] left-[21.5vw] top-[37.5vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreTopGraffiti.src} alt='' />
                    </div>
                    <div className='absolute w-[44.3vw] left-[52vw] top-[65vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreBottomGraffiti.src} alt='' />
                    </div>
                    <div className='relative w-[9.6vw] left-[34.5vw] top-[32vw]'>
                        <ImageWrapper src={IMGIcons.src} alt='' />
                    </div>
                </div>
                <FadeUp className='absolute w-full h-full -top-[12vw]'>
                    <p className='relative uppercase left-1/2 -translate-x-1/2 top-[40.5vw] text-center font-dharma-gothic-e font-black text-[23.5vw] leading-[17.4vw] text-white'>
                        Find<br/>out<br/>more
                    </p> 
                    <div className='relative w-[3vw] left-[72vw] top-[26vw]'>
                        <ImageWrapper src={IMGStar.src} alt='' />
                    </div>
                    <div className='relative w-[32.3vw] left-[26vw] -top-[8vw]'>
                        <ImageWrapper src={IMGErrors.src} alt='' />
                    </div>
                    <div className='relative w-[3.75vw] left-[27vw] -top-[22vw]'>
                        <ImageWrapper src={IMGCursorDown.src} alt='' />
                    </div>
                    <div className='relative w-[3.75vw] left-[61vw] top-[2vw]'>
                        <ImageWrapper src={IMGCursorUp.src} alt='' />
                    </div>
                </FadeUp>
                <FadeIn delay={0.5} className='absolute bottom-[15vw] w-full'>
                    <div className='relative w-full flex justify-center'>
                        <Button target='_blank' as={Link} href='https://discord.com/invite/WNKvkefkUs' svg='discord' variant='secondary' content='Join our discord' />
                    </div>
                </FadeIn>
                <FadeDown delay={0.5} className='absolute bg-black text-sand p-[1.5vw] top-[46.5vw] left-[9.5vw] rounded-lg'>
                    <div className='relative font-helvetica px-[2vw] pt-[4.65vw] pb-[1vw]'>
                        <div className='absolute -top-[4vw] left-0 w-[6.35vw] h-[6.35vw]'>
                            <ImageWrapper src={IMGFoundryBadge.src} alt='' />
                        </div>
                        <div className='text-[2.675vw] mb-[2vw] font-bold'>
                            AiFoundry.org
                            <SVGArrowDown className='inline-block w-[2vw] ml-[2.5vw]' />
                        </div>
                        <div className='flex flex-col gap-[1.2vw]'>
                            <div className='uppercase text-[1.65vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[2vw] mr-[1vw]' />
                                Projects
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # llamagator
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # project-prompt
                            </div>
                            <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                                # open-llms
                            </div>
                        </div>
                    </div>
                </FadeDown>
                <FadeDown delay={0.5} className='absolute flex flex-row items-center w-fit h-fit p-[1vw] rounded-full bg-black top-[33vw] right-[6vw]'>
                    <div className='flex w-[6.5vw]'>
                        <ImageWrapper src={IMGSusanAvatar.src} alt='Avatar susan' />
                    </div>
                    <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[2.75vw] text-sand'>
                        Welcome Susan!
                    </div>
                </FadeDown>
                <FadeDown delay={0.5} className='absolute flex flex-row items-center w-fit h-fit p-[1vw] rounded-full bg-black top-[43vw] right-[6vw]'>
                    <div className='flex w-[6.5vw]'>
                        <ImageWrapper src={IMGMaraAvatar.src} alt="Avatar mara" />
                    </div>
                    <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[2.75vw] text-sand'>
                        Glad to join this community! 
                    </div>
                </FadeDown>
                <FadeUp delay={0.5} className='absolute w-fit h-fit bg-black text-sand p-[1.5vw] bottom-[36vw] right-[17vw] rounded-lg'>
                    <div className='relative font-helvetica p-[1vw]'>
                        <div className='flex flex-col gap-[2vw] font-light'>
                            <div className='ml-[0.55vw] text-[2.1vw] border-b-[0.5px] border-sand p-[1vw]'>
                                <SVGArrowRight className='inline-block w-[1.7vw]' /> Mara joined the party
                            </div>
                            <div className='ml-[0.55vw] text-[2.1vw] border-b-[0.5px] border-sand p-[1vw]'>
                                <SVGArrowRight className='inline-block w-[1.7vw]' /> Everyone welcome Nina
                            </div>
                            <div className='ml-[0.55vw] text-[2.1vw] p-[1vw]'>
                                <SVGArrowRight className='inline-block w-[1.7vw]' /> Glad you&apos;re here, Tuana!
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </LazyMotion>
    )
}