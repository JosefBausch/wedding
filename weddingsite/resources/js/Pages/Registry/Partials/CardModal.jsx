import React from "react";

export default function CardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-5 w-1/3">
                <h2 className="text-xl mb-4">Frying Pan Details</h2>
                <p>This is a high-quality stainless frying pan. Perfect for all your cooking needs!</p>
                <div className="mt-4 flex justify-end">
                    <button
                        className="bg-rosePink text-white py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
