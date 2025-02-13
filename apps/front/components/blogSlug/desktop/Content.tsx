'use client'
/* eslint-disable */
import { useEffect, useState } from 'react';
import { StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface ContentProps {
    paragraphs: StrapiParagraph[];
}

export default function Content({paragraphs}: ContentProps) {
    // Hack to enable the youtube video in an iframe and 
    // pass it to the dangerouslySetInnerHTML attribute of the div
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className='max-w-[80.3rem]'>
            {paragraphs.map((paragraph: StrapiParagraph) => (
                <div key={paragraph.id} id={paragraph.tag} className={`flex flex-col ${paragraph.alternativeStyle ? 'font-black text-[4rem] font-dharma-gothic-e text-orange uppercase leading-[3.3rem]' : 'font-normal text-[1.6rem] font-host-grotesk'} gap-y-[2.4rem] mb-[2.4rem]`} dangerouslySetInnerHTML={{__html: paragraph.content[0].children[0].text}}></div>
            ))}
        </div>
    );
};
