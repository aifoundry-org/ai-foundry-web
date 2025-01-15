import HeroDesktop from '@/components/Desktop/Hero'
import HeroMobile from '@/components/Mobile/Hero'

import FindOutMoreDesktop from '@/components/Desktop/FindOutMore'
import FindOutMoreMobile from '@/components/Mobile/FindOutMore'

import OpenSourceProjectsDesktop from '@/components/Desktop/OpenSourceProjects'
import OpenSourceProjectsMobile from '@/components/Mobile/OpenSourceProjects'

import CommunityDesktop from '@/components/Desktop/Community'
import CommunityMobile from '@/components/Mobile/Community'

import LatestInsightsDesktop from '@/components/Desktop/LatestInsights'
import LatestInsightsMobile from '@/components/Mobile/LatestInsights'

import OurCompanyDividerDesktop from '@/components/Desktop/OurCompanyDivider'
import OurCompanyDividerMobile from '@/components/Mobile/OurCompanyDivider'

import VisionMissionMobile from '@/components/Mobile/VisionMission'
import VisionMissionDesktop from '@/components/Desktop/VisionMission'

import TestimonialsMobile from '@/components/Mobile/Testimonials'
import TestimonialsDesktop from '@/components/Desktop/Testimonials'

import InTheNewsMobile from '@/components/Mobile/InTheNews'
import InTheNewsDesktop from '@/components/Desktop/InTheNews'

import JoinTheAiRevolutionMobile from '@/components/Mobile/JoinTheAiRevolution'
// import JoinTheAiRevolutionDesktop from '@/components/Desktop/JoinTheAiRevolution'

export default function Home() {
  return (
    <main>
      <HeroDesktop />
      <HeroMobile />

      <FindOutMoreDesktop />
      <FindOutMoreMobile />

      <OpenSourceProjectsDesktop />
      <OpenSourceProjectsMobile />

      <CommunityDesktop />
      <CommunityMobile />

      <LatestInsightsDesktop />
      <LatestInsightsMobile />

      <OurCompanyDividerDesktop />
      <OurCompanyDividerMobile />

      <VisionMissionDesktop />
      <VisionMissionMobile />

      <TestimonialsMobile />
      <TestimonialsDesktop />

      <InTheNewsMobile />
      <InTheNewsDesktop />

      <JoinTheAiRevolutionMobile />
    </main>
  );
}
