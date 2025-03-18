'use client';
/* eslint-disable */

import { m } from "motion/react"
import LazyMotion from '@/components/common/universal/LazyAnimation'

export default function FadeUp({ children, delay = 0, duration = 1, className = '', startY = '-15%', endY = '0', additionalInitialParams = {}, additionalWhileInView = {}, additionalViewportParams = {}}: Readonly<{ children: React.ReactNode, delay?: number, duration?: number, className?: string, startY?: string, endY?: string, additionalInitialParams?: {[key: string]: any}, additionalWhileInView?: {[key: string]: any}, additionalViewportParams?: {[key: string]: any}}>) {
    return (
        <LazyMotion>
            <m.div 
                className={className}
                viewport={{ once: true, amount: 0.3, ...additionalViewportParams}}
                initial={{opacity: 0, y: startY, ...additionalInitialParams}}
                whileInView={{opacity: 1, y: endY, ...additionalWhileInView}}
                transition={{duration, delay, ease: "easeOut"}}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}