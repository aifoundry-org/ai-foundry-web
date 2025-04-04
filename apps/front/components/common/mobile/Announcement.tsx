'use client'

import Link from "next/link";
import IMGHeaderIconArrowUpRight from '@/public/imgs/header/headerArrowUpRight.webp';
import { usePathname } from 'next/navigation';
import ImageWrapper from '../universal/ImageWrapper';

export default function Header() {
    const path = usePathname();
    const hideSelf = path.includes('blog') || path.includes('terms-and-conditions');
    
    return (
        <div className={`${hideSelf && 'hidden'} flex text-sand justify-center`}>
            <Link className='flex text-center my-[1.35vw]' target="_blank" href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                <div className='flex items-center font-host-grotesk 
                    xs:flex-row flex-col
                    xs:gap-1 sm:gap-1 gap-0
                    xs:text-[1.14vw] text-[3.8vw]
                '>
                    <div className='flex'>
                        AIFoundry.org is sponsoring the &quot;Low-Level AI
                    </div>
                    <div className='flex'>
                        Engineering & Hacking&quot; Dev Room at FOSDEM.
                    </div>
                    <div className='flex items-center'>
                        Find out more! 
                        <ImageWrapper className='ml-[0.56vw] my-auto !w-[4vw]' src={IMGHeaderIconArrowUpRight.src} alt="Arrow up right" />
                    </div>  
                </div>
            </Link>
        </div>
    )
}
