import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/home/visionMission/backgroundMobile.png'
import OurCoreValue from './VisionMissionCard'
import Link from 'next/link'
import FadeUp from '@/components/common/universal/FadeUp'

const coreValues = [{
    title: "Openness",
    content: "We don't just mean you can use our tools, we mean you are free to use it however you want.",
    icon: "open-book",
    delay: 0.2
},{
    title: "Integrity",
    content: "Honesty, ethics, and follow-through foster trust within the community.",
    icon: "user",
    delay: 0.5,
},{
    title: "Emphaty",
    content: "Our community members are mindful and curious about other people’s motivations and ideas and help each other with compassion and kindness.",
    icon: "handshake",
    delay: 0.7,
},{
    title: "Cooperation",
    content: "Our community seeks win-win solutions with mutually beneficial outcomes.",
    icon: "cooperation",
    delay: 1,
}]

export default function VisionMission(){
    return (
        <div className='md:hidden flex flex-col relative w-full h-fit my-[14.2vw] px-[5.6vw]'>
            <div className='absolute w-full h-fit -top-[3.5vw] left-0 z-[1]'>
                <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
            </div>
            <div className='mt-[11vw] z-0 font-black font-dharma-gothic-e text-orange text-[19.2vw] leading-[14.25vw] uppercase'>
                Vision<br/>& Mission
            </div>
            <div className='mt-[8.55vw] z-0 font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw] uppercase'>
                Our long-term vision is to help the industry evolve to a structure where model training and deployment for any company are open, transparent, and concise.
            </div>
            <div className='mt-[8.55vw] font-normal font-host-grotesk text-[3.75vw] leading-[5.6vw]'>
                We desire to see the industry aligned on the principles of how those systems are structured at<br/>a high level from which every company can<br/>deploy its own engine or system, configured the<br/>way each specific company needs it. This approach will lower risks and improve AI results for all companies and practitioners. Therefore, we foster, build, and support projects that can<br/>become the engineering foundation of such training and deployment systems. We support practitioners willing to benefit from AI in their work and life, specifically models and their fine-tuning and deployment.
                <br/><br/>
                We are a community of practitioners building an open-source composable AI ecosystem. By collaborating on standards for everyone, we aim to reduce the complexity of the AI industry. 
            </div>
            <div id='values-mobile' className='mt-[7.475vw] w-full h-fit'>
                <Button as={Link} href='/terms-and-conditions' variant='secondary' content='Community code of conduct' svg='arrow-up-right' />
            </div>
            <div className='mt-[19.2vw] mb-[11.2vw] font-black font-dharma-gothic-e text-[12.8vw] leading-[10.7vw] uppercase'>
                Our core values
            </div>
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