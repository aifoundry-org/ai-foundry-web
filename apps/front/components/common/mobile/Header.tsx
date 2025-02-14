/* eslint-disable */
import NavBar from './NavBar';
import Announcement from './Announcement';

export default function Header() {
    return (
        <header className='md:hidden flex flex-col w-full'>
            <div className='flex flex-col w-full h-full bg-black'>
                <Announcement />
                <NavBar />
            </div>
        </header>
    )
}
