import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg border-rosePink border-2">
                <h2 className="text-3xl font-bold font-pus text-rosePink text-center mb-6">Log In</h2>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium text-gray-700" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rosePink focus:border-rosePink sm:text-sm"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="text-red-600 mt-1" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="Password" className="block text-sm font-medium text-gray-700" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rosePink focus:border-rosePink sm:text-sm"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="text-red-600 mt-1" />
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="ml-auto underline text-sm text-rosePink hover:text-rosePink/80 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosePink"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center justify-end">
                        <PrimaryButton
                            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rosePink hover:bg-rosePink/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosePink transition-all duration-200"
                            disabled={processing}
                        >
                            <span className="w-full text-center">
                                Log in
                            </span>
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-700">
                        Don't have an account?{' '}
                        <Link
                            href={route('register')}
                            className="text-rosePink hover:underline font-montserrat"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
