const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-4 w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 text-center text-lg font-semibold">
                    {message}
                </h2>
                <div className="flex justify-center space-x-4">
                    <button
                        className="rounded bg-blue-300 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button
                        className="rounded bg-rose-300 px-4 py-2 text-white transition duration-300 hover:bg-rose-600"
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
