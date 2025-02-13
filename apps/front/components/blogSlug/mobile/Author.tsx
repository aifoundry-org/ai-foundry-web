'use client'
/* eslint-disable */
import IMGTanyaAvatar from '@/public/pngs/blogSlug/tanyaAvatarMobile.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import Link from 'next/link'

export default function Author() {
    return (
        <div>
            <div className='flex flex-row font-host-grotesk items-center gap-x-[2rem] pt-12 border-t-2 border-neutral-900'>
                <div className='flex w-[6.4rem] h-[6.4rem]'>
                    <img src={IMGTanyaAvatar.src} />
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-[1.6rem] leading-[2.4rem]'>Tanya Dadasheva</p>
                    <p className='font-normal text-[1.4rem] leading-[2.1rem['>Founder and CTO</p>
                </div>
            </div>
            <p className='font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10'>Co-founder of Ainekko and AIFoundry.org, building an Open Source AI future; ex-VC, OSS policy maker, and mission-driven entrepreneur.</p>
            <div className='flex flex-row gap-[8.55vw] mt-8'>
                <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGInstagramIcon.src} />
                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/tanya-dadasheva/'>
                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGLinkedinIcon.src} />
                </Link>
                <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                    <img className='w-[6.4vw] h-[6.4vw]' src={IMGYoutubeIcon.src} />
                </Link>
            </div>
        </div>
    );
};
