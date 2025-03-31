import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    acceptedInvites,
    registeredItems,
}) {
    const { post } = useForm();
    const { can = {} } = usePage().props; // Default to an empty object to prevent errors

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Profile
                    </h2>
                    {can.create_registry_item && (
                        <a
                            href="admin/dashboard"
                            className="text-blue-500 hover:underline"
                        >
                            Admin Panel
                        </a>
                    )}
                    <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
                </div>
            }
        >
            <Head title="Profile" />

            {acceptedInvites?.length > 0 && (
                <div className="mt-10 flex justify-center">
                    <div className="w-10/12 bg-green-100 p-4 shadow backdrop-blur-md sm:rounded-lg sm:p-8">
                        <h3 className="text-lg font-semibold text-green-700">
                            Accepted Invite
                        </h3>
                        <ul className="mt-2 space-y-2">
                            {acceptedInvites.map((invite, index) => (
                                <li
                                    key={index}
                                    className="border-b pb-2 last:border-none"
                                >
                                    <p>
                                        <strong>Invite Code:</strong>{' '}
                                        {invite.code}
                                    </p>
                                    <p className="mt-2">
                                        <strong>Accepted on:</strong>{' '}
                                        {new Date(
                                            invite.updated_at,
                                        ).toLocaleString()}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Think this is wrong/have any questions?
                                        Call: 319-212-9050
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {registeredItems?.length > 0 && (
                <div className="mt-10 flex justify-center">
                    <div className="w-10/12 bg-blue-100 p-4 shadow backdrop-blur-md sm:rounded-lg sm:p-8">
                        <h3 className="text-lg font-semibold text-blue-700">
                            Registered Items
                        </h3>
                        <ul className="mt-2 space-y-2">
                            {registeredItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="border-b pb-2 last:border-none"
                                >
                                    <p>
                                        <strong>Item Name:</strong>{' '}
                                        <a
                                            href={`/registry?filter=all&itemType=all&search=${item.title}`}
                                            className="cursor-pointer text-blue-600 hover:underline"
                                        >
                                            {item.title}
                                        </a>
                                    </p>
                                    <p className="mt-2">
                                        <strong>Registered on:</strong>{' '}
                                        {new Date(
                                            item.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </li>
                            ))}
                            <p className="mt-2 text-sm text-gray-600">
                                For any issues, contact support at:
                                <br />
                                <strong>319-212-9050</strong>
                            </p>
                        </ul>
                    </div>
                </div>
            )}

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
            <div></div>
        </AuthenticatedLayout>
    );
}
