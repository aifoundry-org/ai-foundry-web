import Link from 'next/link'
import FadeIn from '@/components/common/universal/FadeIn'
import FadeUp from '@/components/common/universal/FadeUp'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGCircle from '@/public/imgs/home/visionMission/circleMobile.webp'
import IMGError from '@/public/imgs/home/visionMission/errorMobile.webp'
import IMGGraffiti from '@/public/imgs/home/visionMission/graffitiMobile.webp'
import OurCoreValue from './VisionMissionCard'
import coreValues from '@/mock/home/visionMission/data.json'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function VisionMission(){
    return (
        <div className='md:hidden flex flex-col relative w-full h-fit my-[14.2vw] px-[5.6vw]'>
            <FadeIn className='absolute top-0 right-0 z-[1]'>
                <ImageWrapper src={IMGCircle.src} alt="Vision & Mission Section" />
            </FadeIn>
            <FadeUp delay={0.5} className='relative mt-[11vw] z-0 font-black font-dharma-gothic-e text-orange text-[19.2vw] leading-[14.25vw] uppercase'>
                Vision<br/>& Mission
                <div className='absolute bottom-[3vw] left-[31vw]'>
                    <ImageWrapper src={IMGError.src} alt='Error' />
                </div>
                <div className='absolute -bottom-[4vw] -left-[6.5vw]'>
                    <ImageWrapper src={IMGGraffiti.src} alt='Graffiti' />
                </div>
            </FadeUp>
            <FadeUp delay={0.5} className='mt-[8.55vw] z-0 font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw] uppercase'>
                Our long-term vision is to help the industry evolve to a structure where model training and deployment for any company are open, transparent, and concise.
            </FadeUp>
            <FadeUp delay={0.5} className='mt-[8.55vw] font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw]'>
                We desire to see the industry aligned on the principles of how those systems are structured at<br/>a high level from which every company can<br/>deploy its own engine or system, configured the<br/>way each specific company needs it. This approach will lower risks and improve AI results for all companies and practitioners. Therefore, we foster, build, and support projects that can<br/>become the engineering foundation of such training and deployment systems. We support practitioners willing to benefit from AI in their work and life, specifically models and their fine-tuning and deployment.
                <br/><br/>
                We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry. 
            </FadeUp>
            <FadeUp delay={0.5} id='values-mobile' className='mt-[7.475vw] w-full h-fit'>
                <Button as={Link} href='/terms-and-conditions' variant='secondary' content='Community code of conduct' svg='arrow-up-right' />
            </FadeUp>
            <FadeIn delay={0.5} className='mt-[19.2vw] mb-[11.2vw] font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                Our core values
            </FadeIn>
            {coreValues.map((el, idx) => (
                <FadeUp key={idx} delay={el.delay} duration={0.5}>
                    <OurCoreValue
                        key={idx}
                        title={el.title}
                        content={el.content}
                        icon={el.icon}
                    />
                </FadeUp>
            ))}
        </div>
    )
}