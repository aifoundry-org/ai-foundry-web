'use client'

import dynamic from 'next/dynamic';
import FadeUp from '@/components/common/universal/FadeUp';

const LottiePlayer = dynamic(() => import('@/components/common/universal/LottiePlayer'));

export default function OurCompanyDivider(){
    return (
        <FadeUp className='hidden relative xs:flex xs:flex-col xs:my-[5vw] xs:w-full xs:h-[10vw]'>
            <LottiePlayer
                className='absolute h-fit top-0 z-0'
                loop
                autoplay
                src='/lotties/marquee.lottie'
            />
        </FadeUp>
    )
}