'use client'

import FadeUp from '@/components/common/universal/FadeUp';
import animation from '@/data/home/lotties/marquee.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function OurCompanyDivider(){
    return (
        <FadeUp className='hidden xs:flex xs:flex-col xs:mt-[8vw] xs:w-full xs:h-[10vw]'>
            <DotLottieReact
                className='relative h-fit -top-[25vw] z-0'
                data={animation}
                loop
                autoplay
            />
        </FadeUp>
    )
}