'use client';

import { m } from "motion/react"
import LazyMotion from '@/components/common/universal/LazyAnimation'
import { RefObject } from 'react';

// imported from motion/react to avoid lint errors
interface ViewportOptions {
    root?: RefObject<Element | null>;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
}

export default function FadeIn({ children, delay = 0, duration = 1, viewport = { once: true, amount: 0.3}, className = '' }: Readonly<{ children: React.ReactNode, delay?: number, duration?: number, viewport?: ViewportOptions, className?: string }>) {
    return (
        <LazyMotion>
            <m.div 
                className={className}
                viewport={viewport}
                initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{duration, delay, ease: "easeOut"}}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}