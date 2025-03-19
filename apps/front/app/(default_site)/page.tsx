import HeroDesktop from '@/components/home/desktop/Hero'
import HeroMobile from '@/components/home/mobile/Hero'

import FindOutMoreDesktop from '@/components/home/desktop/FindOutMore'
import FindOutMoreMobile from '@/components/home/mobile/FindOutMore'

import OpenSourceProjectsDesktop from '@/components/home/desktop/OpenSourceProjects'
import OpenSourceProjectsMobile from '@/components/home/mobile/OpenSourceProjects'

import CommunityDesktop from '@/components/home/desktop/Community'
import CommunityMobile from '@/components/home/mobile/Community'

import LatestInsightsDesktop from '@/components/home/desktop/LatestInsights'
import LatestInsightsMobile from '@/components/home/mobile/LatestInsights'

import OurCompanyDividerDesktop from '@/components/home/desktop/OurCompanyDivider'
import OurCompanyDividerMobile from '@/components/home/mobile/OurCompanyDivider'

import VisionMissionDesktop from '@/components/home/desktop/VisionMission'
import VisionMissionMobile from '@/components/home/mobile/VisionMission'

import TestimonialsDesktop from '@/components/home/desktop/Testimonials'
import TestimonialsMobile from '@/components/home/mobile/Testimonials'

import InTheNewsDesktop from '@/components/home/desktop/InTheNews'
import InTheNewsMobile from '@/components/home/mobile/InTheNews'

import JoinTheAiRevolutionDesktop from '@/components/home/desktop/JoinTheAiRevolution'
import JoinTheAiRevolutionMobile from '@/components/home/mobile/JoinTheAiRevolution'

import FaqsDesktop from '@/components/home/desktop/Faqs'
import FaqsMobile from '@/components/home/mobile/Faqs'

export default function Page() {
  return (
    <>
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

        <TestimonialsDesktop />
        <TestimonialsMobile />

        {process.env.HIDE_SECTIONS === "false" && 
          <>
            <InTheNewsDesktop />
            <InTheNewsMobile />
          </>
        }

        <JoinTheAiRevolutionDesktop />
        <JoinTheAiRevolutionMobile />

        <FaqsDesktop />
        <FaqsMobile />
      </main>
    </>
  );
}
