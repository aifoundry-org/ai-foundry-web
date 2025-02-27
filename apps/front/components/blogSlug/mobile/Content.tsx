'use client';
 

import { useEffect, useState } from 'react';
import { StrapiContentNavigation, StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Link from 'next/link';

interface ContentProps {
  paragraphs: StrapiParagraph[];
  contentNavigation: StrapiContentNavigation[];
}

export default function Content({ paragraphs, contentNavigation }: ContentProps) {
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
            <Link href={`#${el.tag}-mobile`} className='cursor-pointer' key={el.tag}>
              {el.content}
            </Link>
          ))}
        </>
      }
      </div>
      {paragraphs && paragraphs.length > 0 && paragraphs.map((paragraph: StrapiParagraph) => (
        <div
          key={`${paragraph.id}-mobile`}
          id={`${paragraph.tag}-mobile`}
          className={`flex flex-col ${
            paragraph.alternativeStyle
              ? 'font-black text-[3.2rem] font-dharma-gothic-e text-orange uppercase leading-[2.6rem]'
              : 'font-normal text-[1.4rem] font-host-grotesk'
          } gap-y-[1.6rem] mb-[4rem]`}
          dangerouslySetInnerHTML={{ __html: paragraph.content[0].children[0].text }}></div>
      ))}
    </div>
  );
}
