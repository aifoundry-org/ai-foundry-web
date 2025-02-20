'use client';

import { LazyMotion, domAnimation } from "motion/react"

export default function LazyAnimation({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    )
}