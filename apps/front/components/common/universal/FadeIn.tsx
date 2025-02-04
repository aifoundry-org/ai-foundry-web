'use client';

import { m } from "motion/react"
import LazyMotion from '@/components/common/universal/LazyAnimation'

export default function FadeUp({ children, delay = 0, duration = 1, className = '' }: Readonly<{ children: React.ReactNode, delay?: number, duration?: number, className?: string }>) {
    return (
        <LazyMotion>
            <m.div 
                className={className}
                viewport={{ once: true, amount: 0.3}}
                initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{duration, delay, ease: "easeOut"}}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}