'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    const hideSelf = path.includes('blog') || path.includes('terms-and-conditions');
    
    return (
        <div className={`${hideSelf && 'hidden'} flex flex-row text-sand justify-center p-4`}>
            <Link className='flex flex-col font-host-grotesk text-center items-center my-[1.35vw] text-[1.4rem]' href="/#fosdem-mobile">
                <div className='flex'>AI Plumbers Devroom is back at FOSDEM&#8217;27! Submit your talk by November 30!</div>
            </Link>
        </div>
    )
}
