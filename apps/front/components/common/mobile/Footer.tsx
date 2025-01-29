'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import IMGLogo from '@/public/pngs/footer/logoMobile.png'
import IMGErrors from '@/public/pngs/footer/errorsMobile.png'
import IMGBucket from '@/public/pngs/footer/bucketMobile.png'
import IMGArrows from '@/public/pngs/footer/arrowsMobile.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import IMGGraffiti from '@/public/pngs/footer/graffitiMobile.png'
import IMGErrorsCodes from '@/public/pngs/footer/errorCodesMobile.png'

import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';

export default function Footer(){
    const [currPage, setCurrPage] = useState('');

    useEffect(() => {
        setCurrPage(window.location.pathname)    
    },[])

    return (
        <FadeUp>
            <footer className='sm:hidden flex flex-col bg-orange rounded-t-[5.335vw] relative'>
                {currPage == '/' && <FadeIn delay={1.5}>
                    <img className='absolute -top-[12.5vw] left-0' src={IMGErrorsCodes.src} />
                </FadeIn>}
                <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw]'>
                    <FadeIn delay={1.5}>
                        <img className='absolute w-1/4 top-[49vw] right-0' src={IMGBucket.src} />
                    </FadeIn>
                    <FadeIn delay={1.5} className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                        <FadeIn delay={1.5}>
                            <img className='w-[33.1vw] mb-[6.4vw]' src={IMGLogo.src} />
                        </FadeIn>
                        <p className='font-black text-sand text-[19.2vw] leading-[14.15vw] uppercase mb-[4.275vw]'>Your new<br/>community</p>
                        <FadeIn delay={1.6}>
                            <p className='font-black text-black text-[10.675vw] leading-[8.8vw] uppercase'>Thanks for<br/>joining this side</p>
                        </FadeIn>
                        <FadeIn delay={1.8} className='absolute w-[33.95vw] top-[36vw] -left-[3vw]'>
                            <img src={IMGErrors.src} />
                        </FadeIn>
                        <FadeIn delay={2} className='absolute w-[32.27vw] top-[27vw] left-[36vw]'>
                            <img src={IMGArrows.src} />
                        </FadeIn>
                    </FadeIn>
                    <FadeIn delay={1.5} className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[10vw] justify-between uppercase'>
                        <a href='/#projects-mobile'>Projects</a>
                        <a href='/#events-mobile'>Events</a>
                        <a href='/#blog-mobile'>Blog</a>
                        <a href='/#values-mobile'>Our Values</a>
                    </FadeIn>
                    <FadeIn delay={1.6} className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[6.4vw] mb-[10.675vw] justify-between uppercase'>
                        <a href='/terms-and-conditions#privacy-policy-mobile'>Privacy Policy</a>
                        <a href='/terms-and-conditions'>Terms Of Service</a>
                    </FadeIn>
                    <div className='relative flex flex-row justify-between pb-[21vw]'>
                        <div className='flex flex-row gap-[8.55vw]'>
                            <FadeIn delay={1}>
                                <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGInstagramIcon.src} />
                                </Link>
                            </FadeIn>
                            <FadeIn delay={1.2}>
                                <Link target='_blank' href='https://www.linkedin.com/company/aifoundry-org'>
                                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGLinkedinIcon.src} />
                                </Link>
                            </FadeIn>
                            <FadeIn delay={1.5}>
                                <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGYoutubeIcon.src} />
                                </Link>
                            </FadeIn>
                        </div>
                        <FadeIn delay={1.5} className='flex flex-row text-end font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw]'>
                            © 2024 AI Foundry.<br/>
                            All rights reserved.
                        </FadeIn>
                        <FadeIn delay={1.5} className='mix-blend-plus-lighter absolute w-[83.2vw] bottom-0 left-[4.5vw]'>
                            <img src={IMGGraffiti.src} />
                        </FadeIn>
                    </div>
                </div>
            </footer>
        </FadeUp>
    )
}