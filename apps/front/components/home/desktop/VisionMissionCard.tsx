import SVGIconEmpathy from '@/public/svgs/ourCoreValues/empathy';
import SVGIconCooperation from '@/public/svgs/ourCoreValues/cooperation';
import SVGIconOpenness from '@/public/svgs/ourCoreValues/openness';
import SVGIconIntegrity from '@/public/svgs/ourCoreValues/integrity';

const imgVariants : {[key: string]: React.FC<React.SVGProps<SVGSVGElement>>} = {
  empathy: SVGIconEmpathy,
  cooperation: SVGIconCooperation,
  openness: SVGIconOpenness,
  integrity: SVGIconIntegrity
}

export default function OurCoreValue({className = '', icon = '', title = '', content = '', ...props}) {
    const essentialStyles = `flex flex-col mb-[6.4vw]`;
    const styles = `${essentialStyles} ${className}`;

    const componentProps = {
        ...props,
        className: styles,
      };
    
      let IMGIcon = null;
    
      if (Object.keys(imgVariants).includes(icon)){
        IMGIcon = imgVariants[icon];
      }

    return (
        <div {...componentProps}>
            {IMGIcon && <IMGIcon className='w-fit mb-[1.125vw]' /> }
            <h3 className='font-dharma-gothic-e font-black text-[3rem] lg:text-[2.78vw] xl:text-[2.78vw] 2xl:text-[2.78vw] leading-[2.3vw] mb-[0.56vw] uppercase'>
                {title}
            </h3>
            <div className='font-host-grotesk font-normal text-[1.8rem] lg:text-[1.115vw] xl:text-[1.115vw] 2xl:text-[1.115vw] leading-[1.67vw]'>
                {content}
            </div>
        </div>
    )
}