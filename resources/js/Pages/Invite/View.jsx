import Modal from '@/Components/Modal'; // Import the Modal component
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function View({ auth }) {
    const [inviteCode, setInviteCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleChange = (e) => {
        let input = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); // Only allow letters and numbers

        if (input.length > 4) {
            input = input.slice(0, 4) + '-' + input.slice(4); // Auto-insert dash after the 4th character
        }

        setInviteCode(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const codeFormat = /^[A-Z0-9]{4}-[A-Z0-9]{4}$/; // Match format XXXX-YYYY
        if (!codeFormat.test(inviteCode)) {
            setError('Invalid code. Please enter a valid code in the format XXXX-YYYY.');
            setSuccess('');
            return;
        }
        
        setError(''); // Clear previous errors
        
        // Send a PATCH request to the server to check the invite code
        router.patch(
            route('invite.update', { code: inviteCode }), // Update this to the correct route
            { invite_code: inviteCode }, // Data to send
            {
                onSuccess: () => {
                    setSuccess('RSVP successful!');
                    setError(''); // Clear errors on success
                },
                onError: (errors) => {
                    if (errors.code) {
                        setError('The invite code you entered does not match any records. Please check and try again.');
                        setSuccess(''); // Clear success message on error
                    } else {
                        setError('An unexpected error occurred. Please try again later.');
                    }
                },
            }
        );
    };
    

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="RSVP" />

            <div className="flex items-center justify-center py-52">
                <div className="w-full max-w-lg rounded-xl border-2 border-white bg-frosted-white p-8 shadow-md backdrop-blur-md">
                    <h1 className="mb-6 text-center text-2xl font-bold">
                        Enter the Code on the Back of Your Invite
                    </h1>

                    {/* RSVP Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-bold text-gray-700">
                                Enter your invite code:
                            </label>
                            {/* Question mark badge */}
                            <i
                                className="fa-solid fa-circle-question cursor-pointer text-gray-500 hover:text-gray-700"
                                onClick={() => setIsModalOpen(true)}
                                aria-label="Help"
                            ></i>
                        </div>

                        <input
                            type="text"
                            value={inviteCode}
                            onChange={handleChange}
                            maxLength="9"
                            placeholder="XXXX-YYYY"
                            className="focus:ring-rosePink w-full rounded border border-gray-300 p-3 text-center focus:outline-none focus:ring-2"
                            style={{ textTransform: 'uppercase' }}
                        />

                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                        {success && (
                            <p className="text-sm text-green-500">{success}</p>
                        )}

                        <div className="text-center">
                            <PrimaryButton>Submit RSVP</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

            {/* Using the Modal Component */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold">Invite Code Help</h2>
                <div className="m-4 flex items-center justify-center">
                    <object
                        data="/storage/ShowInviteCode.svg"
                        type="image/svg+xml"
                    ></object>
                    <p className="m-4 mr-6 text-xl">
                        The invite code is printed on the back of your
                        invitation. It should be in the format XXXX-YYYY, where
                        each X and Y is a letter or number.
                    </p>
                </div>
                <div className="mt-6 text-right">
                    <PrimaryButton
                        className="bg-rosePink rounded px-4 py-2 text-white"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Close
                    </PrimaryButton>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
