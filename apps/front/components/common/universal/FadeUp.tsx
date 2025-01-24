'use client';

import { motion, AnimatePresence } from "motion/react"

export default function FadeUp({ children, delay, duration, startY = '15%', endY = '0' }: Readonly<{ children: React.ReactNode, delay: number, duration: number, startY?: string, endY?: string }>) {
    return (
        <AnimatePresence mode="sync">
            <motion.div 
                viewport={{ once: true }}
                initial={{opacity: 0, y: startY}}
                whileInView={{opacity: 1, y: endY}}
                transition={{duration, delay, ease: "easeOut"}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}