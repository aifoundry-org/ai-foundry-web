import Button from '@/litebox-lib/ui/Button/Button';
import AIFoundryLogoTop from '@/public/svgs/AIFoundryLogoTop';
import SVGIconArrowUpRight from '@/public/svgs/ArrowUpRight';

export default function Header() {
    // #F6EFE4 = sand color
    return (
        <header>
            <div className='flex flex-col w-full bg-black'>
                <div className='flex flex-row text-sand justify-center p-4'>
                    <a className='flex' href="#">
                        <p className='mr-2'>AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!</p>
                        <SVGIconArrowUpRight fill='#F6EFE4' />
                    </a>
                </div>
                <div className='flex flex-col bg-sand rounded-t-lg'>
                    <div className='flex flex-row items-center py-10'>
                        <div className='flex text-nowrap flex-wrap basis-1/3 justify-center flex-row text-center font-bold gap-0 lg:gap-x-3 ml-10 xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>
                            <a className='uppercase scale-x-[0.75]' href=''>Projects</a>
                            <a className='uppercase scale-x-[0.75]' href=''>Events</a>
                            <a className='uppercase scale-x-[0.75]' href=''>Blog</a>
                            <a className='uppercase scale-x-[0.75]' href=''>Our Values</a>
                        </div>
                        <div className='flex basis-1/3 mx-auto justify-center'>
                            <AIFoundryLogoTop />
                        </div>
                        <div className='flex basis-1/3 justify-center mr-10'>
                            <Button variant='primary' label='Join our discord' svg='discord' />
                        </div>
                    </div>
                </div>
            </div>
        </header>)
}
