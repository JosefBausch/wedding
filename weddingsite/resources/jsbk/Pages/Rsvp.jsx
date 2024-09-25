import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';

export default function Rsvp() {
    return (
        <AuthenticatedLayout>
            <Head title="RSVP" />

            <div className="w-full flex justify-center">
                <h1 className="font-semibold text-2xl">What number was on the back of your invite?</h1>
            </div>
            <div className="mt-5 w-full flex justify-center items-center">
                <form className="flex w-1/4">
                    <input className="rounded-lg w-full" />
                    <PrimaryButton />
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
