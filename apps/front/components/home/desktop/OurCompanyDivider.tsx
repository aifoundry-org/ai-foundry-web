import IMGBackground from '@/public/pngs/home/ourCompanyDivider/background.png'

export default function OurCompanyDivider(){
    return (
        <div className='hidden xs:flex xs:flex-col xs:mt-[3.5vw] xs:w-full xs:h-fit'>
            <img src={IMGBackground.src} width="100%" alt="Our Company Divider" />
        </div>
    )
}