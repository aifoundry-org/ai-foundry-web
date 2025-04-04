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
            <Link target="_blank" className='flex font-host-grotesk 
                xs:text-[1.14vw] text-[1.14vw] 
            ' href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                <div className='flex items-center'>AIFoundry.org is sponsoring the &quot;Low-Level AI Engineering & Hacking&quot; Dev Room at FOSDEM. Find out more! 
                    <ImageWrapper className='ml-[0.56vw] !w-[1.45vw]' src={IMGHeaderIconArrowUpRight.src} alt="Arrow up right" />
                </div>
            </Link>
        </div>
    );
}
