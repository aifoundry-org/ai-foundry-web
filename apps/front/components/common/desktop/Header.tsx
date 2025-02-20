import NavBar from './NavBar';
import Announcement from './Announcement';

export default function Header() {
    return (
        <header className='hidden md:block'>
            <div className='flex flex-col w-full bg-black'>
                <Announcement />
                <NavBar />
            </div>
        </header>
    );
}
