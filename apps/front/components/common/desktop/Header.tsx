import NavBar from './NavBar';
import Announcement from './Announcement';

export default function Header() {
    return (
        <header className='xs:block hidden'>
            <div className='flex flex-col w-full bg-black'>
                <Announcement />
                <NavBar />
            </div>
        </header>
    );
}
