'use client'

import Link from "next/link";
import IMGHeaderIconArrowUpRight from '@/public/imgs/header/headerArrowUpRight.webp';
import { usePathname } from 'next/navigation';
import ImageWrapper from '../universal/ImageWrapper';

export default function Header() {
    const path = usePathname();
    const hideSelf = path.includes('blog') || path.includes('terms-and-conditions');
    
    return (
        <div className={`${hideSelf && 'hidden'} flex flex-row text-sand justify-center p-4`}>
            <Link className='flex flex-col font-host-grotesk text-center items-center my-[1.35vw] text-[1.4rem]' target="_blank" href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                <div className='flex'>AIFoundry.org is sponsoring the &quot;Low-Level AI Engineering & Hacking&quot; Dev Room at FOSDEM. </div>
                <div className='flex items-center'>Find out more! 
                    <div className='inline-block ml-[2.15vw] w-[3.735vw]'>
                        <ImageWrapper src={IMGHeaderIconArrowUpRight.src} alt="Arrow up right" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
