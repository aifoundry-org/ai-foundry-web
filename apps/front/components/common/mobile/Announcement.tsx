'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    const hideSelf = path.includes('blog') || path.includes('terms-and-conditions');
    
    return (
        <div className={`${hideSelf && 'hidden'} flex flex-row text-sand justify-center p-4`}>
            <Link className='flex flex-col font-host-grotesk text-center items-center my-[1.35vw] text-[1.4rem]' target="_blank" href="https://fosdem.org/2025/schedule/track/ai/">
                <div className='flex'>AIFoundry.org hosted &quot;Low-Level AI Engineering & Hacking&quot; Dev Room at FOSDEM. Click to watch the talks!</div>
            </Link>
        </div>
    )
}
