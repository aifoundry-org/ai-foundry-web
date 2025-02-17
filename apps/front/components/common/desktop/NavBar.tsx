'use client';
/* eslint-disable */

import Button from '@/libs/litebox-lib/ui/Button/Button';
import { m } from 'motion/react';
import Link from 'next/link';
import LazyMotion from '@/components/common/universal/LazyAnimation'
import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const LottiePlayer = dynamic(() => import('@/components/common/universal/LottiePlayer'));

export default function NavBar({removeTopBorders = false}) {
    const path = usePathname();
    const removeRoundedBorders = path.includes('blog') || path.includes('terms-and-conditions') || removeTopBorders;
    const lottieRef = useRef<any>(null);
    const [isSticky, setIsSticky] = useState(false);

    const checkIfSticky = () => {
        const { scrollY } = window
        const stickyState = scrollY > 16;

        setIsSticky(stickyState);
        if(!stickyState){
            lottieRef.current?.setDirection(1);
            const totalFrames = lottieRef.current?.totalFrames;

            lottieRef.current?.seek(totalFrames - 10);
            lottieRef.current?.setDirection(-1);
        } else {
            lottieRef.current?.setDirection(1);
        }
        lottieRef.current?.play();
    }

    useEffect(() => {
        checkIfSticky();
        window.addEventListener('scroll', checkIfSticky);
        return () => {
            window.removeEventListener('scroll', checkIfSticky);
        };
    },[])

    return (
        <div className={`flex items-center w-full h-[5.56vw] pt-[2.225vw] pb-[0.5vw] bg-sand ${!removeRoundedBorders && 'rounded-t-lg'}`}>
            <LazyMotion>
                <m.nav
                    className={`flex flex-col bg-sand ${
                        isSticky
                        ? 'fixed z-20 top-[2.8vw] px-[2.78vw] py-[1vw] border-2 border-black'
                        : 'relative px-[2.78vw] mx-auto'
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
                        <div className="flex w-1/3 md:w-full sm:w-full lg:w-full xl:w-full 2xl:w-full justify-start">
                            <m.div
                                className='flex text-nowrap flex-wrap flex-row font-medium text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]'
                                initial={{ columnGap: '2.78vw'}}
                                animate={{ columnGap: isSticky ? '1.67vw' : '2.78vw' }}
                                transition={{ ease: "easeInOut", duration: 0.5 }}
                            >
                                <div className={`flex flex-wrap gap-[${isSticky ? '1.67vw' : '2.78vw'}]`}>
                                    <Link className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300" href="/#projects">
                                        Projects
                                    </Link>
                                    <Link className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300" href="/#events">
                                        Events
                                    </Link>
                                </div>
                                <div className={`flex flex-wrap gap-[${isSticky ? '1.67vw' : '2.78vw'}]`}>
                                    <Link className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300" href="/#blog">
                                        Blog
                                    </Link>
                                    <Link className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300" href="/#values">
                                        Our Values
                                    </Link>
                                </div>
                            </m.div>
                        </div>
                        <div className="flex w-1/3 h-[5vw] md:w-full sm:w-full lg:w-full xl:w-full 2xl:w-full justify-center items-center relative">
                            <LottiePlayer
                                className={`h-[4.31vw] absolute mx-auto top-1/2 -translate-y-1/2 ${isSticky ? 'left-[8vw]' : 'left-[9vw]' }`}
                                ref={lottieRef}
                                src='/lotties/navbarLogo.lottie'
                                autoplay={false}
                                loop={false}
                            />
                        </div>
                        <div className="flex w-1/3 md:w-full sm:w-full lg:w-full xl:w-full 2xl:w-full justify-end">
                            <Button target='_blank' as={Link} href='https://discord.com/invite/WNKvkefkUs' variant="primary" content="Join our discord" svg="discord" />
                        </div>
                    </div>
                </m.nav>
            </LazyMotion>
        </div>
    )
}