import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import DeleteRegistryCard from './DeleteRegistryItem';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton'; // Assuming you have this button component

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

    // Handle registering the item (setting is_reserved to true)
    const handleReserve = () => {
        Inertia.post(`/registry/${id}/update`, {
            is_reserved: true,
        });
        setIsModalOpen(false); // Close modal after action
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
                className="hidden h-56 w-full rounded-lg border-2 border-rose-100 object-cover md:block"
            />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">
                    {item_type.charAt(0).toUpperCase() + item_type.slice(1)}
                </p>

                {/* Conditionally render buttons */}
                <div className="mt-4 flex gap-4">
                    {reserved ? (
                        <button
                            className="w-full rounded-lg bg-gray-300 px-4 py-2 text-white"
                            disabled
                        >
                            {user_id === auth.user.id ? 'Reserved by you' : 'Reserved'}
                        </button>
                    ) : (
                        <>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full rounded-lg bg-rose-300 px-4 py-2 text-center text-white duration-300 hover:bg-rose-400"
                            >
                                View Item
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)} // Open modal on click
                                className="w-full rounded-lg bg-blue-300 px-4 py-2 text-white duration-300 hover:bg-blue-400"
                            >
                                Reserve
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold">Confirm Reservation</h2>
                <p>
                    Are you sure you want to register this item?<br />
                    This can only be undone by contacting the site administrator.
                </p>
                <div className="mt-6 text-right">
                    <PrimaryButton
                        className="bg-gray-300 rounded px-4 py-2 text-white"
                        onClick={() => setIsModalOpen(false)} // Close modal
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        className="bg-blue-300 ml-4 rounded px-4 py-2 text-white"
                        onClick={handleReserve} // Confirm and reserve item
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </Modal>
        </div>
    );
}
