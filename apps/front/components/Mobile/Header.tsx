import IMGHeaderIconArrowUpRight from '@/public/pngs/common/headerArrowUpRight.png';

export default function Header() {
    // #F6EFE4 = sand color
    return (
        <header id='top-mobile' className='xs:hidden flex flex-col w-full bg-black'>
            <div className='flex flex-row text-sand justify-center p-4'>
                <a className='' href="#">
                    <p className='font-host-grotesk text-center my-2 text-[1.4rem]'>
                        AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!
                        <img src={IMGHeaderIconArrowUpRight.src} className='inline-block ml-[0.5vw] w-[14px]' />
                    </p>
                </a>
            </div>
        </header>
    )
}
