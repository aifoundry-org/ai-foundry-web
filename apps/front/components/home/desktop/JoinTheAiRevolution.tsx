// import Input from '@/libs/litebox-lib/ui/Input/Input'
// import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/imgs/home/joinTheAiRevolution/background.webp'
import IMGComputer from '@/public/imgs/home/joinTheAiRevolution/computer.webp'
import IMGArrows from '@/public/imgs/home/joinTheAiRevolution/arrows.webp'
import IMGVerticalText from '@/public/imgs/home/joinTheAiRevolution/verticalText.webp'
import FadeUp from '@/components/common/universal/FadeUp'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function JoinTheAiRevolution(){
    return (
        <div className={`hidden md:flex md:flex-col md:relative md:w-full md:h-[34vw] md:px-[5.6vw] relative mt-[15vw] ${process.env.NEXT_PUBLIC_HIDE_SECTIONS === "true" && 'mt-[15vw]'}`}>
            <div className='absolute w-full h-fit -top-[4.3vw] left-0'>
                <ImageWrapper src={IMGBackground.src} alt='Background' />
            </div>
            <FadeUp className='relative w-fit top-[9vw] left-[6vw]' delay={0.25} duration={0.75}>
                <div className='w-fit font-dharma-gothic-e font-black text-sand text-[8.89vw] leading-[6.53vw] uppercase'>
                    Join the ai<br/>revolution<br/>today
                </div>
                <div className='relative w-[1.112vw] -top-[22.1vw] -left-[3.8vw]'>
                    <ImageWrapper src={IMGVerticalText.src} alt='Vertical text' />
                </div>
            </FadeUp>
            <FadeUp className='relative -top-[10.9vw] left-[18.2vw] w-[15.15vw]' delay={0.5} duration={0.75}>
                <ImageWrapper src={IMGComputer.src} alt='Computer' />
            </FadeUp>
            <FadeUp className='relative bottom-[28.4vw] -right-[60.7vw] flex flex-col w-[26.115vw]' delay={0.5} duration={0.75}>
                <div className='relative w-[12.71vw] -left-[2.1vw]'>
                    <ImageWrapper src={IMGArrows.src} alt='Arrows' />
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