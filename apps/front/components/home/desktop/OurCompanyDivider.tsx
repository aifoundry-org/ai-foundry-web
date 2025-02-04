'use client'

import { lazy } from 'react';
import FadeUp from '@/components/common/universal/FadeUp';
import animationData from '@/data/home/lotties/marquee.json'
const LazyLottieComponent = lazy(() => import('lottie-react'));

export default function OurCompanyDivider(){
    return (
        <FadeUp className='hidden relative xs:flex xs:flex-col xs:my-[5vw] xs:w-full xs:h-[10vw]'>
            <LazyLottieComponent
                className='absolute h-fit top-0 z-0'
                loop
                autoplay
                animationData={animationData}
            />
        </FadeUp>
    )
}