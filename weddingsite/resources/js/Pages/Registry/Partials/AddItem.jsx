import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FiUpload } from 'react-icons/fi'; // Importing upload icon

export default function AddItem() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        image: null, // For handling image input
        product_link: '', // Product link input
    });

    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
        setFileName(file ? file.name : '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/items', { onSuccess: () => reset() });
    };

    return (
        <div className="bg-white shadow sm:rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.title && <span className="text-red-600 text-sm">{errors.title}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.description && (
                        <span className="text-red-600 text-sm">{errors.description}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="product_link" className="block text-sm font-medium text-gray-700">
                        Product Link (Retailer)
                    </label>
                    <input
                        id="product_link"
                        type="url"
                        value={data.product_link}
                        onChange={(e) => setData('product_link', e.target.value)}
                        placeholder="https://www.retailer.com/product"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.product_link && (
                        <span className="text-red-600 text-sm">{errors.product_link}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <div className="flex justify-center items-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-300 transition-all duration-200 relative">
                        <input
                            id="image"
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                        <div className="text-center">
                            <FiUpload size={40} className="text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">{fileName || 'Click to upload an image'}</p>
                        </div>
                    </div>
                    {errors.image && <span className="text-red-600 text-sm">{errors.image}</span>}
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className={`inline-flex items-center px-4 py-2 bg-josefBlue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-josefBlue-dark focus:bg-josefBlue-dark active:bg-josefBlue-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                            processing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={processing}
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}
