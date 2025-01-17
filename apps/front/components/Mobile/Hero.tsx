import SVGIconHamburger from '@/public/svgs/common/Hamburger';
import AIFoundryLogoTop from '@/public/pngs/common/AIFoundryLogoTopMobile.png';
import SVGPaperBackgroundMobile from '@/public/svgs/hero/PaperBackgroundMobile';

export default function Hero() {
    return (
        <div className='xs:hidden block relative bg-black'>
            <div className='relative flex flex-col w-full bg-sand rounded-t-lg'>
                <div className='relative w-full h-[95.5vw] flex flex-col gap-y-[6vw]'>
                    <div className='absolute w-full'>
                        <SVGPaperBackgroundMobile />
                    </div>
                    <div className='absolute w-full flex flex-row items-center pt-10 pb-4 px-[2.4rem]'>
                        <div className='flex basis-[50%] w-full mx-auto justify-start'>
                            <div className='w-[40.3vw]'>
                                <img src={AIFoundryLogoTop.src} />
                            </div>
                        </div>
                        <div className='flex basis-[50%] w-full justify-end'>
                            <SVGIconHamburger />
                        </div>
                    </div>
                    <div className='absolute w-full top-[36vw]'>
                        <p className='uppercase text-[23.5vw] leading-[17.4vw] text-center font-black'>
                            An open AI<br/>community<br/>for all
                        </p>
                    </div>
                </div>
                <div className='relative w-full'>
                    <p className='text-center text-[1.6rem] px-[2.5rem] font-normal font-host-grotesk'>
                        We are a community of practitioners building an open-source, composable AI ecosystem. Our goal is to reduce the complexity of the AI industry. Join our thriving community and share, collaborate and innovate with us.
                    </p>
                </div>
            </div>
        </div>
    )
}