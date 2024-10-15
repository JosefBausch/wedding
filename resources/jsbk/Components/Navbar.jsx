import Link from '@inertiajs/react';

export default function Navbar() {
    return (
        <>
            <nav className="z-20 sticky top-0 flex backdrop-blur items-center p-5 border-b-2 border-b-white/30 bg-white/20">
                <div className="mr-auto font-pus">
                    <Link href={route('home')} className="text-2xl font-bold">
                        <span className="text-josefBlue">Josef</span> + <span className="text-rosePink">Rose</span>
                    </Link>
                </div>
                <div className="ml-auto space-x-4">
                    <Link
                        href={route('profile.edit')}
                        className="text-xl font-medium rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                        Account
                    </Link>
                    <Link
                        href={route('rsvp')}
                        className="text-xl font-medium rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                        RSVP
                    </Link>
                </div>
            </nav>
        </>
    );
}