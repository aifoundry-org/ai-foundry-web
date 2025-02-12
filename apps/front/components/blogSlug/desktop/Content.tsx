'use client'
import { useEffect, useState } from 'react';
import { StrapiArticle, StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface ContentProps {
    article: StrapiArticle;
}

export default function Content({article}: ContentProps) {
    // Hack to enable the youtube video in an iframe and 
    // pass it to the dangerouslySetInnerHTML attribute of the div
    const [isClient, setIsClient] = useState(false);
    const { paragraphs } = article;

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className='max-w-[80.3rem]'>
            {paragraphs.map((paragraph: StrapiParagraph) => (
                <div className={`flex flex-col ${paragraph.alternativeStyle ? 'font-black text-[4rem] font-dharma-gothic-e text-orange uppercase leading-[3.3rem]' : 'font-normal text-[1.6rem] font-host-grotesk'} gap-y-[2.4rem] mb-[2.4rem]`} key={paragraph.id} id={paragraph.tag} dangerouslySetInnerHTML={{__html: paragraph.content[0].children[0].text}}></div>
            ))}
        </div>
    );
};
