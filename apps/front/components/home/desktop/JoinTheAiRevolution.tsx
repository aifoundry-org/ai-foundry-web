import Input from '@/libs/litebox-lib/ui/Input/Input'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/home/joinTheAiRevolution/background.png'
import IMGComputer from '@/public/pngs/home/joinTheAiRevolution/computer.png'
import IMGArrows from '@/public/pngs/home/joinTheAiRevolution/arrows.png'
import IMGVerticalText from '@/public/pngs/home/joinTheAiRevolution/verticalText.png'
import FadeUp from '@/components/common/universal/FadeUp'

export default function JoinTheAiRevolution(){
    return (
        <div className='hidden md:flex md:flex-col md:relative md:w-full md:h-[34vw] md:px-[5.6vw] relative'>
            <div className='absolute w-full h-fit -top-[4.3vw] left-0'>
                <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
            </div>
            <FadeUp delay={0.25} duration={0.75}>
                <div className='relative top-[9vw] left-[6vw] w-fit font-dharma-gothic-e font-black text-sand text-[8.89vw] leading-[6.53vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
                <div className='relative w-[1.112vw] -top-[13.2vw] left-[2.15vw]'>
                    <img src={IMGVerticalText.src} />
                </div>
            </FadeUp>
            <FadeUp delay={0.75} duration={0.75}>
                <div className='relative -top-[10.9vw] left-[18.2vw] w-[15.15vw]'>
                    <img src={IMGComputer.src} />
                </div>
            </FadeUp>
            <FadeUp delay={1.15} duration={0.75}>
                <div className='relative bottom-[28.4vw] -right-[60.7vw] flex flex-col w-[26.115vw]'>
                    <div className='relative w-[12.71vw] -left-[2.1vw]'>
                        <img src={IMGArrows.src} />
                    </div>
                    <p className='font-dharma-gothic-e font-black text-black text-[2.8vw] leading-[2.3vw] mt-[1.05vw] uppercase'>
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
                        <Button labelProps='w-[2.705vw] h-[1.39vw]' variant='primary' content='Submit' />
                    </div>
                </div>
            </FadeUp>
        </div>
    )
}