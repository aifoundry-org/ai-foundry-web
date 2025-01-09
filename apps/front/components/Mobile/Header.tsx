import SVGIconArrowUpRight from '@/public/svgs/common/ArrowUpRightMobile';

export default function Header() {
    // #F6EFE4 = sand color
    return (
        <header className='xs:hidden flex flex-col w-full bg-black'>
            <div className='flex flex-row text-sand justify-center p-4'>
                <a className='' href="#">
                    <p className='font-host-grotesk text-center my-2 text-[1.4rem]'>
                        AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!
                        <SVGIconArrowUpRight className='inline-block ml-2 w-[14px] h-[14px]' fill='#F6EFE4' />
                    </p>
                </a>
            </div>
        </header>
    )
}
