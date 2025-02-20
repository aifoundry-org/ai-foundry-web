import NavBar from '@/components/common/desktop/NavBar';

export default function Header() {
    return (
        <header className='hidden md:block'>
            <div className='flex flex-col w-full bg-black'>
                <NavBar removeTopBorders />
            </div>
        </header>
    );
}
