'use client';
 
import { useEffect, useMemo, useState } from 'react';
import { StrapiContentNavigation, StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import scrollToElement from '@/hooks/useScrollToElement';

interface ContentProps {
  paragraphs: StrapiParagraph[];
  contentNavigation: StrapiContentNavigation[];
}

export default function Content({ paragraphs, contentNavigation }: ContentProps) {
  const memoParagraphs = useMemo(() => {
    return paragraphs && paragraphs.length > 0 && paragraphs.map((paragraph: StrapiParagraph) => (
      <div
        key={`${paragraph.id}-mobile`}
        id={`${paragraph.tag}-mobile`}
        className={`anchor flex flex-col ${
          paragraph.alternativeStyle
            ? 'font-black text-[3.2rem] font-dharma-gothic-e text-orange uppercase leading-[2.6rem]'
            : 'font-normal text-[1.4rem] font-host-grotesk'
        } gap-y-[1.6rem] mb-[4rem]`}
        dangerouslySetInnerHTML={{__html: paragraph.content.flatMap((el) => el.children.flatMap((el: {type:string, text: string}) => el.text)).join('')}}></div>
    ))
  }, [paragraphs])

  // Hack to enable the youtube video in an iframe and
  // pass it to the dangerouslySetInnerHTML attribute of the div
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='mb-16'>
      <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] mb-[4rem] text-[#222222]'>
      {contentNavigation && contentNavigation.length > 0 && 
        <>
          <p className='font-bold text-[1.6rem]'>Content</p>
          {contentNavigation.map(el => (
            <a onClick={() => {
              scrollToElement(el.tag+'-mobile', 122)
            }} className='cursor-pointer' key={el.tag}>
              {el.content}
            </a>
          ))}
        </>
      }
      </div>
      {memoParagraphs}
    </div>
  );
}
