'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import FadeIn from '@/components/common/universal/FadeIn';
import IMGLogo from '@/public/imgs/footer/logo.webp'
import IMGErrors from '@/public/imgs/footer/errorsMobile.webp'
import IMGBucket from '@/public/imgs/footer/bucket.webp'
import IMGArrows from '@/public/imgs/footer/arrowsMobile.webp'
import IMGDots from '@/public/imgs/footer/dots.webp'
import SVGGithubIcon from '@/public/svgs/common/Github'
import SVGLinkedinIcon from '@/public/svgs/common/Linkedin'
import SVGYoutubeIcon from '@/public/svgs/common/Youtube'
import IMGGraffiti from '@/public/imgs/footer/graffiti.webp'
import IMGCode from '@/public/imgs/footer/code.webp'
import ImageWrapper from '../universal/ImageWrapper';

export default function Footer(){
    const pathname = usePathname();
    
    return (
        <footer className={`hidden sm:w-full sm:h-full ${pathname.includes('/blog/') ? 'sm:bg-peach' : 'sm:bg-none'}  sm:flex sm:flex-col sm:pt-[5vw] relative`}>
            {pathname == '/' && 
                <div className='absolute w-[43.5vw] top-[5vw] right-0'>
                    <ImageWrapper src={IMGCode.src} alt='Code' />
                </div>
            }
            <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw] bg-orange rounded-t-[1.39vw] z-10'>
                <FadeIn delay={0.5} className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <FadeIn delay={0.5}>
                        <p className='font-black text-sand text-[12.5vw] leading-[9.25vw] uppercase mb-[1.67vw]'>Your new<br/>community</p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <p className='font-black text-black text-[3.34vw] leading-[2.8vw] uppercase'>Thanks for joining this side</p>
                    </FadeIn>
                    <FadeIn className='absolute w-[20.91vw] top-[10.5vw] -left-[3vw]' delay={0.5}>
                        <ImageWrapper src={IMGErrors.src} alt='Errors' />
                    </FadeIn>
                    <FadeIn className='absolute w-[16.81vw] top-[5.8vw] left-[26.4vw]' delay={0.5}>
                        <ImageWrapper src={IMGArrows.src} alt='Arrows' />
                    </FadeIn>
                    <FadeIn className='absolute w-[15.42vw] right-0 top-0' delay={0.5}>
                        <ImageWrapper src={IMGLogo.src} alt='Logo' />
                    </FadeIn>
                    <div className='absolute w-[7.57vw] right-0 bottom-[2.5vw]'>
                        <ImageWrapper src={IMGDots.src} alt='Dots' />
                    </div>
                </FadeIn>
                <FadeIn className='absolute w-[17.22vw] top-[19vw] left-[45.5vw]' delay={0.5}>
                    <ImageWrapper src={IMGBucket.src} alt='Bucket' />
                </FadeIn>
                <div className='flex flex-row font-bold mt-[3.89vw] mb-[2.78vw] text-[1.395vw] leading-[1.395vw] uppercase justify-between'>
                    <FadeIn delay={0.5} className='flex flex-row gap-[3.34vw]'>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300' href='/#projects'>Projects</Link>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300' href='/#events'>Events</Link>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300' href='/#blog'>Blog</Link>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300' href='/#values'>Our Values</Link>
                    </FadeIn>
                    <FadeIn delay={0.5} className='flex flex-row gap-[3.34vw]'>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300 z-[1]' href='/terms-and-conditions#privacy-policy'>Privacy Policy</Link>
                        <Link className='relative after:bg-black after:absolute after:h-1 after:w-0 after:-bottom-[0.5vw] after:left-0 hover:after:w-full after:transition-all after:duration-300' href='/terms-and-conditions'>Terms Of Service</Link>
                    </FadeIn>
                </div>
                <div className='relative flex flex-row justify-between pb-[6.67vw]'>
                    <div className='flex flex-row gap-[2.78vw]'>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://github.com/aifoundry-org'>
                                <SVGGithubIcon className='w-[1.67vw] h-[1.67vw] github-icon' />
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.linkedin.com/company/aifoundry-org'>
                                <SVGLinkedinIcon className='w-[1.67vw] h-[1.67vw] linkedin-icon' />
                            </Link>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                                <SVGYoutubeIcon className='w-[1.67vw] h-[1.67vw] youtube-icon' />
                            </Link>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.5} className='text-end font-host-grotesk font-normal text-[0.84vw] leading-[1.25vw]'>
                        © 2025 AI Foundry. All rights reserved.
                    </FadeIn>
                    <FadeIn delay={0.5} className='mix-blend-plus-lighter absolute w-[54.725vw] bottom-0 z-0 left-[24vw]'>
                        <ImageWrapper src={IMGGraffiti.src} alt='Graffiti' />
                    </FadeIn>
                </div>
            </div>
        </footer>
    )
}
