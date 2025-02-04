'use client';

import { forwardRef, lazy, Suspense } from 'react';
import type { DotLottieCommonPlayer, PlayerEvents } from '@dotlottie/react-player';

const DotLottiePlayer = lazy(() => import('@dotlottie/react-player').then(mod => ({ default: mod.DotLottiePlayer })));

interface LottiePlayerProps {
  className?: string;
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  onEvent?: (event: PlayerEvents) => void;
}

const LottiePlayer = forwardRef<DotLottieCommonPlayer | null, LottiePlayerProps>(
  ({ className, src, loop = true, autoplay = true, onEvent, ...props }, ref) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DotLottiePlayer className={className} src={src} ref={ref} autoplay={autoplay} loop={loop} {...props} renderer='svg' />
      </Suspense>
    );
  }
);

LottiePlayer.displayName = 'LottiePlayer';

export default LottiePlayer;
