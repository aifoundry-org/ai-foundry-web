'use client'
/* eslint-disable */

import { StrapiAuthor } from '@/libs/litebox-lib/types/strapi/strapiBlog'
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl'
import Link from 'next/link'

interface AuthorProps {
    author: StrapiAuthor;
}

export default function Author({author}: AuthorProps) {
    if(author){
        const { name, role, description, instagram_link, youtube_link, linkedin_link, profileImage } = author

        return (
            <div>
                <div className='flex flex-row font-host-grotesk items-center gap-x-[2rem] pt-12 border-t-2 border-black'>
                    {profileImage && <div className='flex w-[6.4rem] h-[6.4rem]'>
                        <img src={getStrapiMediaUrl(profileImage.url)} />
                    </div>}
                    <div className='flex flex-col'>
                        <p className='font-bold text-[1.6rem] leading-[2.4rem] text-[#222222]'>{name}</p>
                        <p className='font-normal text-[1.4rem] leading-[2.1rem] text-[#222222]'>{role}</p>
                    </div>
                </div>
                <p className='font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10 text-[#222222]'>{description}</p>
                <div className='flex flex-row gap-[8.55vw] mt-8'>
                    {instagram_link && <Link target='_blank' href={instagram_link}>
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGInstagramIcon.src} />
                    </Link>}
                    {linkedin_link && <Link target='_blank' href={linkedin_link}>
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGLinkedinIcon.src} />
                    </Link>}
                    {youtube_link && <Link target='_blank' href={youtube_link}>
                        <img className='w-[6.4vw] h-[6.4vw]' src={IMGYoutubeIcon.src} />
                    </Link>}
                </div>
            </div>
        );
    }
    return(<></>)
};
