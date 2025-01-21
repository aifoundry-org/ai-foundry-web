import { useRef, useState, useEffect, useCallback } from 'react';

interface Props {
  autoLock?: boolean;
  lockTarget?: HTMLElement | string;
  widthReflow?: boolean;
}

type OriginalStyle = {
  overflow: CSSStyleDeclaration['overflow'];
  paddingRight: CSSStyleDeclaration['paddingRight'];
};

/**
 * `useScrollLock` disables the scroll of the body or a specified target element.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/useScrollLock-1-0-0-5123ffeba6e643a6b787d2af02cea6d4
 *
 * @param autoLock - Automatically lock the scroll on mount.
 * @param lockTarget - The target element to lock the scroll on.
 * @param widthReflow - Prevent width reflow when locking the scroll.
 *
 */
export default function useScrollLock({ autoLock = true, lockTarget, widthReflow = true }: Props = {}) {
  const [isLocked, setIsLocked] = useState(false);
  const target = useRef<HTMLElement | null>(null);
  const originalStyle = useRef<OriginalStyle | null>(null);

  const lock = useCallback(() => {
    if (target.current) {
      const { overflow, paddingRight: originalPaddingRight } = target.current.style;

      originalStyle.current = { overflow, paddingRight: originalPaddingRight };

      if (widthReflow) {
        const isTargetBody = target.current === document.body;
        const offsetWidth = isTargetBody ? window.innerWidth : target.current.offsetWidth;
        const { paddingRight } = window.getComputedStyle(target.current);
        const currentPaddingRight = parseInt(paddingRight, 10) || 0;

        const scrollbarWidth = offsetWidth - target.current.scrollWidth;
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      }

      target.current.style.overflow = 'hidden';

      setIsLocked(true);
    }
  }, [target, widthReflow]);

  const unlock = useCallback(() => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow;

      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight;
      }
    }

    setIsLocked(false);
  }, [target, originalStyle, widthReflow]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (lockTarget) {
      const isLockTargetString = typeof lockTarget === 'string';
      target.current = isLockTargetString ? document.querySelector(lockTarget) : lockTarget;
    }

    if (!target.current) {
      target.current = document.body;
    }

    if (autoLock) {
      lock();
    }

    return () => {
      unlock();
    };
  }, [lock, unlock, autoLock, lockTarget, widthReflow]);

  return { isLocked, lock, unlock };
}
