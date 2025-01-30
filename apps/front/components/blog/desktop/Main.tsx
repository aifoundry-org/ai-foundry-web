import IMGBackground from '@/public/pngs/blog/background.png'
import IMGTitleErrors from '@/public/pngs/blog/titleErrors.png'

export default function main() {
    return (
        <div className='hidden md:flex md:flex-col md:w-full md:h-full'>
            <div className='flex flex-col w-[87.2vw] h-[51.2vw] mx-auto my-[6vw]'>
                <div className='flex flex-col w-full text-center relative'>
                    <img className='absolute top-0 left-0 w-full z-0' src={IMGBackground.src} />
                    <div className='relative flex text-[16.115vw] w-full justify-center font-black font-dharma-gothic-e leading-[10.67vw] uppercase pt-[3vw] pb-[2.225vw] z-0'>
                        Our Blog
                    </div> 
                    <img className='absolute top-[8.3vw] left-[14.8vw] w-[20.91vw] z-1' src={IMGTitleErrors.src} />
                    <div className='relative flex w-full justify-center font-host-grotesk text-[1.39vw] text-center mb-[4.275vw]'>
                        Stay tuned for the latest news, best practices,<br/>and updates from our community.
                    </div>
                </div>
            </div>
        </div>
    )
}