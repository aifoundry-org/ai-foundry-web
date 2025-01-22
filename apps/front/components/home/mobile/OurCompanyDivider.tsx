import IMGBackground from '@/public/pngs/home/ourCompanyDivider/backgroundMobile.png'

export default function OurCompanyDivider(){
    return (
        <div className='xs:hidden flex flex-col relative w-full h-fit mt-[13.7vw]'>
            <img src={IMGBackground.src} width="100%" alt="Our Company Divider" />
        </div>
    )
}