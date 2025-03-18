'use client'
 
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import useOnEnterView from '@/hooks/useOnEnterView';

interface ContentProps {
    paragraphs: StrapiParagraph[];
    onCurrentHeaderIdChange: Dispatch<SetStateAction<string | null>>;
}

export default function Content({paragraphs, onCurrentHeaderIdChange}: ContentProps) {
    const memoParagraphs = useMemo(() => {
        return paragraphs && paragraphs.length > 0 && paragraphs.map((paragraph: StrapiParagraph) => (
            <div 
                key={paragraph.id} 
                id={paragraph.tag} 
                className={`anchor flex flex-col ${paragraph.alternativeStyle ? 'font-black text-[4rem] font-dharma-gothic-e text-orange uppercase leading-[3.3rem]' : 'font-normal text-[1.6rem] font-host-grotesk text-dark'} gap-y-[2.4rem] mb-[2.4rem]`} 
                dangerouslySetInnerHTML={{__html: paragraph.content.flatMap((el) => el.children.flatMap((el: {type:string, text: string}) => el.text)).join('')}} 
            />
        ))
    }, [paragraphs])
    
    useOnEnterView({
        onEnterView: onCurrentHeaderIdChange,
        options: { rootMargin: '-20% 0px -100% 0px', threshold: 0 },
        selectors: ['.anchor'],
    });
    
    // Hack to enable the youtube video in an iframe and 
    // pass it to the dangerouslySetInnerHTML attribute of the div
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className='max-w-[80.3rem]'>
            {memoParagraphs}
        </div>
    );
};
