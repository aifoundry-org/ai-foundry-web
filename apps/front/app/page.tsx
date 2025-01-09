import HeroDesktop from '@/components/Desktop/Hero'
import HeroMobile from '@/components/Mobile/Hero'

import FindOutMoreDesktop from '@/components/Desktop/FindOutMore'
import FindOutMoreMobile from '@/components/Mobile/FindOutMore'

export default function Home() {
  return (
    <main>
      <HeroDesktop />
      <HeroMobile />

      <FindOutMoreDesktop />
      <FindOutMoreMobile />
    </main>
  );
}
