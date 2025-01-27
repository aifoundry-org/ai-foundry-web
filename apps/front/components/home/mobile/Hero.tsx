'use client'

import { useState } from 'react';
import IMGBackgroundMobile from '@/public/pngs/home/hero/backgroundMobile.png';

export default function Hero() {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <div className='xs:hidden block relative bg-black'>
            <div className='relative flex flex-col w-full bg-sand'>
                <div className='relative w-full h-[72vw] flex flex-col gap-y-[6vw]'>
                    <div className='absolute w-full top-0'>
                        <img src={IMGBackgroundMobile.src} />
                    </div>
                    <div className='absolute w-full top-[10vw]'>
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