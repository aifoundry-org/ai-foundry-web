import ImageWrapper from '@/components/common/universal/ImageWrapper'
import IMGBackground from '@/public/imgs/blog/background.webp'
import IMGTitleErrors from '@/public/imgs/blog/titleErrors.webp'

export default function Main() {
    return (
        <div className='hidden md:flex md:flex-col md:w-full md:h-full'>
            <div className='flex flex-col w-[87.2vw] h-[24vw] mx-auto my-[6vw]'>
                <div className='flex flex-col w-full text-center relative'>
                    <div className='absolute top-0 left-0 w-full z-0'>
                        <ImageWrapper src={IMGBackground.src} alt="Background" />
                    </div>
                    <div className='relative flex w-full justify-center z-0'>
                        <h1 className='font-black text-[16.115vw] font-dharma-gothic-e leading-[10.67vw] uppercase pt-[3vw] pb-[2.225vw]'>
                            Our Blog
                        </h1>
                    </div> 
                    <div className='absolute top-[8.3vw] left-[14.8vw] w-[20.91vw] z-1'>
                        <ImageWrapper src={IMGTitleErrors.src} alt="Title errors" />
                    </div>
                    <div className='relative flex w-full justify-center'>
                        <h2 className='font-host-grotesk text-[1.39vw] font-normal text-center mb-[4.275vw] normal-case leading-[2.1vw]'>
                            Stay tuned for the latest news, best practices,<br/>and updates from our community.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}