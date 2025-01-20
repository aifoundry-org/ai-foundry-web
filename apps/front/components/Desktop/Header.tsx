'use client';

import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import Button from '@/litebox-lib/ui/Button/Button';
import AIFoundryLogoTop from '@/public/pngs/common/AIFoundryLogoTop.png';
import AIFoundryLogoTopSticky from '@/public/pngs/common/AIFoundryLogoTopSticky.png';
import IMGHeaderIconArrowUpRight from '@/public/pngs/common/HeaderArrowUpRight.png';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    const checkIfSticky = () => {
        setIsSticky(window.scrollY > 16);
    }

    useEffect(() => {
        checkIfSticky();
        window.addEventListener('scroll', checkIfSticky);
        return () => {
            window.removeEventListener('scroll', checkIfSticky);
        };
    },[])
    
    // #F6EFE4 = sand color
    return (
        <header className='hidden xs:block'>
            <div className='flex flex-col w-full bg-black'>
                <div className='flex flex-row text-sand justify-center p-4'>
                    <a className='flex' href="#">
                        <p className='font-host-grotesk text-[1.6rem]'>
                            AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!
                            <img src={IMGHeaderIconArrowUpRight.src} className='inline-block ml-[0.5vw] w-[22px]' />
                        </p>
                    </a>
                </div>
                <div className={`flex items-center w-full h-[5.56vw] pt-[2.225vw] pb-[0.5vw] bg-sand`}>
                    <motion.nav
                        className={`flex flex-col bg-sand ${
                            isSticky
                            ? 'fixed z-20 top-[2.8vw] px-[2.78vw] py-[0.63vw] border-2 border-black'
                            : 'rounded-t-lg relative px-[2.78vw] mx-auto'
                        }`}
                        style={{
                            ...(isSticky && {
                            left: '50%',
                            transform: 'translateX(-50%)',
                            }),
                        }}
                        initial={{ width: '95vw' }}
                        animate={{ width: isSticky ? '66.81vw' : '95vw' }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        >
                        <div className={`flex flex-row items-center`}>
                            <div className="flex w-full justify-start">
                                <motion.div
                                    className='flex text-nowrap flex-wrap flex-row font-medium text-[1.4vw] leading-[1.4vw]'
                                    initial={{ columnGap: '2.78vw'}}
                                    animate={{ columnGap: isSticky ? '1.67vw' : '2.78vw' }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                >
                                    <a className="uppercase" href="">
                                        Projects
                                    </a>
                                    <a className="uppercase" href="">
                                        Events
                                    </a>
                                    <a className="uppercase" href="">
                                        Blog
                                    </a>
                                    <a className="uppercase" href="">
                                        Our Values
                                    </a>
                                </motion.div>
                            </div>
                            <div className="flex w-full justify-center items-center relative">
                                <motion.img
                                    src={AIFoundryLogoTop.src}
                                    className="absolute w-[11vw]"
                                    animate={{ opacity: isSticky ? 0 : 1 }}
                                    initial={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                                <motion.img
                                    src={AIFoundryLogoTopSticky.src}
                                    className="absolute w-[4.87vw]"
                                    animate={{ opacity: isSticky ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                />
                            </div>
                            <div className="flex w-full justify-end">
                                <Button variant="primary" content="Join our discord" svg="discord" />
                            </div>
                        </div>
                    </motion.nav>
                </div>
            </div>
        </header>
    )
}
