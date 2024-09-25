import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const Login = ({ status, canResetPassword }) => {
    const { post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        post(route('login'), {
            onFinish: () => {
                reset('password');
                setEmail("");
                setPassword("");
            }
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
            )}

            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg border-josefBlue border-2">
                <h2 className="text-3xl font-bold font-pus text-josefBlue text-center mb-6">Login</h2>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                        />
                        {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-josefBlue focus:border-josefBlue sm:text-sm"
                        />
                        {errors.password && <p className="text-red-600 mt-1">{errors.password}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="h-4 w-4 text-josefBlue border-gray-300 rounded focus:ring-josefBlue"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        {canResetPassword && (
                            <div className="text-sm">
                                <Link
                                    href={route('password.request')}
                                    className="text-josefBlue hover:underline font-montserrat"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-josefBlue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-josefBlue transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-700">
                        Need an account?{' '}
                        <Link
                            href={route('register')}
                            className="text-josefBlue hover:underline font-montserrat"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Login;
