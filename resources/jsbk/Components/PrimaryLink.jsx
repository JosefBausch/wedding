import { Link } from "@inertiajs/react";

export default function PrimaryLink({ href, method = "get", as = "a", children }) {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className="inline-flex items-center px-4 py-2 bg-josefBlue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
        >
            {children}
        </Link>
    );
}
