'use client';

import { FC, ButtonHTMLAttributes, SVGProps } from 'react';
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
  content: string;
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
const Button = ({href = '', variant = 'primary', className = '', svg = '', content = '', noShadow = false, containerProps = '', labelProps = '', svgProps = '', ...props }) => {
  // #F6EFE4 = sand color
  const essentialStyles = `flex items-center align-middle justify-between ${noShadow ? 'shadow-[4px_4px_0_0_#F6EFE4]' : 'shadow-[4px_4px_0_0_black]'} w-fit h-fit text-[black] font-bold uppercase border border-2 whitespace-nowrap rounded-md transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none px-[2.5vw] py-[1.5vw] md:py-[0.835vw] xl:py-[0.835vw] 2xl:py-[0.835vw] md:px-[1.67vw] xl:px-[1.67vw] 2xl:px-[1.67vw] 2xl:gap-[1vw] xl:gap-[1vw] md:gap-[1vw] xs:gap-[2vw] gap-[3vw] items-center ${containerProps}`;
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

<<<<<<< HEAD
  const labelStyle = `flex text-[4.8vw] xs:text-[3.2vw] sm:text-[2.5vw] md:text-[2.25vw] xl:text-[1.5vw] 2xl:text-[1.5vw] leading-[1.39vw] items-center justify-center ${labelProps}`
=======
  const labelStyle = `flex text-[4.8vw] xs:text-[3.2vw] sm:text-[2.5vw] md:text-[2.25vw] xl:text-[1.5vw] 2xl:text-[1.5vw] leading-[1.39vw] ${labelProps}`
>>>>>>> develop
  const SVGStyle = `flex ${svgProps}`

  return (
    <div {...componentProps} >
      {content !== '' &&  <div className={labelStyle} dangerouslySetInnerHTML={{__html: content}} /> }
      {SVGIcon && <div className={SVGStyle}><SVGIcon /></div>}
    </div>
  );
};

Button.displayName = 'Button';

export default Button;