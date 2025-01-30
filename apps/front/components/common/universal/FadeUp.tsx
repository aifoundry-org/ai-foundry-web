'use client';

import { motion } from "motion/react"

export default function FadeUp({ children, id = '', delay = 0, duration = 1, className = '', startY = '15%', endY = '0', additionalInitialParams = {}, additionalWhileInView = {}}: Readonly<{ children: React.ReactNode, id?: string, delay?: number, duration?: number, className?: string, startY?: string, endY?: string, additionalInitialParams?: {[key: string]: any}, additionalWhileInView?: {[key: string]: any}}>) {
    return (
        <motion.div 
            id={id}
            className={className}
            viewport={{ once: true, amount: 0.3}}
            initial={{opacity: 0, y: startY, ...additionalInitialParams}}
            whileInView={{opacity: 1, y: endY, ...additionalWhileInView}}
            transition={{duration, delay, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    )
}