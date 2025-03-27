import ImageWrapper from '@/components/common/universal/ImageWrapper'
import IMGBackground from '@/public/imgs/blog/backgroundMobile.webp'
import IMGTitleErrors from '@/public/imgs/blog/titleErrorsMobile.webp'

export default function Main() {
    return (
        <div className='md:hidden flex flex-col w-full h-full'>
            <div className='flex flex-col w-[87.2vw] h-[51.2vw] mx-auto my-[6vw]'>
                <div className='flex w-full text-center justify-center relative font-dharma-gothic-e'>
                    <div className='absolute top-[3vw] left-[4vw] w-[75vw] z-0'>
                        <ImageWrapper src={IMGBackground.src} alt="Background"/>
                    </div>
                    <div className='flex z-0'>
                        <h1 className='text-[23.475vw] font-black leading-[10.67vw] uppercase pt-[13vw] pb-[7vw]'>
                            Our Blog
                        </h1>
                    </div> 
                    <div className='absolute top-[14vw] left-[4vw] w-[41.6vw] z-1'>
                        <ImageWrapper src={IMGTitleErrors.src} alt="Title errors" />
                    </div>
                </div>
                <div className='flex flex-col w-full h-full justify-center mb-[4.275vw]'>
                    <h2 className='flex font-host-grotesk text-[4.275vw] text-center normal-case font-normal leading-[6.4vw]'>
                        Stay tuned for the latest news, best<br/>practices, and updates from our community.
                    </h2>                    
                </div>
            </div>
        </div>
    )
}