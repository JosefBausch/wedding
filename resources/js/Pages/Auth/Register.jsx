import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg border-josefBlue border-2">
                <h2 className="text-3xl font-bold font-pus text-josefBlue text-center mb-6">Register</h2>

                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" className="block text-sm font-medium text-gray-700" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="text-red-600 mt-1" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" className="block text-sm font-medium text-gray-700" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="text-red-600 mt-1" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" className="block text-sm font-medium text-gray-700" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="text-red-600 mt-1" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700" value="Confirm Password" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="text-red-600 mt-1" />
                    </div>

                    <div className="flex items-center justify-between">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-700 hover:text-josefBlue"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-josefBlue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-josefBlue transition-all duration-200" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
