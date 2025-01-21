import IMGIconHandshake from '@/public/pngs/visionMission/handshake.png';
import IMGIconCooperation from '@/public/pngs/visionMission/cooperation.png';
import IMGIconOpenBook from '@/public/pngs/visionMission/openBook.png';
import IMGIconUser from '@/public/pngs/visionMission/user.png';

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
                <div className='h-[6.4vw] w-[6.4vw] mb-[3.75vw]'>
                    <img src={IMGIcon} />
                </div>
            }
            <div className='font-dharma-gothic-e font-black text-[8.55vw] leading-[7vw] mb-[2.15vw] uppercase'>
                {title}
            </div>
            <div className='font-host-grotesk font-normal text-[3.75vw] leading-[5.7vw]'>
                {content}
            </div>
        </div>
    )
}