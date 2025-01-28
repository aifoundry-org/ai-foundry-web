'use client';

import { motion } from "motion/react"

export default function FadeUp({ children, delay = 0, duration = 1, className = '' }: Readonly<{ children: React.ReactNode, delay?: number, duration?: number, className?: string }>) {
    return (
        <motion.div 
            className={className}
            viewport={{ once: true, amount: 0.3}}
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{duration, delay, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    )
}