'use client'

import IMGTanyaAvatar from '@/public/pngs/blogSlug/tanyaAvatarMobile.png'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import Link from 'next/link'

export default function Author() {
    return (
        <div className='my-[5rem] lg:my-0 min-w-[28.6rem]'>
            <div className='flex flex-wrap flex-row font-host-grotesk items-center gap-[2rem]'>
                <div className='flex'>
                    <img className='w-[6.4rem] h-[6.4rem]' src={IMGTanyaAvatar.src} />
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-[2rem] leading-[2.4rem]'>Tanya Dadasheva</p>
                    <p className='font-normal text-[1.6rem] leading-[2.1rem['>Founder and CTO</p>
                </div>
            </div>
            <p className='font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10'>Co-founder of Ainekko and AIFoundry.org, building an Open Source AI future; ex-VC, OSS policy maker, and mission-driven entrepreneur.</p>
            <div className='flex flex-row gap-[2.4rem] mt-8 border-neutral-900 border-b-2 pb-[4rem]'>
                <Link target='_blank' href='https://www.instagram.com/ai.foundry/'>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGInstagramIcon.src} />
                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/tanya-dadasheva/'>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGLinkedinIcon.src} />
                </Link>
                <Link target='_blank' href='https://www.youtube.com/channel/UCGktaVJ19Ze8J9auyD5IoDQ'>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGYoutubeIcon.src} />
                </Link>
            </div>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
                <p className='font-bold text-[1.6rem]'>Content</p>
                <p>Lorem Ipsum sit amet</p>
                <p>Dignissim In elit</p>
                <p>Vitae sed volutpat</p>
                <p>Laoreet quisque</p>
                <p>Lorem Ipsum sit amet</p>
            </div>
        </div>
    );
};
