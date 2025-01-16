import Input from '@/libs/litebox-lib/ui/Input/Input'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGBackground from '@/public/pngs/joinTheAiRevolution/background.png'
import IMGComputer from '@/public/pngs/joinTheAiRevolution/computer.png'

export default function JoinTheAiRevolution(){
    return (
        <div className='hidden md:flex md:flex-col md:relative md:w-full md:h-fit md:px-[5.6vw]'>
            <div className='absolute w-full h-fit top-0 left-0'>
                <img src={IMGBackground.src} width="100%" alt="Vision & Mission Section" />
            </div>
            <div className='absolute w-fit font-dharma-gothic-e font-black text-sand text-[8.89vw] leading-[6.53vw] uppercase top-[9.1vw] left-[11.15vw]'>
                Join the ai<br/>revolution<br/>today
            </div>
            <div className='absolute w-[15.15vw] top-[23vw] left-[23.3vw]'>
                <img src={IMGComputer.src} />
            </div>
            <div className='flex flex-col absolute w-[26.115vw] top-[21vw] right-[8vw]'>
                <p className='font-dharma-gothic-e font-black text-black text-[2.8vw] leading-[2.3vw] uppercase'>
                    Subscribe to our newsletter
                </p>
                <div className='flex w-full mt-[1.675vw]'>
                    <Input 
                        variant="outlined"
                        placeholder="Email"
                        className="w-full h-[4.45vw] font-host-grotesk text-[1.125vw] border-2 border-black"
                    />
                </div>
                <div className='mt-[3.2vw] w-full h-fit justify-end'>
                    <Button labelProps='w-[2.705vw] h-[1.39vw]' variant='primary' content='Submit' />
                </div>
            </div>
        </div>
    )
}