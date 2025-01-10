'use client';

import { FC, ButtonHTMLAttributes, SVGProps, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import SVGIconPlus from '@/public/svgs/common/Plus';
import SVGIconDiscord from '@/public/svgs/common/Discord';
import SVGIconGithub from '@/public/svgs/common/Github';
import SVGIconArrowUpRight from '@/public/svgs/common/ArrowUpRight';
import SVGIconScrollArrowLeft from '@/public/svgs/common/ScrollArrowLeftMobile';
import SVGIconScrollArrowRight from '@/public/svgs/common/ScrollArrowRightMobile';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  svg?: string;
  label: string;
}

const btnVariants: {[key: string]: string } = {
  primary: 'bg-orange border-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
  secondary: 'bg-sand border-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
};

const svgVariants : {[key: string]: FC<SVGProps<SVGSVGElement>>} = {
  plus: SVGIconPlus,
  discord: SVGIconDiscord,
  github: SVGIconGithub,
  'arrow-up-right': SVGIconArrowUpRight,
  'scroll-left': SVGIconScrollArrowLeft,
  'scroll-right': SVGIconScrollArrowRight,
}

/**
 * The `Button` component represents an interactive button that can be used in multiple parts of an application without the need to recreate it each time.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Button-1-0-0-c991739af02b4e649f23b9b573c89b66
 *
 * @param variant - The visual style variant of the button.
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 * @param href - If the button is rendered as a 'Next.js Link', 'href' can be provided to specify the link's destination.
 * @param svg - Optionally adding a predetermined svg, available svg: 'plus', 'discord', 'github', 'arrow-up-right'
 * @param content - Content of the button
 */
const Button = ({href = '', variant = 'primary', className = '', svg = '', content = '', resetContainerPadding = false, ...props }) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const essentialStyles = `flex items-center justify-between shadow-[4px_4px_0_0_black] w-fit h-fit mx-2 lg:px-5 lg:py-2 md:px-3 md:py-1 px-1 py-0 text-[black] font-bold uppercase border border-2 whitespace-nowrap rounded-md transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`;
  const styles = `${essentialStyles} ${btnVariants[variant]} ${className}`;

  const componentProps = {
    ...props,
    ...(href ? { href } : {}),
    className: styles,
  };

  let SVGIcon = null;

  if (Object.keys(svgVariants).includes(svg)){
    SVGIcon = svgVariants[svg];
  }

  const updateWidth = useCallback(() => {
    const parentElement = parentRef?.current;
    const containerElement = containerRef?.current;
    const labelElement = labelRef?.current;

    // For every ref elements found we:
    // - get original width
    // - calculate the new width without the decimal part
    // - assign the new width to the elements

    if (parentElement){
      parentElement.style.width = 'fit-content';
      const parentElementNewWidth = String(Math.floor(parentElement.offsetWidth))+'px';
      parentElement.style.width = parentElementNewWidth;
    }
    
    if(containerElement){
      containerElement.style.width = 'fit-content';
      const containerElementNewWidth = String(Math.floor(containerElement.offsetWidth))+'px';
      containerElement.style.width = containerElementNewWidth;
    } 
    
    if(labelElement){
      labelElement.style.width = 'fit-content';
      const labelElementNewWidth = String(Math.floor(labelElement.offsetWidth))+'px';
      labelElement.style.width = labelElementNewWidth;
    };
  }, [parentRef, containerRef, labelRef])

  // Hack to remove the "wobble" effect as much as possible when the
  // button pressing animation is played
  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  }, [])

  return (
    <div ref={parentRef} {...componentProps} >
      <div ref={containerRef} className={cn(`flex lg:gap-2 md:gap-1 gap-0 ${resetContainerPadding ? 'p-2' : 'py-2 px-5 lg:py-0 xl:py-0 md:py-0'} items-center`)}>
        {content !== '' && 
          <div ref={labelRef} className={cn('text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] h-fit w-fit mr-2')} dangerouslySetInnerHTML={{__html: content}} />
        }
        {SVGIcon && <SVGIcon />}
      </div>
    </div>
  );
};

Button.displayName = 'Button';

export default Button;