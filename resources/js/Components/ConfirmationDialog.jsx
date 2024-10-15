import React from "react";

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full mx-4">
                <h2 className="text-lg font-semibold mb-4 text-center">{message}</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-josefBlue text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-rosePink text-white py-2 px-4 rounded hover:bg-rose-600 transition duration-300"
                        onClick={onCancel}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
