import IMGLogo from '@/public/pngs/footer/logoMobile.png'

export default function Footer(){
    return (
        <footer className='xs:hidden flex flex-col bg-orange rounded-t-[5.335vw]'>
            <div className='flex flex-row px-[6.4vw] pt-[8.55vw]'>
                <div className='flex flex-col size-full font-dharma-gothic-e pb-[10.675vw] border-b-2 border-black'>
                    <img className='w-[33.1vw] mb-[6.4vw]' src={IMGLogo.src} />
                    <p className='font-black text-sand text-[19.2vw] leading-[14.15vw] uppercase mb-[4.275vw]'>Your new<br/>community</p>
                    <p className='font-black text-black text-[10.675vw] leading-[8.8vw] uppercase'>Thanks for<br/>joining this side</p>
                </div>
                <div className='flex flex-row'>

                </div>
            </div>
        </footer>
    )
}