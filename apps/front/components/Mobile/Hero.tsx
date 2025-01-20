'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from "motion/react"
import Button from '@/libs/litebox-lib/ui/Button/Button';
import SVGIconHamburger from '@/public/svgs/common/Hamburger';
import IMGAIFoundryLogoTop from '@/public/pngs/common/AIFoundryLogoTopMobile.png';
import IMGAIFoundryLogoTopSticky from '@/public/pngs/common/AIFoundryLogoTopStickyMobile.png';
import SVGPaperBackgroundMobile from '@/public/svgs/hero/PaperBackgroundMobile';

import IMGAIFoundyLogoSideMenuMobile from '@/public/pngs/sideMenu/AIFoundryLogoMobile.png'
import IMGCloseButton from '@/public/pngs/sideMenu/closeButton.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'

export default function Hero() {
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    const checkIfSticky = () => {
        setIsSticky(window.scrollY > 93);
    }

    useEffect(() => {
        checkIfSticky();
        window.addEventListener('scroll', checkIfSticky);
        return () => {
            window.removeEventListener('scroll', checkIfSticky);
        };
    },[])
    
    return (
        <div className='xs:hidden block relative bg-black'>
            <div className='relative flex flex-col w-full bg-sand rounded-t-lg'>
                <div className='relative w-full h-[95.5vw] flex flex-col gap-y-[6vw]'>
                    <div className='absolute w-full'>
                        <SVGPaperBackgroundMobile />
                    </div>
                    <div className='flex flex-row w-full py-[4vw] my-[7vw] bg-none'>
                        <motion.nav
                            className={`flex flex-row items-center bg-sand ${
                                isSticky
                                ? 'fixed z-20 top-0 px-[2.78vw] py-[7vw] border-2 border-black'
                                : 'relative px-[2.78vw] mx-auto'
                            }`}
                            style={{
                                ...(isSticky && {
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }),
                            }}
                            initial={{ width: '87.2vw' }}
                            animate={{ width: isSticky ? '100vw' : '87.2vw' }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            >
                            <div className='flex basis-[50%] w-full mx-auto items-center justify-start'>
                                <motion.img
                                    src={IMGAIFoundryLogoTop.src}
                                    className="absolute w-[40.27vw]"
                                    animate={{ opacity: isSticky ? 0 : 1 }}
                                    initial={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                                <motion.img
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                    src={IMGAIFoundryLogoTopSticky.src}
                                    className="absolute w-[14.15vw] ml-[2vw]"
                                    animate={{ opacity: isSticky ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                            </div>
                            <div className='flex basis-[50%] w-full justify-end'>
                                <SVGIconHamburger onClick={() => setShowMenu(true)} />
                            </div>
                        </motion.nav>
                    </div>
                    <div className='absolute w-full top-[36vw]'>
                        <p className='uppercase text-[23.5vw] leading-[17.4vw] text-center font-black'>
                            An open AI<br/>community<br/>for all
                        </p>
                    </div>
                </div>
                <div className='relative w-full'>
                    <p className='text-center text-[1.6rem] px-[2.5rem] font-normal font-host-grotesk'>
                        We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                    </p>
                </div>
            </div>
            <motion.div 
                className='fixed w-full h-fit top-0 bg-orange z-20'
                initial={{left: '100%'}}
                animate={{left: showMenu ? '0%' : '100%'}}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <div className='flex flex-col p-[6vw]'>
                    <div className='flex flex-row w-full items-center justify-between'>
                        <div className='flex justify-start'>
                            <img onClick={() => {
                                setShowMenu(false);
                                window.scrollTo(0, 0);
                            }} className='w-[40.27vw]' src={IMGAIFoundyLogoSideMenuMobile.src} />
                        </div>
                        <div className='flex justify-end'>
                            <img onClick={() => setShowMenu(false)} className='w-[6.4vw]' src={IMGCloseButton.src} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full my-[10.667vw] font-dharma-gothic-e font-black text-[10.667vw] leading-[8.8vw] gap-[8.8vw]">
                        <Link className="uppercase" onClick={() => setShowMenu(false)} href="#projects-mobile">
                            Projects
                        </Link>
                        <Link className="uppercase" onClick={() => setShowMenu(false)} href="#events-mobile">
                            Events
                        </Link>
                        <Link className="uppercase" onClick={() => setShowMenu(false)} href="#blog-mobile">
                            Blog
                        </Link>
                        <Link className="uppercase" onClick={() => setShowMenu(false)} href="#values-mobile">
                            Our values
                        </Link>
                    </div>
                    <div className="flex flex-col w-full mb-[10.667vw] font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] gap-[4.8vw]">
                        <Link className="uppercase" href="#projects-mobile">
                            Privacy policy
                        </Link>
                        <Link className="uppercase" href="#events-mobile">
                            Terms of service
                        </Link>
                    </div>
                    <div className='flex w-full justify-start'>
                        <Button variant='primary' content='Join our discord' svg='discord' />
                    </div>
                    <div className='flex flex-row gap-[8.55vw] mt-[12.27vw]'>
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGInstagramIcon.src} />
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGLinkedinIcon.src} />
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGYoutubeIcon.src} />
                    </div>
                    <div className='font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw] mt-[4.8vw]'>
                        © 2024 AI Foundry. All rights reserved.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}