import Link from 'next/link'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/home/visionMission/background.png'
import IMGErrors from '@/public/pngs/home/visionMission/errorCodes.png'
import FadeIn from '@/components/common/universal/FadeIn';
import FadeUp from '@/components/common/universal/FadeUp';
import OurCoreValue from './VisionMissionCard'
import coreValues from '@/mock/home/visionMission/data.json'

export default function VisionMission(){
    return (
        <>
            <div className='hidden md:flex md:flex-row xl:flex-row 2xl:flex-row md:relative md:w-full md:h-fit md:mt-[3vw] md:px-[5.6vw]'>
                <div className='relative w-full flex basis-7/12'>
                    <FadeIn className='absolute w-[33.275vw] -left-[5.65vw] top-[7.6vw]'>
                        <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
                    </FadeIn>
                    <FadeUp delay={0.5} className='absolute xs:hidden md:block xl:block 2xl:block w-full left-[2vw] top-[2vw] font-black font-dharma-gothic-e text-orange text-[12.5vw] leading-[9.25vw] uppercase'>
                        Vision<br/>& Mission
                    </FadeUp>
                    <FadeIn delay={0.5} className='absolute w-full -left-[4.1vw] top-[13vw]'>
                        <img src={IMGErrors.src} width="100%" alt="Code Errors" />
                    </FadeIn>
                </div>
                <FadeUp delay={0.5} className='w-full xs:pt-[35vw] md:pt-0 xl:pt-0 2xl:pt-0 flex flex-col basis-5/12 mx-[2vw]'>
                    <div className='mb-[2.25vw] uppercase font-black font-dharma-gothic-e text-[5.5vw] md:text-[2.8vw] xl:text-[2.8vw] 2xl:text-[2.8vw] leading-[4.5vw] md:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw]'>
                        Our long-term vision is to help the industry evolve to a structure where model training and deployment for any company are open, transparent, and concise.
                    </div>
                    <div className='font-normal font-host-grotesk text-[3.5vw] md:text-[1.125vw] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[4vw] md:leading-[1.65vw] xl:leading-[1.65vw] 2xl:leading-[1.65vw]'>
                        We desire to see the industry aligned on the principles of how those systems are structured at a high level from which every company can deploy its own engine or system, configured the way each specific company needs it. This approach will lower risks and improve AI results for all companies and practitioners. Therefore, we foster, build, and support projects that can become the engineering foundation of such training and deployment systems. We support practitioners willing to benefit from AI in their work and life, specifically models and their fine-tuning and deployment.
                        <br/><br/>
                        We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry. 
                    </div>
                    <div className='w-full h-fit mt-[2.25vw]'>
                        <Button as={Link} href='/terms-and-conditions' variant='secondary' content='Community code of conduct' svg='arrow-up-right' />
                    </div>
                </FadeUp>
            </div>
            <div id='values' className='hidden md:flex md:flex-col md:relative md:w-full md:h-fit md:px-[8vw] md:pt-[10.2vw]'>
                <FadeIn className='w-full font-black text-[4.31vw] leading-[3.7vw] mb-[3.06vw] uppercase'>
                    Our core values
                </FadeIn>
                <div className='flex flex-row gap-[3vw]'>
                    {coreValues.map((el, idx) => (
                        <FadeUp className='flex basis-1/4' key={idx} delay={el.delay/2}>
                            <OurCoreValue
                                title={el.title}
                                content={el.content}
                                icon={el.icon}
                            />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </>
    )
}