'use client'

import Link from 'next/link'
import { StrapiAuthor, StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import SVGInstagramIcon from '@/public/svgs/common/Instagram'
import SVGLinkedinIcon from '@/public/svgs/common/Linkedin'
import SVGYoutubeIcon from '@/public/svgs/common/Youtube'
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';
import ImageWrapper from '@/components/common/universal/ImageWrapper';
import { Dispatch, SetStateAction } from 'react';
import scrollToElement from '@/hooks/useScrollToElement';

interface AuthorProps {
    author: StrapiAuthor;
    contentNavigation: StrapiContentNavigation[];
    currentHeaderId: string | null; 
    onCurrentHeaderIdChange: Dispatch<SetStateAction<string | null>>
}

export default function Author({author, contentNavigation, currentHeaderId, onCurrentHeaderIdChange}: AuthorProps) {
    if(author){
        const { name, role, description, instagram_link, youtube_link, linkedin_link, profileImage } = author
        return (
            <div className='my-[5rem] lg:my-0 min-w-[28.6rem]'>
                <div className='flex flex-wrap flex-row font-host-grotesk items-center gap-[2rem] text-[#222222]'>
                    {profileImage && <div className='flex'>
                        <div className='w-[6.4rem] h-[6.4rem]'>
                            <ImageWrapper src={getStrapiMediaUrl(profileImage.url)} alt={`${name} profile image`} />
                        </div>
                    </div>}
                    <div className='flex flex-col'>
                        <h3 className='normal-case font-bold text-[2rem] leading-[2.4rem] text-[#222222]'>{name}</h3>
                        <h4 className='normal-case font-normal text-[1.6rem] leading-[2.1rem]'>{role}</h4>
                    </div>
                </div>
                <h3 className='normal-case font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10 text-[#222222]'>{description}</h3>
                <div className='flex flex-row gap-[2.4rem] mt-8 border-black border-b-2 pb-[4rem]'>
                    {instagram_link && <Link target='_blank' href={instagram_link}>
                        <SVGInstagramIcon className='w-[2.4rem] h-[2.4rem] blogSocialIcon' />
                    </Link>}
                    {linkedin_link && <Link target='_blank' href={linkedin_link}>
                        <SVGLinkedinIcon className='w-[2.4rem] h-[2.4rem] blogSocialIcon' />
                    </Link>}
                    {youtube_link && <Link target='_blank' href={youtube_link}>
                        <SVGYoutubeIcon className='w-[2.4rem] h-[2.4rem] blogSocialIcon' />
                    </Link>}
                </div>
                {contentNavigation && contentNavigation.length > 0 &&
                    <div className='flex flex-col sticky top-[10rem] font-normal text-[#222222] font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
                        <p className='font-bold text-[2rem]'>Content</p>
                        {contentNavigation.map(el => (
                            <a onClick={() => {
                                if (window.innerWidth >= 640 && window.innerWidth <= 767) {
                                    scrollToElement(el.tag, 110)
                                } else if (window.innerWidth >= 768 && window.innerWidth <= 1219) {
                                    scrollToElement(el.tag, 130)
                                } else {
                                    scrollToElement(el.tag, 140)
                                }
                                onCurrentHeaderIdChange(el.tag)
                            }} className={`cursor-pointer text-[1.6rem] hover:font-bold ${currentHeaderId === el.tag ? 'font-bold' : 'font-normal'} `} key={el.tag}>{el.content}</a>
                        ))}
                    </div>
                }
            </div>
        );
    }
    return (
        contentNavigation && contentNavigation.length > 0 && 
            <div className='lg:my-0 min-w-[28.6rem]'>
                <div className='flex flex-col font-normal text-[#222222] font-host-grotesk gap-y-[1.6rem]'>
                    <p className='font-bold text-[2rem]'>Content</p>
                    {contentNavigation.map(el => (
                        <Link href={`#${el.tag}`} className='cursor-pointer text-[1.6rem]' key={el.tag}>{el.content}</Link>
                    ))}
                </div>
            </div>
    );
};
