'use client';

import { useState, useEffect } from 'react';
import Button from '@/litebox-lib/ui/Button/Button';
import AIFoundryLogoTop from '@/public/pngs/common/AIFoundryLogoTop.png';
import AIFoundryLogoTopSticky from '@/public/pngs/common/AIFoundryLogoTopSticky.png';
import IMGHeaderIconArrowUpRight from '@/public/pngs/common/HeaderArrowUpRight.png';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    const checkIfSticky = () => {
        const hero = document.querySelector('.hero');
        if(hero){
            setIsSticky(hero.getBoundingClientRect().y <= 0);   
        }
    }

    useEffect(() => {
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
                <div className={`flex flex-col bg-sand rounded-t-lg ${isSticky ? 'fixed w-[66.81vw] z-20 top-[2.225vw] left-[16.6vw] border-[1px] border-black' : ''}`}>
                    <div className={`flex flex-row items-center ${isSticky ? 'px-[2.8vw] py-[0.625vw]' : 'pt-[2.225vw] px-[5vw] pb-[0.7vw]'} `} >
                        <div className='flex justify-center text-center'>
                            <div className={`flex text-nowrap flex-wrap flex-row font-medium ${isSticky ? 'gap-x-[1.67vw]' : 'gap-x-[2.78vw]'} text-[1.4vw] leading-[1.4vw]`}>
                                <a className='uppercase' href=''>Projects</a>
                                <a className='uppercase' href=''>Events</a>
                                <a className='uppercase' href=''>Blog</a>
                                <a className='uppercase' href=''>Our Values</a>
                            </div>
                        </div>
                        <div className='flex basis-1/6 mx-auto justify-center'>
                            <img src={isSticky ? AIFoundryLogoTopSticky.src : AIFoundryLogoTop.src} className={isSticky ? 'w-[4.87vw]' : 'w-[11vw]'} />
                        </div>
                        <div className='flex justify-center'>
                            <Button variant='primary' content='Join our discord' svg='discord' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
