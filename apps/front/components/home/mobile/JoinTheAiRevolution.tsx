import Input from '@/libs/litebox-lib/ui/Input/Input'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/home/joinTheAiRevolution/backgroundMobile.png'
import IMGComputer from '@/public/pngs/home/joinTheAiRevolution/computer.png'
import FadeUp from '@/components/common/universal/FadeUp'

export default function JoinTheAiRevolution(){
    return (
        <div className='md:hidden flex flex-col relative w-full h-[160vw] px-[5.6vw] mt-[5.6vw] mb-[7.0vw]'>
            <div className='absolute w-full h-fit top-[22vw] left-0'>
                <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
            </div>
            <FadeUp delay={0.1} duration={1}>
                <div className='relative top-[36vw] left-[11vw] w-fit font-dharma-gothic-e font-black text-sand text-[16vw] leading-[12.55vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
            </FadeUp>
            <FadeUp delay={0.2} duration={1}>
                <div className='relative top-[17vw] -right-[44vw] w-[38.15vw]'>
                    <img src={IMGComputer.src} />
                </div>
            </FadeUp>
            <FadeUp delay={0.3} duration={1}>
                <div className='relative -bottom-[32vw] -right-[1vw] flex flex-col w-[87.2vw]'>
                    <p className='font-dharma-gothic-e font-black text-black text-[8.55vw] leading-[7vw] uppercase'>
                        Subscribe to our newsletter
                    </p>
                    <div className='flex w-full mt-[6vw]'>
                        <Input 
                            variant="outlined"
                            placeholder="Email"
                            className="w-full h-[14.15vw] font-host-grotesk text-[3.75vw] border-2 border-black"
                        />
                    </div>
                    <div className='mt-[3.2vw] w-full h-fit'>
                        <Button labelProps='w-[15vw] h-[6.7vw]' variant='primary' content='Submit' />
                    </div>
                </div>
            </FadeUp>
        </div>
    )
}