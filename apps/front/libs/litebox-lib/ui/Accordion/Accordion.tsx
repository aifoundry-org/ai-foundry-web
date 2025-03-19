'use client';

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import IMGChevron from '@/public/imgs/home/faqs/chevron.webp'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  isDesktop?: boolean;
  className?: string;
}

/**
 * The `Accordion` component has two style variants (outlined or filled). Also it must be defined with an specific id, a title and its content. And It also integrates customization using Tailwind CSS by the className property.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Accordion-1-0-0-1ad701bba51e4a9fb0b4cf11fb49bcb9
 *
 * @param title - The title element that will be always displayed at the top of the accordion.
 * @param content - The content that will be displayed when the accordion is open.
 * @param isOpen - Determine whether the accordion is opened or not
 * @param isDesktop - Determine whether the accordion is for mobile or not
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 */
const Accordion = ({ title, isOpen = false, isDesktop = false, content, className }: AccordionProps) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className={cn('flex flex-col border-t-[2px] border-black', className)}>
      <div className={`flex flex-row items-center ${isDesktop && 'justify-between'} `} onClick={() => setOpen(!open)}>
        <label className={`font-host-grotesk justify-between pl-0 pr-[2vw] ${isDesktop ? 'py-[2.4rem]' : 'py-[1.67vw]'} cursor-pointer ${isDesktop ? 'text-[2.4rem]' : 'text-[4.82vw]'} font-bold`} >
          {title}
        </label>
        <div className={`${isDesktop ? 'w-[2.3rem]' : 'w-[6.4vw]'} transform transition-transform duration-200 ${open && 'rotate-180'} pointer-events-none`}>
          <ImageWrapper src={IMGChevron.src} alt='Chevron' />
        </div>
      </div>
     <div
        className={cn(
          `max-h-0 overflow-hidden transition-all duration-500 ${open && 'max-h-screen'}`
        )}>
        <div className={`font-normal ${isDesktop ? 'text-[1.6rem] pb-[2.4rem]' : 'text-[3.75vw] pb-[5vw]'} font-host-grotesk`} >{content}</div>
      </div>
    </div>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
