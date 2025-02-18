'use client'

import dynamic from 'next/dynamic';
import FadeUp from '@/components/common/universal/FadeUp';

const LottiePlayer = dynamic(() => import('@/components/common/universal/LottiePlayer'));

export default function OurCompanyDivider(){
    return (
        <FadeUp className='xs:hidden flex flex-col relative w-full h-[10vw] my-[13.7vw]'>
            <LottiePlayer
                className='absolute h-fit -top-[10vw] w-full'
                loop
                autoplay
                src='/lotties/marqueeMobile.lottie'
            />
        </FadeUp>
    )
}