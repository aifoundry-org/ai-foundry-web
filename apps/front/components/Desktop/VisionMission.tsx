import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/visionMission/background.png'
import IMGErrors from '@/public/pngs/visionMission/errorCodes.png'
import OurCoreValue from './VisionMissionCard'

const coreValues = [{
    title: "Openness",
    content: "We don't just mean you can use our tools, we mean you are free to use it however you want.",
    icon: "open-book"
},{
    title: "Integrity",
    content: "Honesty, ethics, and follow-through foster trust within the community.",
    icon: "user"
},{
    title: "Emphaty",
    content: "Our community members are mindful and curious about other people’s motivations and ideas and help each other with compassion and kindness.",
    icon: "handshake"
},{
    title: "Cooperation",
    content: "Our community seeks win-win solutions with mutually beneficial outcomes.",
    icon: "cooperation"
}]

export default function VisionMission(){
    return (
        <>
            <div className='hidden xs:flex xs:flex-col md:flex-row xl:flex-row 2xl:flex-row xs:relative xs:w-full xs:h-fit xs:mt-[7vw] xs:mb-[14.2vw] xs:px-[5.6vw]'>
                <div className='relative w-full flex basis-7/12'>
                    <div className='absolute w-[33.275vw] -left-[5.65vw] top-[7.6vw]'>
                        <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
                    </div>
                    <div className='absolute xs:hidden md:block xl:block 2xl:block w-full left-[2vw] top-[2vw] font-black font-dharma-gothic-e text-orange text-[12.5vw] leading-[9.25vw] uppercase'>
                        Vision<br/>& Mission
                    </div>
                    <div className='absolute block md:hidden xl:hidden 2xl:hidden w-fit left-[25.7vw] top-[6vw] font-black font-dharma-gothic-e text-orange text-[12.5vw] leading-[9.25vw] uppercase'>
                        Vision<br/>& Mission
                    </div>
                    <div className='absolute w-full -left-[4.1vw] top-[13vw]'>
                        <img src={IMGErrors.src} width="100%" alt="Code Errors" />
                    </div>
                </div>
                <div className='w-full xs:pt-[35vw] md:pt-0 xl:pt-0 2xl:pt-0 flex flex-col basis-5/12 mx-[2vw]'>
                    <div className='mb-[2.25vw] uppercase font-black font-dharma-gothic-e text-[5.5vw] md:text-[2.8vw] xl:text-[2.8vw] 2xl:text-[2.8vw] leading-[4.5vw] md:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw]'>
                        Our long-term vision is to help the industry evolve to a structure where model training and deployment for any company are open, transparent, and concise.
                    </div>
                    <div className='font-normal font-host-grotesk text-[3.5vw] md:text-[1.125vw] xl:text-[1.125vw] 2xl:text-[1.125vw] leading-[4vw] md:leading-[1.65vw] xl:leading-[1.65vw] 2xl:leading-[1.65vw]'>
                        We desire to see the industry aligned on the principles of how those systems are structured at a high level from which every company can deploy its own engine or system, configured the way each specific company needs it. This approach will lower risks and improve AI results for all companies and practitioners. Therefore, we foster, build, and support projects that can become the engineering foundation of such training and deployment systems. We support practitioners willing to benefit from AI in their work and life, specifically models and their fine-tuning and deployment.
                        <br/><br/>
                        We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry. 
                    </div>
                    <div className='w-full h-fit mt-[2.25vw]'>
                        <Button variant='secondary' content='Community code of conduct' svg='arrow-up-right' />
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:flex-col md:relative md:w-full md:h-fit md:px-[8vw]'>
                <div className='w-full font-black text-[4.31vw] leading-[3.7vw] mb-[3.06vw] uppercase'>
                    Our core values
                </div>
                <div className='flex flex-row gap-[3vw]'>
                    {coreValues.map((el, idx) => (
                        <OurCoreValue
                            className='flex basis-1/4'
                            key={idx}
                            title={el.title}
                            content={el.content}
                            icon={el.icon}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}