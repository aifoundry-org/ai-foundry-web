'use client';
/* eslint-disable */
import React from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import IMGInstagramIcon from '@/public/pngs/blogSlug/instagramIcon.png'
import IMGLinkedinIcon from '@/public/pngs/blogSlug/linkedinIcon.png'
import IMGXIcon from '@/public/pngs/blogSlug/xIcon.png'

type SocialNetwork = 'x' | 'linkedin' | 'instagram';

const socialBaseUrls: Record<SocialNetwork, string> = {
    x: 'https://x.com/intent/tweet',
    linkedin: 'https://www.linkedin.com/shareArticle',
    instagram: 'https://www.instagram.com/',
};

interface SocialParams {
    url: string;
    title: string;
    text: string;
    summary: string;
    source: string;
}

const createSocialShareUrl = (network: SocialNetwork, params: SocialParams): string => {
    const baseUrl = socialBaseUrls[network];
    const queryParams = new URLSearchParams({
        url: params.url,
        ...(params.text && { text: params.text }),
        ...(params.title && { title: params.title }),
        ...(params.summary && { summary: params.summary }),
        ...(params.source && { source: params.source }),
    }).toString();
    return `${baseUrl}?${queryParams}`;
};

interface SocialShareLinkProps {
    platform: SocialNetwork;
    title: string;
    articleContent: string;
    className?: string;
}

const SocialShareLink = ({ platform, title, articleContent, className }: SocialShareLinkProps) => {
    const currentUrl = usePathname();
    const socialParams: SocialParams = {
        url: currentUrl,
        title,
        text: `Check out this article: ${title}`,
        summary: `${articleContent.slice(0, 100)}...`,
        source: 'Resolve',
    };

    const shareUrl = createSocialShareUrl(platform, socialParams);

    const icons: Record<SocialNetwork, React.ReactNode> = {
        x: <img className={className} src={IMGXIcon.src} />,
        linkedin: <img className={className} src={IMGLinkedinIcon.src} />,
        instagram: <img className={className} src={IMGInstagramIcon.src} />,
    };

    return (
        <Link href={shareUrl} target='_blank' rel='noopener noreferrer'>
            {icons[platform]}
        </Link>
    );
};

export default SocialShareLink;
