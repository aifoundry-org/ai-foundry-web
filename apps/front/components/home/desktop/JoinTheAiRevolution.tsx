import Input from '@/libs/litebox-lib/ui/Input/Input'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGInTheNewsBackground from '@/public/pngs/home/inTheNews/background.png'
import IMGBackground from '@/public/pngs/home/joinTheAiRevolution/background.png'
import IMGComputer from '@/public/pngs/home/joinTheAiRevolution/computer.png'
import IMGArrows from '@/public/pngs/home/joinTheAiRevolution/arrows.png'
import IMGVerticalText from '@/public/pngs/home/joinTheAiRevolution/verticalText.png'
import FadeUp from '@/components/common/universal/FadeUp'

export default function JoinTheAiRevolution(){
    return (
        <div className={`hidden md:flex md:flex-col md:relative md:w-full md:h-[34vw] md:px-[5.6vw] relative ${process.env.HIDE_SECTIONS === "true" && 'mt-[15vw]'}`}>
            {process.env.HIDE_SECTIONS === "true" && 
                <div className='absolute w-full h-fit -top-[25.6vw] left-0 -z-[2]'>
                    <img src={IMGInTheNewsBackground.src} />
                </div>
            }
            <div className='absolute w-full h-fit -top-[4.3vw] left-0'>
                <img src={IMGBackground.src} />
            </div>
            <FadeUp className='relative w-fit top-[9vw] left-[6vw]' delay={0.25} duration={0.75}>
                <div className='w-fit font-dharma-gothic-e font-black text-sand text-[8.89vw] leading-[6.53vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
                <div className='relative w-[1.112vw] -top-[22.1vw] -left-[3.8vw]'>
                    <img src={IMGVerticalText.src} />
                </div>
            </FadeUp>
            <FadeUp className='relative -top-[10.9vw] left-[18.2vw] w-[15.15vw]' delay={0.75} duration={0.75}>
                <img src={IMGComputer.src} />
            </FadeUp>
            <FadeUp className='relative bottom-[28.4vw] -right-[60.7vw] flex flex-col w-[26.115vw]' delay={1.15} duration={0.75}>
                <div className='relative w-[12.71vw] -left-[2.1vw]'>
                    <img src={IMGArrows.src} />
                </div>
                {/* <p className='font-dharma-gothic-e font-black text-black text-[2.8vw] leading-[2.3vw] mt-[1.05vw] uppercase'>
                    Subscribe to our newsletter
                </p>
                <div className='flex w-full mt-[1.675vw]'>
                    <Input 
                        variant="outlined"
                        placeholder="Email"
                        className="w-full h-[4.45vw] font-host-grotesk text-[1.125vw] border-2 border-black"
                    />
                </div>
                <div className='mt-[1vw] w-full h-fit flex justify-end'>
                    <Button variant='primary' content='Submit' />
                </div> */}
            </FadeUp>
        </div>
    )
}