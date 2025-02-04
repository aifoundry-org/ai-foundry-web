'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { m } from 'motion/react';
import Link from "next/link";
import IMGHeaderIconArrowUpRight from '@/public/pngs/header/headerArrowUpRight.png';
import IMGIconHamburger from '@/public/pngs/header/hamburger.png';
import IMGBackground from '@/public/pngs/home/navbar/backgroundMobile.png';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import LazyMotion from '@/components/common/universal/LazyAnimation'
import IMGAIFoundyLogoSideMenuMobile from '@/public/pngs/sideMenu/AIFoundryLogoMobile.png'
import IMGCloseButton from '@/public/pngs/sideMenu/closeButton.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'

const LottiePlayer = dynamic(() => import('@/components/common/universal/LottiePlayer'));

export default function Header() {
    const lottieRef = useRef<any>(null);

    const [currPage, setCurrPage] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const checkIfSticky = () => {
        const { scrollY } = window
        const stickyState = scrollY > 93;

        setIsSticky(stickyState);
        if(stickyState){
            lottieRef.current?.setDirection(1);
        } else {
            lottieRef.current?.setDirection(-1);
        }
        lottieRef.current?.play();
    }

    useEffect(() => {
        setCurrPage(window.location.pathname)
        checkIfSticky();
        window.addEventListener('scroll', checkIfSticky);
        return () => {
            window.removeEventListener('scroll', checkIfSticky);
        };
    },[])
    
    return (
        <header className='md:hidden flex flex-col w-full'>
            <div className='flex flex-col w-full h-full bg-black'>
                <div className='flex flex-row text-sand justify-center p-4'>
                    <Link className='flex flex-col font-host-grotesk text-center items-center my-[1.35vw] text-[1.4rem]' target="_blank" href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                        <div className='flex'>AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. </div>
                        <div className='flex items-center'>Find out more! <img src={IMGHeaderIconArrowUpRight.src} className='inline-block ml-[2.15vw] w-[3.735vw]' /></div>
                    </Link>
                </div>
                <div className='flex flex-row w-full h-[27vw] bg-sand rounded-t-3xl relative'>
                    {currPage == '/' && <img className='absolute w-[19.48vw] h-[25.35vw] right-[0.3vw] z-[2]' src={IMGBackground.src} />}
                    <LazyMotion>
                        <m.nav
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
                            initial={{ width: '90vw' }}
                            animate={{ width: isSticky ? '100vw' : '90vw' }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            >
                            <div className='flex basis-[50%] w-full mx-auto items-center justify-start'>
                                <LottiePlayer
                                    className='h-[15vw]'
                                    ref={lottieRef}
                                    src='/lotties/navbarLogo.lottie'
                                    autoplay={false}
                                    loop={false}
                                />
                            </div>
                            <div className='flex basis-[50%] w-full justify-end'>
                                <img src={IMGIconHamburger.src} className='z-[3] w-[6.4vw] xs:w-[5vw]' onClick={() => setShowMenu(true)} />
                            </div>
                        </m.nav>
                    </LazyMotion>
                </div>
            </div>
            <LazyMotion>
                <m.div 
                    className='fixed w-full h-[100vh] top-0 bg-orange z-20'
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
                                }} className='w-[40.27vw] xs:w-[30vw]' src={IMGAIFoundyLogoSideMenuMobile.src} />
                            </div>
                            <div className='flex justify-end'>
                                <img onClick={() => setShowMenu(false)} className='w-[6.4vw]' src={IMGCloseButton.src} />
                            </div>
                        </div>
                        <div className="flex flex-col w-full my-[10.667vw] xs:my-[4vw] font-dharma-gothic-e font-black text-[10.667vw] xs:text-[6.5vw] leading-[8.8vw] gap-[8.8vw] xs:gap-0">
                            <Link className="uppercase" onClick={() => setShowMenu(false)} href="/#projects-mobile">
                                Projects
                            </Link>
                            <Link className="uppercase" onClick={() => setShowMenu(false)} href="/#events-mobile">
                                Events
                            </Link>
                            {process.env.HIDE_SECTIONS === "false" &&
                                <Link className="uppercase" onClick={() => setShowMenu(false)} href="/#blog-mobile">
                                    Blog
                                </Link>
                            }
                            <Link className="uppercase" onClick={() => setShowMenu(false)} href="/#values-mobile">
                                Our values
                            </Link>
                        </div>
                        <div className="flex flex-col w-full mb-[10.667vw] xs:mb-[5vw] font-dharma-gothic-e font-bold text-[4.8vw] xs:text-[4vw] leading-[4.8vw] gap-[4.8vw] xs:gap-[2vw]">
                            <Link className="uppercase" onClick={() => {
                                window.scrollTo(0, 0);
                                setShowMenu(false)}
                            } href="/terms-and-conditions#privacy-policy-mobile">
                                Privacy policy
                            </Link>
                            <Link className="uppercase" onClick={() => {
                                window.scrollTo(0, 0);
                                setShowMenu(false)}
                            } href="/terms-and-conditions">
                                Terms of service
                            </Link>
                        </div>
                        <div className='flex w-full justify-start'>
                            <Button target='_blank' as={Link} href='https://discord.com/invite/WNKvkefkUs' variant='primary' content='Join our discord' svg='discord' />
                        </div>
                        <div className='flex flex-row gap-[8.55vw] xs:gap-[2vw] mt-[12.27vw] xs:mt-[5vw]'>
                            <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                                <img className='w-[6.4vw] h-[6.4vw] xs:w-[5vw] xs:h-[5vw]' src={IMGInstagramIcon.src} />
                            </Link>
                            <Link target='_blank' href='https://www.linkedin.com/company/aifoundry-org'>
                                <img className='w-[6.4vw] h-[6.4vw] xs:w-[5vw] xs:h-[5vw]' src={IMGLinkedinIcon.src} />
                            </Link>
                            <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                                <img className='w-[6.4vw] h-[6.4vw] xs:w-[5vw] xs:h-[5vw]' src={IMGYoutubeIcon.src} />
                            </Link>
                        </div>
                        <div className='font-host-grotesk font-normal text-[3.2vw] xs:text-[2vw] leading-[4.8vw] mt-[4.8vw]'>
                            © 2024 AI Foundry. All rights reserved.
                        </div>
                    </div>
                </m.div>
            </LazyMotion>
        </header>
    )
}
