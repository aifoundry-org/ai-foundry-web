'use client'

import { useEffect } from 'react';

// Makes direct links to in-page anchors (e.g. https://aifoundry.org/#fosdem) land reliably.
//
// Two things break the browser's native fragment scroll on this site:
//  1. `html { scroll-behavior: smooth }` turns the initial jump into an animation, and GSAP
//     ScrollTrigger's refresh on window `load` (scroll to 0, measure, restore) interrupts it,
//     leaving the page stuck near the top whenever `load` fires mid-animation.
//  2. Desktop and mobile sections are separate elements (`#x` / `#x-mobile`) and the inactive
//     one is display:none, so a shared link only works on one of the two layouts.
//
// So on initial load we resolve the *visible* target and jump to it instantly after hydration
// and again once `load` / ScrollTrigger have settled — unless the user has started scrolling.
function resolveTarget(hash: string): HTMLElement | null {
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    if (!id) return null;
    const base = id.replace(/-mobile$/, '');
    for (const candidate of [id, base, `${base}-mobile`]) {
        const el = document.getElementById(candidate);
        if (el && el.getClientRects().length > 0) return el;
    }
    return null;
}

export default function HashScroll() {
    useEffect(() => {
        if (!window.location.hash) return;

        let userTookOver = false;
        const stop = () => { userTookOver = true; };
        const interactions = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
        interactions.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }));

        const jump = () => {
            if (userTookOver) return;
            const el = resolveTarget(window.location.hash);
            if (!el) return;
            const top = el.getBoundingClientRect().top;
            const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
            if (Math.abs(top - margin) > 2) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        };

        const timers: ReturnType<typeof setTimeout>[] = [];
        const afterLoad = () => {
            // Let ScrollTrigger's own load-time refresh run first, then settle late layout shifts.
            [0, 250, 750, 1500].forEach((ms) => timers.push(setTimeout(jump, ms)));
        };

        jump();
        if (document.readyState === 'complete') afterLoad();
        else window.addEventListener('load', afterLoad, { once: true });

        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('load', afterLoad);
            interactions.forEach((e) => window.removeEventListener(e, stop));
        };
    }, []);

    return null;
}
