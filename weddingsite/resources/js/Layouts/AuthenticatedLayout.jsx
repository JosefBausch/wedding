import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Footer from '@/Components/Footer.jsx';
import { Link, usePage } from '@inertiajs/react';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <div className="min-h-screen">
                <nav className="z-20 sticky top-0 flex backdrop-blur items-center p-5 border-b-2 border-b-white/30 bg-white/20">
                    <div className="mr-auto font-pus">
                        <Link href={route('home')} className="text-2xl font-bold">
                            <span className="text-josefBlue">Josef</span> + <span className="text-rosePink">Rose</span>
                        </Link>
                    </div>
                    <div className="ml-auto space-x-4">
                        <Link
                            href={route('registry')}
                            className="text-xl font-medium rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                            Registry
                        </Link>
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

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main className="flex justify-center">
                    <div className="mt-5 w-11/12">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
