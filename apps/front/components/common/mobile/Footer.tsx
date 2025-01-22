import IMGLogo from '@/public/pngs/footer/logoMobile.png'
import IMGErrors from '@/public/pngs/footer/errorsMobile.png'
import IMGBucket from '@/public/pngs/footer/bucketMobile.png'
import IMGArrows from '@/public/pngs/footer/arrowsMobile.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import IMGGraffiti from '@/public/pngs/footer/graffitiMobile.png'

export default function Footer(){
    return (
        <footer className='xs:hidden flex flex-col bg-orange rounded-t-[5.335vw]'>
            <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw]'>
                <img className='absolute w-1/4 top-[49vw] right-0' src={IMGBucket.src} />
                <div className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <img className='w-[33.1vw] mb-[6.4vw]' src={IMGLogo.src} />
                    <p className='font-black text-sand text-[19.2vw] leading-[14.15vw] uppercase mb-[4.275vw]'>Your new<br/>community</p>
                    <p className='font-black text-black text-[10.675vw] leading-[8.8vw] uppercase'>Thanks for<br/>joining this side</p>
                    <div className='absolute w-[33.95vw] top-[36vw] -left-[3vw]'>
                        <img src={IMGErrors.src} />
                    </div>
                    <div className='absolute w-[32.27vw] top-[27vw] left-[36vw]'>
                        <img src={IMGArrows.src} />
                    </div>
                </div>
                <div className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[10vw] justify-between uppercase'>
                    <a href='#projects'>Projects</a>
                    <a href='#events'>Events</a>
                    <a href='#blog'>Blog</a>
                    <a href='#values'>Our Values</a>
                </div>
                <div className='flex flex-row font-bold text-[5vw] leading-[3vw] mt-[6.4vw] mb-[10.675vw] justify-between uppercase'>
                    <a href=''>Privacy Policy</a>
                    <a href='/terms-and-conditions'>Terms Of Service</a>
                </div>
                <div className='relative flex flex-row justify-between pb-[21vw]'>
                    <div className='flex flex-row gap-[8.55vw]'>
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGInstagramIcon.src} />
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGLinkedinIcon.src} />
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGYoutubeIcon.src} />
                    </div>
                    <div className='text-end font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw]'>
                        © 2024 AI Foundry.<br/>
                        All rights reserved.
                    </div>
                    <img className='mix-blend-plus-lighter absolute w-[83.2vw] bottom-0 left-[4.5vw]' src={IMGGraffiti.src} />
                </div>
            </div>
        </footer>
    )
}