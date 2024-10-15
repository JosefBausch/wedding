import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { Inertia } from "@inertiajs/inertia";
import ConfirmationDialog from "@/Components/ConfirmationDialog.jsx";

export default function Card({ card, userId }) {
    const [isReserved, setIsReserved] = useState(card.is_reserved);
    const [showDialog, setShowDialog] = useState(false);

    const handleReservationClick = () => {
        setShowDialog(true);
    };

    const handleConfirm = () => {
        Inertia.post(`/updatereservation/${card.id}`, {
            _method: "patch",
            is_reserved: true,
            user_id: userId,
        }, {
            onSuccess: () => {
                setIsReserved(true);
                setShowDialog(false);
            },
            onError: (error) => {
                console.error("Error updating reservation", error);
                setShowDialog(false);
            }
        });
    };

    const handleCancel = () => {
        setShowDialog(false);
    };

    return (
        <div className="m-2 w-full border-2 border-josefBlue bg-gray-50 rounded-lg hover:border-rosePink transition-all duration-200 shadow-sm hover:shadow-lg flex">
            <img className="w-1/3 h-48 object-cover rounded-l-lg" src={card.image} alt={card.title} />
            <div className="p-4 flex flex-col justify-between w-2/3">
                <h1 className="text-2xl font-bold mb-2">{card.title}</h1>

                <div className="flex justify-between mt-4">
                    <PrimaryButton
                        className={`w-1/2 mr-2 py-2 px-4 rounded text-center ${
                            isReserved ? "bg-gray-400 cursor-not-allowed" : "bg-josefBlue hover:bg-blue-600 text-white"
                        }`}
                        onClick={handleReservationClick}
                        disabled={isReserved}
                    >
                        {isReserved ? "Reserved" : "I Purchased/Will Purchase This"}
                    </PrimaryButton>

                    <PrimaryButton
                        className="w-1/2 bg-rosePink hover:bg-rose-600 text-white py-2 px-4 rounded text-center"
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Retailer
                    </PrimaryButton>
                </div>
            </div>

            {showDialog && (
                <ConfirmationDialog
                    message="Are you sure you want to reserve this item? This action cannot be undone easily."
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}
