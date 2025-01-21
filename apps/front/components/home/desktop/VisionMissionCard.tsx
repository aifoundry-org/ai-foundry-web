import IMGIconHandshake from '@/public/pngs/home/visionMission/handshake.png';
import IMGIconCooperation from '@/public/pngs/home/visionMission/cooperation.png';
import IMGIconOpenBook from '@/public/pngs/home/visionMission/openBook.png';
import IMGIconUser from '@/public/pngs/home/visionMission/user.png';

const imgVariants : {[key: string]: string} = {
  handshake: IMGIconHandshake.src,
  cooperation: IMGIconCooperation.src,
  'open-book': IMGIconOpenBook.src,
  user: IMGIconUser.src
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
            {IMGIcon && 
                <div className='h-[2.225vw] w-[2.225vw] mb-[1.125vw]'>
                    <img src={IMGIcon} />
                </div>
            }
            <div className='font-dharma-gothic-e font-black text-[2.78vw] leading-[2.3vw] mb-[0.56vw] uppercase'>
                {title}
            </div>
            <div className='font-host-grotesk font-normal text-[1.115vw] leading-[1.67vw]'>
                {content}
            </div>
        </div>
    )
}