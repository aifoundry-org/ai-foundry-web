'use client';

import { FC, ButtonHTMLAttributes, SVGProps, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import SVGIconPlus from '@/public/svgs/Plus';
import SVGIconDiscord from '@/public/svgs/Discord';
import SVGIconGithub from '@/public/svgs/Github';
import SVGIconArrowUpRight from '@/public/svgs/ArrowUpRight';

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
  'arrow-up-right': SVGIconArrowUpRight
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
 * @param label - Label of the button
 */
const Button = ({href = '', variant = 'primary', className = '', svg='', label = '', ...props }) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const essentialStyles = `flex items-center justify-between shadow-[4px_4px_0_0_black] w-fit h-[48px] px-5 py-2 text-[black] font-host-grotesk font-bold uppercase border border-2 whitespace-nowrap rounded-md transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`;
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

  // Hack to remove the "wobble" effect as much as possible when the
  // button pressing animation is played
  useEffect(() => {
    const parentElement = parentRef?.current;
    const containerElement = containerRef?.current;
    const labelElement = labelRef?.current;

    if (!parentElement || !containerElement || !labelElement) return;

    const parentElementNewWidth = String(Math.floor(parentElement.offsetWidth))+'px';
    const containerElementNewWidth = String(Math.floor(containerElement.offsetWidth))+'px';
    const labelElementNewWidth = String(Math.floor(labelElement.offsetWidth))+'px';
    parentElement.style.width = parentElementNewWidth;
    containerElement.style.width = containerElementNewWidth;
    labelElement.style.width = labelElementNewWidth;
  }, [])

  return (
    <div ref={parentRef} {...componentProps} >
      <div ref={containerRef} className={cn('flex gap-2 items-center')}>
        <div ref={labelRef} className={cn('text-sm h-[18px]')}>
          {label}
        </div>
        {SVGIcon && 
          <div className={cn('h-[24px]')}>
            <SVGIcon />
          </div>
        }
      </div>
    </div>
  );
};

Button.displayName = 'Button';

export default Button;