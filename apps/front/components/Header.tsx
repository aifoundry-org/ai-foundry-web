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
                        <p className='font-host-grotesk mr-2'>AIFoundry.org is sponsoring the "Low-Level AI Engineering & Hacking" Dev Room at FOSDEM. Find out more!</p>
                        <SVGIconArrowUpRight fill='#F6EFE4' />
                    </a>
                </div>
                <div className='flex flex-col bg-sand rounded-t-lg'>
                    <div className='flex flex-row items-center pt-10 pb-4'>
                        <div className='flex basis-1/4 justify-center text-center'>
                            <div className='flex text-nowrap flex-wrap flex-row ml-10 font-medium gap-x-5 lg:gap-x-10 xl:text-xl lg:text-sm md:text-sm sm:text-sm text-xs'>
                                <a className='uppercase' href=''>Projects</a>
                                <a className='uppercase' href=''>Events</a>
                                <a className='uppercase' href=''>Blog</a>
                                <a className='uppercase' href=''>Our Values</a>
                            </div>
                        </div>
                        <div className='flex basis-1/2 mx-auto justify-center'>
                            <AIFoundryLogoTop />
                        </div>
                        <div className='flex basis-1/4 justify-center'>
                            <Button variant='primary' label='Join our discord' svg='discord' />
                        </div>
                    </div>
                </div>
            </div>
        </header>)
}
