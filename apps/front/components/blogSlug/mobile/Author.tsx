'use client'

import ImageWrapper from '@/components/common/universal/ImageWrapper'
import { StrapiAuthor } from '@/libs/litebox-lib/types/strapi/strapiBlog'
import IMGInstagramIcon from '@/public/imgs/footer/instagramIconMobile.webp'
import IMGLinkedinIcon from '@/public/imgs/footer/linkedinIconMobile.webp'
import IMGYoutubeIcon from '@/public/imgs/footer/youtubeIconMobile.webp'
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
                    {profileImage && 
                        <div className='flex w-[6.4rem] h-[6.4rem]'>
                            <ImageWrapper src={getStrapiMediaUrl(profileImage.url)} alt={`${name} profile image`} />
                        </div>
                    }
                    <div className='flex flex-col'>
                        <h3 className='normal-case font-bold text-[1.6rem] leading-[2.4rem] text-[#222222]'>{name}</h3>
                        <h4 className='normal-case font-normal text-[1.4rem] leading-[2.1rem] text-[#222222]'>{role}</h4>
                    </div>
                </div>
                <h3 className='normal-case font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10 text-[#222222]'>{description}</h3>
                <div className='flex flex-row gap-[8.55vw] mt-8'>
                    {instagram_link && <Link target='_blank' href={instagram_link}>
                        <div className='w-[6.4vw] h-[6.4vw]'>
                            <ImageWrapper src={IMGInstagramIcon.src} alt='Instagram icon' />
                        </div>
                    </Link>}
                    {linkedin_link && <Link target='_blank' href={linkedin_link}>
                        <div className='w-[6.4vw] h-[6.4vw]'>
                            <ImageWrapper src={IMGLinkedinIcon.src} alt='Linkedin icon' />
                        </div>
                    </Link>}
                    {youtube_link && <Link target='_blank' href={youtube_link}>
                        <div className='w-[6.4vw] h-[6.4vw]'>
                            <ImageWrapper src={IMGYoutubeIcon.src} alt='Youtube icon' />
                        </div>
                    </Link>}
                </div>
            </div>
        );
    }
    return(<></>)
};
