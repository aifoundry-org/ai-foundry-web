'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import FadeIn from '@/components/common/universal/FadeIn';
import IMGLogo from '@/public/imgs/footer/logoMobile.webp'
import IMGErrors from '@/public/imgs/footer/errorsMobile.webp'
import IMGBucket from '@/public/imgs/footer/bucketMobile.webp'
import IMGArrows from '@/public/imgs/footer/arrowsMobile.webp'
import IMGInstagramIcon from '@/public/imgs/footer/instagramIconMobile.webp'
import IMGLinkedinIcon from '@/public/imgs/footer/linkedinIconMobile.webp'
import IMGYoutubeIcon from '@/public/imgs/footer/youtubeIconMobile.webp'
import IMGGraffiti from '@/public/imgs/footer/graffitiMobile.webp'
import IMGCode from '@/public/imgs/footer/codeMobile.webp'
import ImageWrapper from '../universal/ImageWrapper';

export default function Footer(){
    const pathname = usePathname();

    return (
        <footer className={`sm:hidden flex flex-col ${pathname.includes('/blog/') && 'bg-peach'} relative`}>
            {pathname == '/' && <FadeIn className='absolute -top-[12.5vw] left-0' delay={0.5}>
                <ImageWrapper src={IMGCode.src} alt='Code' />
            </FadeIn>}
            <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw] bg-orange rounded-t-[5.335vw]'>
                <FadeIn className='absolute w-1/4 top-[49vw] right-0' delay={0.5}>
                    <ImageWrapper src={IMGBucket.src} alt='Bucket' />
                </FadeIn>
                <FadeIn delay={0.5} className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <FadeIn className='w-[33.1vw] mb-[6.4vw]' delay={0.5}>
                        <ImageWrapper src={IMGLogo.src} alt='Logo' />
                    </FadeIn>
                    <p className='font-black text-sand text-[19.2vw] leading-[14.15vw] uppercase mb-[4.275vw]'>Your new<br/>community</p>
                    <FadeIn delay={0.5}>
                        <p className='font-black text-black text-[10.675vw] leading-[8.8vw] uppercase'>Thanks for<br/>joining this side</p>
                    </FadeIn>
                    <FadeIn delay={0.5} className='absolute w-[33.95vw] top-[36vw] -left-[3vw]'>
                        <ImageWrapper src={IMGErrors.src} alt='Errors' />
                    </FadeIn>
                    <FadeIn delay={0.5} className='absolute w-[32.27vw] top-[27vw] left-[36vw]'>
                        <ImageWrapper src={IMGArrows.src} alt='Arrows' />
                    </FadeIn>
                </FadeIn>
                <FadeIn delay={0.5} className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[10vw] justify-between uppercase'>
                    <Link href='/#projects-mobile'>Projects</Link>
                    <Link href='/#events-mobile'>Events</Link>
                    <Link href='/#blog-mobile'>Blog</Link>
                    <Link href='/#values-mobile'>Our Values</Link>
                </FadeIn>
                <FadeIn delay={0.5} className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[6.4vw] mb-[10.675vw] justify-between uppercase'>
                    <Link href='/terms-and-conditions#privacy-policy-mobile'>Privacy Policy</Link>
                    <Link href='/terms-and-conditions'>Terms Of Service</Link>
                </FadeIn>
                <div className='relative flex flex-row justify-between pb-[21vw]'>
                    <div className='flex flex-row gap-[8.55vw]'>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                                <div className='w-[6.4vw] h-[6.4vw]'>
                                    <ImageWrapper src={IMGInstagramIcon.src} alt='Instagram icon' />
                                </div>
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.linkedin.com/company/aifoundry-org'>
                                <div className='w-[6.4vw] h-[6.4vw]'>
                                    <ImageWrapper src={IMGLinkedinIcon.src} alt='Linkedin icon' />
                                </div>
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                                <div className='w-[6.4vw] h-[6.4vw]'>
                                    <ImageWrapper src={IMGYoutubeIcon.src} alt='Youtube icon' />
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.5} className='flex flex-row text-end font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw]'>
                        © 2024 AI Foundry.<br/>
                        All rights reserved.
                    </FadeIn>
                    <FadeIn delay={0.5} className='mix-blend-plus-lighter absolute w-[83.2vw] bottom-0 left-[4.5vw]'>
                        <ImageWrapper src={IMGGraffiti.src} alt='Graffiti' />
                    </FadeIn>
                </div>
            </div>
        </footer>
    )
}