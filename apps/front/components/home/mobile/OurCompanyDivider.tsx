'use client'

import { lazy } from 'react';
import FadeUp from '@/components/common/universal/FadeUp';
import animationData from '@/data/home/lotties/marqueeMobile.json'
const LazyLottieComponent = lazy(() => import('lottie-react'));

export default function OurCompanyDivider(){
    return (
        <FadeUp className='xs:hidden flex flex-col relative w-full h-[10vw] my-[13.7vw]'>
            <LazyLottieComponent
                className='absolute h-fit -top-[10vw]'
                animationData={animationData}
                loop
                autoplay
            />
        </FadeUp>
    )
}