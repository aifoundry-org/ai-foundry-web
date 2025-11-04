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
            <Link target="_blank" className='flex font-host-grotesk text-[1.6rem]' href="https://fosdem.org/2025/schedule/track/ai/">
                <div className='flex'>AI Plumbers Devroom has been accepted for FOSDEM 2026! Submit your talk now before November 31st!</div>
                <div className='flex items-center'>
                    <div className='inline-block ml-[0.56vw] w-[1.53vw]'>
                        <ImageWrapper src={IMGHeaderIconArrowUpRight.src} alt="Arrow up right" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
