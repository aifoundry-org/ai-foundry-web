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
        <div className='hidden xs:flex xs:flex-col xs:mt-[3.5vw] xs:w-full xs:h-fit'>
            {View}
        </div>
    )
}