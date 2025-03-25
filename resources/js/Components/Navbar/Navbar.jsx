import Sidebar from './Sidebar';

export default function Navbar() {
    return (
        <>
            <nav className="sticky top-0 z-10 flex w-full items-center bg-frosted-yellow p-4 shadow-md backdrop-blur-md">
                <div className="mr-auto font-pus text-2xl">
                    <a href={route('dashboard')}>
                        <span className="text-blue-300">Josef</span>+
                        <span className="text-rose-300">Rose</span>
                    </a>
                </div>
                <div className="ml-auto hidden space-x-3 text-xl md:flex">
                    <a href="gallery">Gallery</a>
                    <a href="registry">Registry</a>
                    <a href="rsvp">RSVP</a>
                    <a href="profile">Account</a>
                </div>
                <div className="ml-auto flex space-x-3 text-xl md:hidden">
                    <button
                        id="hamburger-button"
                        className="focus:outline-none"
                    >
                        <i className="fa-solid fa-bars text-3xl"></i>
                    </button>
                </div>
            </nav>

            <Sidebar />
        </>
    );
}
