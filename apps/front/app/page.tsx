import HeroDesktop from '@/components/Desktop/Hero'
import HeroMobile from '@/components/Mobile/Hero'

import FindOutMoreDesktop from '@/components/Desktop/FindOutMore'
import FindOutMoreMobile from '@/components/Mobile/FindOutMore'

import OpenSourceProjectsDesktop from '@/components/Desktop/OpenSourceProjects'
import OpenSourceProjectsMobile from '@/components/Mobile/OpenSourceProjects'

export default function Home() {
  return (
    <main>
      <HeroDesktop />
      <HeroMobile />

      <FindOutMoreDesktop />
      <FindOutMoreMobile />

      <OpenSourceProjectsDesktop />
      <OpenSourceProjectsMobile />
    </main>
  );
}
