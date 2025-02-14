'use client'
/* eslint-disable */
import Link from "next/link";
import IMGHeaderIconArrowUpRight from '@/public/pngs/header/headerArrowUpRight.png';
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    const hideSelf = path.includes('blog');

    return (
        <div className={`${hideSelf && 'hidden'} flex flex-row text-sand justify-center p-4`}>
            <Link target="_blank" className='flex font-host-grotesk text-[1.6rem]' href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                <div className='flex'>AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!</div>
                <div className='flex items-center'><img src={IMGHeaderIconArrowUpRight.src} className='inline-block ml-[0.56vw] w-[1.53vw]' /></div>
            </Link>
        </div>
    );
}
