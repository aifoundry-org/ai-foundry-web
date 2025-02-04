'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import IMGLogo from '@/public/pngs/footer/logo.png'
import IMGErrors from '@/public/pngs/footer/errorsMobile.png'
import IMGBucket from '@/public/pngs/footer/bucket.png'
import IMGArrows from '@/public/pngs/footer/arrowsMobile.png'
import IMGDots from '@/public/pngs/footer/dots.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import IMGGraffiti from '@/public/pngs/footer/graffiti.png'
import IMGErrorsCodes from '@/public/pngs/footer/errorCodes.png'

import FadeUp from '@/components/common/universal/FadeUp';
import FadeIn from '@/components/common/universal/FadeIn';

export default function Footer(){
    const [currPage, setCurrPage] = useState('');
    
    useEffect(() => {
        setCurrPage(window.location.pathname)    
    },[])
    
    return (
        <footer className='hidden sm:flex sm:flex-col sm:bg-orange sm:rounded-t-[1.39vw] sm:mt-[5vw] relative'>
            {currPage == '/' && <img className='absolute w-[58.27vw] -top-[3.5vw] right-0' src={IMGErrorsCodes.src} />}
            <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw]'>
                <FadeIn delay={0.5} className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <FadeIn delay={0.5}>
                        <p className='font-black text-sand text-[12.5vw] leading-[9.25vw] uppercase mb-[1.67vw]'>Your new<br/>community</p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <p className='font-black text-black text-[3.34vw] leading-[2.8vw] uppercase'>Thanks for joining this side</p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <img className='absolute w-[20.91vw] top-[10.5vw] -left-[3vw]' src={IMGErrors.src} />
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <img className='absolute w-[16.81vw] top-[5.8vw] left-[26.4vw]' src={IMGArrows.src} />
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <img className='absolute w-[15.42vw] right-0 top-0' src={IMGLogo.src} />
                    </FadeIn>
                    <img className='absolute w-[7.57vw] right-0 bottom-[2.5vw]' src={IMGDots.src} />
                </FadeIn>
                <FadeIn delay={0.5}>
                    <img className='absolute w-[17.22vw] top-[19vw] left-[45.5vw]' src={IMGBucket.src} />
                </FadeIn>
                <div className='flex flex-row font-bold mt-[3.89vw] mb-[2.78vw] text-[1.395vw] leading-[1.395vw] uppercase justify-between'>
                    <FadeIn delay={0.5} className='flex flex-row gap-[3.34vw]'>
                        <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300' href='/#projects'>Projects</a>
                        <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300' href='/#events'>Events</a>
                        {process.env.HIDE_SECTIONS === "false" && <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300' href='/#blog'>Blog</a>}
                        <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300' href='/#values'>Our Values</a>
                    </FadeIn>
                    <FadeIn delay={0.5} className='flex flex-row gap-[3.34vw]'>
                        <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300 z-[1]' href='/terms-and-conditions#privacy-policy'>Privacy Policy</a>
                        <a className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300' href='/terms-and-conditions'>Terms Of Service</a>
                    </FadeIn>
                </div>
                <div className='relative flex flex-row justify-between pb-[6.67vw]'>
                    <div className='flex flex-row gap-[2.78vw]'>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                                <img className='w-[1.67vw] h-[1.67vw] hover:mix-blend-soft-light hover:invert hover:duration-100' src={IMGInstagramIcon.src} />
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.linkedin.com/company/aifoundry-org'>
                                <img className='w-[1.67vw] h-[1.67vw] hover:mix-blend-soft-light hover:invert hover:duration-100' src={IMGLinkedinIcon.src} />
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                                <img className='w-[1.67vw] h-[1.67vw] hover:mix-blend-soft-light hover:invert hover:duration-100' src={IMGYoutubeIcon.src} />
                            </Link>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.5} className='text-end font-host-grotesk font-normal text-[0.84vw] leading-[1.25vw]'>
                        © 2024 AI Foundry. All rights reserved.
                    </FadeIn>
                    <FadeIn delay={0.5} className='mix-blend-plus-lighter absolute w-[54.725vw] bottom-0 z-0 left-[24vw]'>
                        <img src={IMGGraffiti.src} />
                    </FadeIn>
                </div>
            </div>
        </footer>
    )
}