'use client'

import FadeUp from '@/components/common/universal/FadeUp';
import animationData from '@/data/home/lotties/marqueeMobile.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function OurCompanyDivider(){
    return (
        <FadeUp className='xs:hidden flex flex-col relative w-full h-fit mt-[13.7vw]'>
            <DotLottieReact
                className='absolute h-fit -top-[25vw]'
                data={animationData}
                loop
                autoplay
            />
        </FadeUp>
    )
}