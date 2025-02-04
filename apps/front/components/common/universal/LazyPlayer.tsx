import { forwardRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LazyPlayer = forwardRef<Player, React.ComponentProps<typeof Player>>((props, ref) => (
    <Player ref={ref} {...props} />
));

LazyPlayer.displayName = 'LazyPlayer';

export default LazyPlayer;