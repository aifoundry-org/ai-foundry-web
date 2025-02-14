/* eslint-disable */
import NavBar from '@/components/common/mobile/NavBar';

export default function Header() {
    return (
        <header className='md:hidden flex flex-col w-full'>
            <div className='flex flex-col w-full h-full bg-black'>
                <NavBar removeTopBorders />
            </div>
        </header>
    )
}
