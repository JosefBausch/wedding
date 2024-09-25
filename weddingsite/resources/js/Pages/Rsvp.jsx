import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";

export default function Rsvp() {
    return (
        <AuthenticatedLayout>
            <Head title="RSVP" />

            <div className="w-full flex justify-center">
                <h1 className="font-semibold text-2xl">What number is on the back of your invite?</h1>
            </div>
            <div className="mt-5 w-full flex justify-center items-center">
                <form className="flex justify-center items-center w-1/4">
                    <TextInput
                        placeholder={"#4612"}
                        id="email"
                        type="email"
                        className="block w-full"
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" />
                    <PrimaryButton className="ml-2">
                        <span className="text-lg font-semibold">RSVP</span>
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
