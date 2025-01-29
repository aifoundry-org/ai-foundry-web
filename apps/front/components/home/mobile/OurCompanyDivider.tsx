'use client'

import * as animationData from '@/data/home/lotties/marquee.json'
import { useLottie } from 'lottie-react'

export default function OurCompanyDivider(){
    const defaultOptions = {
        animationData: animationData,
        loop: true,
    };
    
    const { View } = useLottie(defaultOptions);

    return (
        <div className='xs:hidden flex flex-col relative w-full h-fit mt-[13.7vw]'>
            {View}
        </div>
    )
}