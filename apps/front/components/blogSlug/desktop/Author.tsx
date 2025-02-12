'use client'

import Link from 'next/link'
import { StrapiAuthor, StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGInstagramIcon from '@/public/pngs/footer/instagramIconMobile.png'
import IMGLinkedinIcon from '@/public/pngs/footer/linkedinIconMobile.png'
import IMGYoutubeIcon from '@/public/pngs/footer/youtubeIconMobile.png'

interface AuthorProps {
    author: StrapiAuthor;
    contentNavigation: StrapiContentNavigation[];
}

export default function Author({author, contentNavigation}: AuthorProps) {
    const { name, role, description, instagram_link, youtube_link, linkedin_link, profileImage } = author
    return (
        <div className='my-[5rem] lg:my-0 min-w-[28.6rem]'>
            <div className='flex flex-wrap flex-row font-host-grotesk items-center gap-[2rem]'>
                <div className='flex'>
                    <img className='w-[6.4rem] h-[6.4rem]' src={`${process.env.STRAPI_BASE_URL}${profileImage.url}`} />
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-[2rem] leading-[2.4rem]'>{name}</p>
                    <p className='font-normal text-[1.6rem] leading-[2.1rem['>{role}</p>
                </div>
            </div>
            <p className='font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10'>{description}</p>
            <div className='flex flex-row gap-[2.4rem] mt-8 border-neutral-900 border-b-2 pb-[4rem]'>
                {instagram_link && <Link target='_blank' href={instagram_link}>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGInstagramIcon.src} />
                </Link>}
                {linkedin_link && <Link target='_blank' href={linkedin_link}>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGLinkedinIcon.src} />
                </Link>}
                {youtube_link && <Link target='_blank' href={youtube_link}>
                    <img className='w-[2.4rem] h-[2.4rem]' src={IMGYoutubeIcon.src} />
                </Link>}
            </div>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
                <p className='font-bold text-[1.6rem]'>Content</p>
                {contentNavigation.map(el => (
                    <Link href={`#${el.tag}`} className='cursor-pointer' key={el.tag}>{el.content}</Link>
                ))}
            </div>
        </div>
    );
};
