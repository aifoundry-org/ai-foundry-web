import IMGBackground from '@/public/imgs/home/joinTheAiRevolution/backgroundMobile.webp'
import IMGComputer from '@/public/imgs/home/joinTheAiRevolution/computer.webp'
import IMGVerticalText from '@/public/imgs/home/joinTheAiRevolution/verticalTextMobile.webp'
import IMGArrows from '@/public/imgs/home/joinTheAiRevolution/arrowsMobile.webp'
import FadeUp from '@/components/common/universal/FadeUp'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function JoinTheAiRevolution(){
    return (
        <div className={`md:hidden flex flex-col relative w-full h-[160vw] px-[5.6vw] mt-[10vw] mb-[7.0vw] ${process.env.NEXT_PUBLIC_HIDE_SECTIONS === "true" && 'mt-[35vw]'}`}>
            <div className='absolute w-full top-0 left-0'>
                <ImageWrapper src={IMGBackground.src} alt="Join the AI Revolution background"/>
            </div>
            <FadeUp className='relative w-fit top-[34vw] left-[13vw]' delay={0.25} duration={0.75}>
                <div className='w-fit font-dharma-gothic-e font-black text-sand text-[17.07vw] leading-[12.55vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
                <div className='relative w-[4.275vw] -top-[47vw] -left-[11vw]'>
                    <ImageWrapper src={IMGVerticalText.src} alt='Vertical text' />
                </div>
            </FadeUp>
            <FadeUp className='relative -top-[36vw] -right-[48.5vw] w-[38.15vw]' delay={0.75} duration={0.75}>
                <ImageWrapper src={IMGComputer.src} alt='Computer' />
            </FadeUp>
            <FadeUp className='relative bottom-[25vw] -right-[1vw] flex flex-col w-[87.2vw]' delay={1.15} duration={0.75}>
                <div className='relative w-[36.6vw] bottom-[3.5vw] left-[49.1vw]'>
                    <ImageWrapper src={IMGArrows.src} alt='Arrows' />
                </div>
                {/* <p className='font-dharma-gothic-e font-black text-black text-[8.55vw] leading-[7vw] uppercase'>
                    Subscribe to our newsletter
                </p>
                <div className='flex w-full mt-[6vw]'>
                    <Input 
                        variant="outlined"
                        placeholder="Email"
                        className="w-full h-[14.15vw] font-host-grotesk text-[3.75vw] border-2 border-black"
                    />
                </div>
                <div className='mt-[6vw] w-full h-fit flex justify-end'>
                    <Button variant='primary' content='Submit' />
                </div> */}
            </FadeUp>
        </div>
    )
}