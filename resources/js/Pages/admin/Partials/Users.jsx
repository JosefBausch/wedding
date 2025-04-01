import { Link } from '@inertiajs/react';

export default function Users({ users }) {
    return (
        <div className="relative">
            {/* Sticky Back Arrow */}
            <Link
                href={route('admin.dashboard')}
                className="absolute left-6 top-6 rounded-full bg-gray-800 p-2 text-white shadow-md hover:bg-gray-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </Link>

            <div className="rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 pt-10 text-2xl font-bold">Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.length > 0 ? (
                                users.data.map((user) => (
                                    <tr key={user.id} className="border-t">
                                        <td className="border p-2">
                                            {user.name}
                                        </td>
                                        <td className="border p-2">
                                            {user.email}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="p-4 text-center">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Controls */}
                <div className="mt-4 flex justify-between">
                    {users.prev_page_url && (
                        <Link
                            href={users.prev_page_url}
                            className="rounded bg-gray-200 px-4 py-2"
                        >
                            Previous
                        </Link>
                    )}
                    {users.next_page_url && (
                        <Link
                            href={users.next_page_url}
                            className="rounded bg-gray-200 px-4 py-2"
                        >
                            Next
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
