import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import { usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    // console.log(user);

    return (
        <>
            <Navbar />

            <div className="min-h-screen">
                {header && (
                    <header className="bg-frosted-white shadow backdrop-blur-md">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>

                <Footer />
            </div>
        </>
    );
}
