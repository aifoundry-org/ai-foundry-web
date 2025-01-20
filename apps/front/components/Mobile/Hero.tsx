'use client'

import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import SVGIconHamburger from '@/public/svgs/common/Hamburger';
import AIFoundryLogoTop from '@/public/pngs/common/AIFoundryLogoTopMobile.png';
import AIFoundryLogoTopSticky from '@/public/pngs/common/AIFoundryLogoTopStickyMobile.png';
import SVGPaperBackgroundMobile from '@/public/svgs/hero/PaperBackgroundMobile';

export default function Hero() {
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
                                    src={AIFoundryLogoTop.src}
                                    className="absolute w-[40.27vw]"
                                    animate={{ opacity: isSticky ? 0 : 1 }}
                                    initial={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                                <motion.img
                                    src={AIFoundryLogoTopSticky.src}
                                    className="absolute w-[14.15vw] ml-[3.5vw]"
                                    animate={{ opacity: isSticky ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                            </div>
                            <div className='flex basis-[50%] w-full justify-end'>
                                <SVGIconHamburger />
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
        </div>
    )
}