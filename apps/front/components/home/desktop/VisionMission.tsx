import Link from 'next/link'
import FadeIn from '@/components/common/universal/FadeIn'
import FadeUp from '@/components/common/universal/FadeUp'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGCircle from '@/public/imgs/home/visionMission/circle.webp'
import IMGError from '@/public/imgs/home/visionMission/error.webp'
import IMGGraffiti from '@/public/imgs/home/visionMission/graffiti.webp'
import OurCoreValue from './VisionMissionCard'
import coreValues from '@/mock/home/visionMission/data.json'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function VisionMission(){
    return (
        <>
            <div className='hidden md:flex md:flex-row xl:flex-row 2xl:flex-row md:relative md:w-full md:h-fit md:pt-[3vw]'>
                <FadeIn className='absolute left-0 top-[11vw] w-[100vw] h-fit'>
                    <div className='w-[33vw]'>
                        <ImageWrapper src={IMGCircle.src} alt="Vision & Mission circle" />
                    </div>
                </FadeIn>
                <div className='flex flex-row relative px-[5.6vw]'>
                    <FadeIn className='relative w-full h-full flex basis-[61%]'>
                        <div className='absolute xs:hidden md:block xl:block 2xl:block w-fit left-[2vw] top-[2vw] font-black font-dharma-gothic-e text-orange text-[12.5vw] leading-[9.25vw] uppercase'>
                            Vision<br/>& Mission
                        </div>
                        <div className='absolute w-fit left-[25.5vw] top-[14.6vw]'>
                            <div className='w-[18.82vw]'>
                                <ImageWrapper src={IMGError.src} alt="Vision & Mission error" />
                            </div>
                        </div>
                        <div className='absolute w-fit -left-[5.7vw] top-[13.3vw]'>
                            <div className='w-[18.82vw]'>
                                <ImageWrapper src={IMGGraffiti.src} alt="Vision & Mission graffiti" />
                            </div>
                        </div>
                    </FadeIn>
                    <FadeUp className='relative w-full h-full xs:pt-[35vw] md:pt-0 xl:pt-0 2xl:pt-0 flex flex-col basis-[39%]'>
                        <h2 className='mb-[2.25vw] uppercase font-black font-dharma-gothic-e text-[3rem] xl:text-[2.8vw] 2xl:text-[2.8vw] leading-[2.5rem] xl:leading-[2.3vw] 2xl:leading-[2.3vw]'>
                            Our long-term vision is to help the industry evolve to a structure where model training and deployment for any company are open, transparent, and concise.
                        </h2>
                        <h3 className='normal-case font-normal font-host-grotesk text-[2rem] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[2rem] xl:leading-[1.65vw] 2xl:leading-[1.65vw]'>
                            We desire to see the industry aligned on the principles of how those systems are structured at a high level from which every company can deploy its own engine or system, configured the way each specific company needs it. This approach will lower risks and improve AI results for all companies and practitioners. Therefore, we foster, build, and support projects that can become the engineering foundation of such training and deployment systems. We support practitioners willing to benefit from AI in their work and life, specifically models and their fine-tuning and deployment.
                            <br/><br/>
                            We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry. 
                        </h3>
                        <div className='w-full h-fit mt-[2.25vw]'>
                            <Button as={Link} href='/terms-and-conditions' variant='secondary' content='Community code of conduct' svg='arrow-up-right' />
                        </div>
                    </FadeUp>
                </div>
            </div>
            <div id='values' className='hidden md:flex md:flex-col md:relative md:w-full md:h-fit md:px-[8vw] md:pt-[10.2vw]'>
                <FadeIn className='w-full'>
                    <h2 className='font-black text-[4.31vw] leading-[3.7vw] mb-[3.06vw] uppercase'>
                        Our core values
                    </h2>
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