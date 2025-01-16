'use client';

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import IMGChevron from '@/public/pngs/common/chevron.png'

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
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
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 */
const Accordion = ({ title, isOpen = false, content, className }: AccordionProps) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className={cn('flex flex-col border-t-[2px] border-black', className)}>
      <div className='flex flex-row items-center' onClick={() => setOpen(!open)}>
        <label className='font-host-grotesk justify-between pl-0 pr-[2vw] py-[3vw] cursor-pointer text-[4.8vw] font-bold'>
          {title}
        </label>
        <img src={IMGChevron.src} className={`w-[6.4vw] transform transition-transform duration-200 ${open && 'rotate-180'} pointer-events-none`} />
      </div>
     <div
        className={cn(
          `max-h-0 overflow-hidden transition-all duration-500 ${open && 'max-h-screen'}`
        )}>
        <div className='font-normal text-[3.75vw] font-host-grotesk pb-[5vw]'>{content}</div>
      </div>
    </div>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
