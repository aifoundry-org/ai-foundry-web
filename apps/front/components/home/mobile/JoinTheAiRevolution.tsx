import Input from '@/libs/litebox-lib/ui/Input/Input'
import IMGInTheNewsBackground from '@/public/pngs/home/inTheNews/backgroundMobile.png'
import IMGBackground from '@/public/pngs/home/joinTheAiRevolution/backgroundMobile.png'
import IMGComputer from '@/public/pngs/home/joinTheAiRevolution/computer.png'
import IMGVerticalText from '@/public/pngs/home/joinTheAiRevolution/verticalTextMobile.png'
import IMGArrows from '@/public/pngs/home/joinTheAiRevolution/arrowsMobile.png'
import FadeUp from '@/components/common/universal/FadeUp'
import Button from '@/libs/litebox-lib/ui/Button/Button'

export default function JoinTheAiRevolution(){
    return (
        <div className={`md:hidden flex flex-col relative w-full h-[160vw] px-[5.6vw] mt-[5.6vw] mb-[7.0vw] ${process.env.HIDE_SECTIONS === "true" && 'mt-[65vw]'}`}>
            {process.env.HIDE_SECTIONS === "true" && 
                <div className='absolute w-full h-fit -top-[86vw] left-0 -z-[2]'>
                    <img src={IMGInTheNewsBackground.src} />
                </div>
            }
            <div className='absolute w-full h-fit top-[22vw] left-0'>
                <img src={IMGBackground.src} width="100%" alt="Join the AI Revolution background" />
            </div>
            <FadeUp className='relative w-fit top-[34vw] left-[13vw]' delay={0.25} duration={0.75}>
                <div className='w-fit font-dharma-gothic-e font-black text-sand text-[17.07vw] leading-[12.55vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
                <div className='relative w-[4.275vw] -top-[47vw] -left-[11vw]'>
                    <img src={IMGVerticalText.src} />
                </div>
            </FadeUp>
            <FadeUp className='relative -top-[36vw] -right-[48.5vw] w-[38.15vw]' delay={0.75} duration={0.75}>
                <img src={IMGComputer.src} />
            </FadeUp>
            <FadeUp className='relative bottom-[25vw] -right-[1vw] flex flex-col w-[87.2vw]' delay={1.15} duration={0.75}>
                <div className='relative w-[36.6vw] bottom-[3.5vw] left-[49.1vw]'>
                    <img src={IMGArrows.src} />
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