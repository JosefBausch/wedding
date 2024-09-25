import { Link, Head } from '@inertiajs/react';
import RsvpPromo from '../Components/RsvpPromo';
import Footer from '../Components/Footer';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <nav className="z-20 sticky top-0 flex backdrop-blur items-center p-5 border-b-2 border-b-white/30 bg-white/20">
                <div className="mr-auto font-pus">
                    <Link href={route('home')} className="text-2xl font-bold">
                        <ApplicationLogo />
                    </Link>
                </div>
                <div className="ml-auto space-x-4">
                    {auth.user ? (
                        <>
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
                        </>

                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-xl font-medium rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="text-xl font-medium rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            <main className="w-full flex justify-center">
                <div className="w-11/12 mt-5 z-10">
                    <RsvpPromo />

                    <Footer />
                </div>
            </main>
        </>
    );
}
