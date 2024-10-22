import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';

export default function DeleteRegistryCard({ r }) {
    const {
        data: deleteData,
        processing,
        reset,
    } = useForm({
        id: r.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(`/deleteregistryitem/${deleteData.id}`, {
            _method: 'delete',
            ...deleteData,
        });
    };

    return (
        <>
            <button
                onClick={() =>
                    document.getElementById(`delete_modal_${r.id}`).showModal()
                }
                className="m-4 inline-flex items-center rounded-md bg-rose-300 p-2 text-white transition duration-200 hover:bg-rose-400"
                aria-label="Delete item"
            >
                <i className="fa-regular fa-trash-can"></i>
            </button>

            <dialog id={`delete_modal_${r.id}`} className="modal">
                <div className="relative rounded-xl border border-rose-300 bg-frosted-white p-6 shadow-xl backdrop-blur-md">
                    <h3 className="text-lg font-bold text-gray-800">
                        Are you sure you want to delete{' '}
                        <span className="font-semibold text-red-600">
                            {r.title}
                        </span>
                        ?
                    </h3>

                    <p className="mt-2 text-gray-600">
                        This action cannot be undone.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 flex space-x-4"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none"
                            onClick={() => {
                                reset();
                                document
                                    .getElementById(`delete_modal_${r.id}`)
                                    .close();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className={`w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-red-900`}
                            disabled={processing}
                        >
                            Confirm Delete
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
}
