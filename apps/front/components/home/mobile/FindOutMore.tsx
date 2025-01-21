import SVGFindOutMoreBackground from '@/public/svgs/findOutMore/BackgroundMobile'
import SVGCodeErrors from '@/public/svgs/findOutMore/CodeErrorsMobile'
import IMGFindOutMoreTopGraffiti from '@/public/pngs/home/findOutMore/topGraffitiMobile.png'
import IMGFindOutMoreBottomGraffiti from '@/public/pngs/home/findOutMore/bottomGraffitiMobile.png'
import SVGTextAdornmentMobile from '@/public/svgs/findOutMore/TextAdornmentMobile'
import SVGTextError from '@/public/svgs/findOutMore/TextErrorMobile'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import SVGBadgeFoundryBadge from '@/public/svgs/findOutMore/FoundryBadge'
import SVGArrowDown from '@/public/svgs/findOutMore/ArrowDown'
import SVGProjectArrowDown from '@/public/svgs/findOutMore/ProjectArrowDown'
import IMGSusanAvatar from '@/public/pngs/home/findOutMore/susanAvatar.png'
import IMGMaraAvatar from '@/public/pngs/home/findOutMore/maraAvatar.png'
import SVGArrowRight from '@/public/svgs/findOutMore/ArrowRight'

export default function FindOutMore() {
    return (
        <div className='xs:hidden flex flex-col pt-[17.4vw] relative w-full h-fit'>
            <SVGFindOutMoreBackground />
            <SVGCodeErrors className='absolute w-[61.1vw] top-[8.9vw] right-0' />
            <div className='absolute w-[34vw] left-[20.8vw] top-[37.5vw] mix-blend-plus-lighter'>
                <img src={IMGFindOutMoreTopGraffiti.src} width="100%" height="100%" />
            </div>
            <div className='absolute w-[44.3vw] left-[52.5vw] top-[67.5vw] mix-blend-plus-lighter'>
                <img src={IMGFindOutMoreBottomGraffiti.src} width="100%" height="100%" />
            </div>
            <p className='absolute w-full text-center top-[40vw] uppercase font-dharma-gothic-e font-black text-[23.5vw] leading-[17.4vw] text-white'>
                Find<br/>out<br/>more
            </p>
            <SVGTextAdornmentMobile className='absolute w-[48.6vw] left-[27vw] top-[35vw]' />
            <SVGTextError className='absolute w-[32.3vw] left-[25vw] top-[47.5vw]' />
            <div className='absolute bottom-[23vw] w-full'>
                <div className='relative w-full flex justify-center'>
                    <Button svg='discord' variant='secondary' content='Join our discord' />
                </div>
            </div>
            <div className='absolute w-fit h-fit bg-black text-sand p-[1.5vw] top-[58.5vw] left-[9.5vw] rounded-lg'>
                <div className='relative font-helvetica px-[2vw] pt-[4.65vw] pb-[1vw]'>
                    <SVGBadgeFoundryBadge className='absolute -top-[4vw] left-0 w-[6.35vw] h-[6.35vw]'/>
                    <div className='text-[2.675vw] mb-[2vw] font-bold'>
                        AiFoundry.org
                        <SVGArrowDown className='inline-block w-[2vw] ml-[2.5vw]' />
                    </div>
                    <div className='flex flex-col gap-[1.2vw]'>
                        <div className='uppercase text-[1.65vw] font-bold'>
                            <SVGProjectArrowDown className='inline-block w-[2vw] mr-[1vw]' />
                            Projects
                        </div>
                        <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                            # llamagator
                        </div>
                        <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                            # project-prompt
                        </div>
                        <div className='font-light ml-[0.55vw] text-[2.1vw]'>
                            # open-llms
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute flex flex-row items-center w-fit h-fit p-[1vw] rounded-full bg-black top-[45vw] right-[6vw]'>
                <div className='flex w-[6.5vw]'>
                    <img src={IMGSusanAvatar.src} width="100%" height="100%" />
                </div>
                <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[2.75vw] text-sand'>
                    Welcome Susan!
                </div>
            </div>
            <div className='absolute flex flex-row items-center w-fit h-fit p-[1vw] rounded-full bg-black top-[54vw] right-[6vw]'>
                <div className='flex w-[6.5vw]'>
                    <img src={IMGMaraAvatar.src} width="100%" height="100%" />
                </div>
                <div className='flex w-full ml-[1vw] font-normal font-helvetica text-[2.75vw] text-sand'>
                    Glad to join this community! 
                </div>
            </div>
            <div className='absolute w-fit h-fit bg-black text-sand p-[1.5vw] bottom-[41vw] right-[17vw] rounded-lg'>
                <div className='relative font-helvetica p-[1vw]'>
                    <div className='flex flex-col gap-[2vw] font-light'>
                        <div className='ml-[0.55vw] text-[2.1vw] border-b-[0.5px] border-sand p-[1vw]'>
                            <SVGArrowRight className='inline-block w-[1.7vw]' /> Mara joined the party
                        </div>
                        <div className='ml-[0.55vw] text-[2.1vw] border-b-[0.5px] border-sand p-[1vw]'>
                            <SVGArrowRight className='inline-block w-[1.7vw]' /> Everyone welcome Nina
                        </div>
                        <div className='ml-[0.55vw] text-[2.1vw] p-[1vw]'>
                            <SVGArrowRight className='inline-block w-[1.7vw]' /> Glad you're here, Tuana!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}