import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col mt-5 sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full flex justify-center sm:max-w-md mt-6 bg-white overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
