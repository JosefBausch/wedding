import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function View({ auth, invitee, expected_party_size, errors, success, inviteCode: initialInviteCode }) {
    const [inviteCode, setInviteCode] = useState(initialInviteCode || '');
    const [actualPartySize, setActualPartySize] = useState(expected_party_size ?? 1);
    const [error, setError] = useState(errors?.error || '');
    const [successMessage, setSuccessMessage] = useState(success || '');
    const [step, setStep] = useState(invitee ? 2 : 1);
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); // Help modal state

    useEffect(() => {
        if (step === 2 && (actualPartySize === "" || isNaN(actualPartySize))) {
            setActualPartySize(expected_party_size || 1);
        }
    }, [step, expected_party_size]);

    const handleCheckInvite = (e) => {
        e.preventDefault();
        setError('');
        
        router.get(route('invite.check', { code: inviteCode }), {
            onSuccess: (page) => {
                if (page.props.errors?.error) {
                    setError(page.props.errors.error);
                    return;
                }
                setStep(2);
            },
            onError: (errors) => {
                setError(errors.error || 'Invalid invite code.');
            }
        });
    };   

    const handleSubmitRSVP = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        
        console.log("Submitting with code:", inviteCode); // Debugging
        
        router.post(route('invite.respond'), { 
            code: inviteCode,
            actualPartySize
        }, {
            onSuccess: (page) => {
                setSuccessMessage(page.props.success || 'RSVP submitted successfully!');
                setTimeout(() => {
                    window.location.href = route('profile.edit'); // Redirect to account page
                }, 1500);
            },
            onError: (errors) => {
                setError(errors.code || errors.error || 'An error occurred while submitting your RSVP.');
                console.error("RSVP submission errors:", errors);
            }
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="RSVP" />
            <div className="flex items-center justify-center py-52">
                <div className="w-full max-w-lg rounded-xl border-2 border-white bg-frosted-white p-8 shadow-md backdrop-blur-md relative">
                    {/* Help Button */}
                    <button 
                        onClick={() => setIsHelpModalOpen(true)}
                        className="absolute right-4 top-4 text-xl font-bold text-gray-600 hover:text-gray-900"
                        title="Need help?"
                    >
                        <i className="fa-solid fa-question-circle"></i>
                    </button>

                    {step === 1 && (
                        <>
                            <h1 className="mb-6 text-center text-2xl font-bold">
                                Enter the Code on the Back of Your Invite
                            </h1>
                            <form onSubmit={handleCheckInvite} className="space-y-4">
                                <input
                                    type="text"
                                    value={inviteCode}
                                    onChange={(e) => {
                                        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); // Allow only alphanumeric, and force uppercase

                                        if (value.length > 4) {
                                            value = value.slice(0, 4) + '-' + value.slice(4, 8); // Auto-insert dash after 4th character
                                        }

                                        setInviteCode(value.slice(0, 9)); // Ensure max length is 9 (XXXX-YYYY)
                                    }}
                                    maxLength="9"
                                    placeholder="ABCD-1234"
                                    className="w-full rounded border p-3 text-center tracking-widest"
                                />
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <div className="text-center">
                                    <PrimaryButton>Submit Code</PrimaryButton>
                                </div>
                            </form>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h1 className="mb-6 text-center text-2xl font-bold">Welcome, {invitee}!</h1>
                            <p className="text-center">How many people in your group are coming?</p>
                            <p className="text-center text-sm text-gray-500">(Maximum: {expected_party_size})</p>

                            <form onSubmit={handleSubmitRSVP} className="mt-4 space-y-4">
                                <input 
                                    type="hidden" 
                                    name="code" 
                                    value={inviteCode} 
                                />
                                <input
                                    type="number"
                                    value={actualPartySize}
                                    onChange={(e) => {
                                        const value = e.target.value === "" ? "" : Math.min(expected_party_size, Number(e.target.value));
                                        setActualPartySize(value);
                                    }}
                                    min="0"
                                    max={expected_party_size}
                                    className="w-full rounded border p-3 text-center"
                                    placeholder="Enter actual party size"
                                />
                                {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <div className="text-center">
                                    <PrimaryButton>Submit RSVP</PrimaryButton>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>

            {/* Help Modal */}
            <Modal show={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)}>
                <div className="p-6">
                    <h2 className="text-xl font-bold">Need Help?</h2>
                    <p className="mt-2 text-gray-600">
                    <br />
                    If you have any questions, please call or leave a voicemail at <strong>319-212-9050</strong>. <br /><br />
                    If your code isn’t working after multiple attempts, don’t hesitate to reach out to the same number.
                    </p>
                    <div className="mt-4 text-right">
                        <PrimaryButton onClick={() => setIsHelpModalOpen(false)}>Close</PrimaryButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
