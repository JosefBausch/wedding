import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton'; // Adjust based on your component location
import TextInput from '@/Components/TextInput';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import ItemTypeSelect from './ItemTypeSelect'; // Adjust the path as necessary

export default function AddItemModal() {
    const [isOpen, setIsOpen] = useState(false); // Modal open/close state
    const { data, setData, reset, errors, processing } = useForm({
        title: '',
        link: '',
        image: '',
        item_type: 'furniture',
        is_reserved: false,
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        reset();
        setIsOpen(false);
    };

    const handleItemTypeChange = (e) => {
        setData('item_type', e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
    
        console.log("Submitting request with data:", data); // Log the request data
    
        router.post('/addregistryitem', data, {
            onSuccess: () => {
                console.log("Request successful!"); // Log success message
                reset(); // Reset the form after successful submission
                closeModal(); // Close the modal
            },
            onError: (errors) => {
                console.error("Request failed with errors:", errors); // Log any errors
            }
        });
    };

    return (
        <>
            <button
                onClick={openModal}
                className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-rose-400 text-white shadow-lg hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
            >
                <i className="fa-solid fa-plus text-lg"></i>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
                        <h2 className="mb-4 text-xl font-semibold text-gray-700">
                            Add New Item
                        </h2>
                        <button
                            className="absolute right-4 top-2 text-2xl text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <form onSubmit={submit} className="flex flex-col gap-4">
                            <InputLabel htmlFor="title" value="Item Title" />
                            <TextInput
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                required
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.title} />

                            <InputLabel htmlFor="link" value="Item Link" />
                            <TextInput
                                id="link"
                                type="url"
                                value={data.link}
                                onChange={(e) =>
                                    setData('link', e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.link} />

                            <InputLabel htmlFor="image" value="Image URL" />
                            <TextInput
                                id="image"
                                type="url"
                                value={data.image}
                                onChange={(e) =>
                                    setData('image', e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.image} />

                            <ItemTypeSelect
                                onChange={handleItemTypeChange}
                                showAllItems={false}
                            />
                            <InputError message={errors.item_type} />

                            <PrimaryButton
                                className={`w-full`}
                                disabled={processing}
                            >
                                Add Item
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
