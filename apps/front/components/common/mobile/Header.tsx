import NavBar from './NavBar';
import Announcement from './Announcement';

export default function Header() {
    return (
        <header className='xs:hidden block'>
            <div className='flex flex-col w-full h-full bg-black'>
                <Announcement />
                <NavBar />
            </div>
        </header>
    )
}
