import IMGLogo from '@/public/pngs/footer/logo.png'
import IMGErrorsCodes from '@/public/pngs/footer/errorCodes.png'
import IMGErrors from '@/public/pngs/footer/errorsMobile.png'
import IMGBucket from '@/public/pngs/footer/bucket.png'
import IMGArrows from '@/public/pngs/footer/arrowsMobile.png'
import IMGDots from '@/public/pngs/footer/dots.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import IMGGraffiti from '@/public/pngs/footer/graffiti.png'

export default function Footer(){
    return (
        <footer className='hidden xs:flex xs:flex-col xs:bg-orange xs:rounded-t-[1.39vw] xs:mt-[5vw]'>
           <div className='relative flex flex-col px-[6.4vw] pt-[8.55vw]'>
                <img className='absolute w-[58.27vw] -top-[3.5vw] right-0' src={IMGErrorsCodes.src} />
                <div className='relative flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <p className='font-black text-sand text-[12.5vw] leading-[9.25vw] uppercase mb-[1.67vw]'>Your new<br/>community</p>
                    <p className='font-black text-black text-[3.34vw] leading-[2.8vw] uppercase'>Thanks for joining this side</p>
                    <img className='absolute w-fit top-[11.5vw] -left-[3vw]' src={IMGErrors.src} />
                    <img className='absolute w-fit top-[5.8vw] left-[26.4vw]' src={IMGArrows.src} />
                    <img className='absolute w-[15.42vw] right-0' src={IMGLogo.src} />
                    <img className='absolute w-[7.57vw] right-0 bottom-[2.5vw]' src={IMGDots.src} />
                </div>
                <img className='absolute w-[17.22vw] top-[19vw] left-[45.5vw]' src={IMGBucket.src} />
                <div className='flex flex-row font-bold mt-[3.89vw] mb-[2.78vw] text-[1.395vw] leading-[1.395vw] uppercase justify-between'>
                    <div className='flex flex-row gap-[3.34vw]'>
                        <a href='#projects'>Projects</a>
                        <a href='#events'>Events</a>
                        <a href='#blog'>Blog</a>
                        <a href='#values'>Our Values</a>
                    </div>
                    <div className='flex flex-row gap-[3.34vw]'>
                        <a href=''>Privacy Policy</a>
                        <a href='/terms-and-conditions'>Terms Of Service</a>
                    </div>
                </div>
                <div className='relative flex flex-row justify-between pb-[6.67vw]'>
                    <div className='flex flex-row gap-[2.78vw]'>
                        <img className='w-[1.67vw] h-[1.67vw]' src={IMGInstagramIcon.src} />
                        <img className='w-[1.67vw] h-[1.67vw]' src={IMGLinkedinIcon.src} />
                        <img className='w-[1.67vw] h-[1.67vw]' src={IMGYoutubeIcon.src} />
                    </div>
                    <div className='text-end font-host-grotesk font-normal text-[0.84vw] leading-[1.25vw]'>
                        © 2024 AI Foundry. All rights reserved.
                    </div>
                    <img className='mix-blend-plus-lighter absolute w-[54.725vw] bottom-0 left-[24vw]' src={IMGGraffiti.src} />
                </div>
            </div>
        </footer>
    )
}