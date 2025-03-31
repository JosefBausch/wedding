import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton'; // Assuming you have this button component
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import DeleteRegistryCard from './DeleteRegistryItem';

export default function RegistryCard({
    id,
    title,
    link,
    image,
    is_reserved,
    item_type,
    user_id,
}) {
    const reserved = is_reserved;
    const { can, auth } = usePage().props; // Get the current logged-in user

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false); // New modal for "View Item"
    const [isUnregisterModalOpen, setIsUnregisterModalOpen] = useState(false); // Modal for un-registering item

    // Handle registering the item (setting is_reserved to true)
    const handleReserve = () => {
        // Use Inertia.post with appropriate options
        Inertia.post(
            `/registry/${id}/update`,
            {
                is_reserved: true,
            },
            {
                onStart: () => setIsModalOpen(false),
                preserveState: false, // Don't preserve the form state
                preserveScroll: true, // Keep the scroll position
                onSuccess: () => {
                    // This will execute after the server responds
                    window.location.href = `/profile`; // Redirect to the registry page
                },
            },
        );
    };

    // Handle unregistering the item (setting is_reserved to false)
    const handleUnreserve = () => {
        // Use Inertia.post with appropriate options
        Inertia.post(
            `/registry/${id}/update`,
            {
                is_reserved: false,
            },
            {
                onStart: () => setIsUnregisterModalOpen(false),
                preserveState: false, // Don't preserve the form state
                preserveScroll: true, // Keep the scroll position
                onSuccess: () => {
                    // This will execute after the server responds
                    window.location.href = `/registry`; // Redirect to the registry page
                },
            },
        );
    };

    // Handle redirection after confirmation
    const handleRedirect = () => {
        window.open(link, '_blank'); // Open link in new tab
        setIsViewItemModalOpen(false); // Close modal
    };

    return (
        <div className="relative rounded-xl border-4 border-rose-100 bg-frosted-white p-4 shadow-lg backdrop-blur-md duration-300 hover:shadow-2xl md:border-white">
            <div className="absolute right-4 top-4">
                {can.create_registry_item && (
                    <DeleteRegistryCard item_id={id} r={{ id, title }} />
                )}
            </div>
            <img
                src={image}
                alt={title}
                className="h-56 w-full rounded-lg border-2 border-rose-100 object-cover md:block"
            />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">
                    {item_type.charAt(0).toUpperCase() + item_type.slice(1)}
                </p>

                {/* Conditionally render buttons */}
                <div className="mt-4 flex gap-4">
                    {reserved ? (
                        <>
                            <button
                                className="w-full rounded-lg bg-gray-300 px-4 py-2 text-white"
                                disabled
                            >
                                {user_id === auth.user.id
                                    ? 'Reserved by you'
                                    : 'Reserved'}
                            </button>
                            {(user_id === auth.user.id ||
                                can.manage_registry_item) && (
                                <button
                                    onClick={() =>
                                        setIsUnregisterModalOpen(true)
                                    } // Open unregister modal
                                    className="w-full rounded-lg bg-red-300 px-4 py-2 text-white duration-300 hover:bg-red-400"
                                >
                                    Unreserve
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            {/* View Item Button - Triggers Modal */}
                            <button
                                onClick={() => setIsViewItemModalOpen(true)}
                                className="w-full rounded-lg bg-rose-300 px-4 py-2 text-center text-white duration-300 hover:bg-rose-400"
                            >
                                View Item
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)} // Open reserve modal
                                className="w-full rounded-lg bg-blue-300 px-4 py-2 text-white duration-300 hover:bg-blue-400"
                            >
                                Reserve
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Reserve Confirmation Modal */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold">Confirm Reservation</h2>
                <p>
                    Are you sure you want to register this item?
                    <br />
                    This can only be undone by contacting the site
                    administrator.
                </p>
                <div className="mt-6 text-right">
                    <PrimaryButton
                        className="rounded bg-gray-300 px-4 py-2 text-white"
                        onClick={() => setIsModalOpen(false)} // Close modal
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        className="ml-4 rounded bg-blue-300 px-4 py-2 text-white"
                        onClick={handleReserve} // Confirm and reserve item
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </Modal>

            {/* View Item Confirmation Modal */}
            <Modal
                show={isViewItemModalOpen}
                onClose={() => setIsViewItemModalOpen(false)}
            >
                <h2 className="text-xl font-bold">Don't Forget to Register!</h2>
                <p>
                    Please remember to come back and mark the item as purchased
                    after you buy it.
                </p>
                <div className="mt-6 text-right">
                    <PrimaryButton
                        className="rounded bg-gray-300 px-4 py-2 text-white"
                        onClick={() => setIsViewItemModalOpen(false)} // Close modal
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        className="ml-4 rounded bg-rose-300 px-4 py-2 text-white"
                        onClick={handleRedirect} // Redirect to item link
                    >
                        Continue to Item
                    </PrimaryButton>
                </div>
            </Modal>

            {/* Unregister Confirmation Modal */}
            <Modal
                show={isUnregisterModalOpen}
                onClose={() => setIsUnregisterModalOpen(false)}
            >
                <h2 className="text-xl font-bold">Confirm Unreservation</h2>
                <p>
                    Are you sure you want to unregister this item? You will no
                    longer be marked as the person who reserved it.
                </p>
                <div className="mt-6 text-right">
                    <PrimaryButton
                        className="rounded bg-gray-300 px-4 py-2 text-white"
                        onClick={() => setIsUnregisterModalOpen(false)} // Close modal
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        className="ml-4 rounded bg-red-300 px-4 py-2 text-white"
                        onClick={handleUnreserve} // Unregister item
                    >
                        Unreserve
                    </PrimaryButton>
                </div>
            </Modal>
        </div>
    );
}
