import { router } from '@inertiajs/react';
import { useState } from 'react';
import ItemTypeSelect from './ItemTypeSelect'; // Adjust the path as necessary

export default function Search() {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [itemType, setItemType] = useState('all'); // State for item type

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleItemTypeChange = (e) => {
        setItemType(e.target.value); // Update item type state
    };

    const handleSearch = () => {
        router.get(
            route('registry.index'),
            { filter, search: searchTerm, itemType }, // Include itemType in the search parameters
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    return (
        <div className="flex w-full justify-center p-4 backdrop-blur-md">
            <div className="flex w-11/12 flex-col items-center gap-4 md:flex-row">
                <select
                    className="w-full rounded-lg border border-rose-300 bg-frosted-white p-2 backdrop-blur-md focus:border-rose-400 focus:outline-none md:w-1/3"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Items</option>
                    <option value="registered">Registered</option>
                    <option value="not-registered">Not Registered</option>
                </select>

                {/* Include the ItemTypeSelect component */}
                <ItemTypeSelect
                    onChange={handleItemTypeChange}
                    showAllItems={true}
                />

                <input
                    type="text"
                    placeholder="Search for items..."
                    className="w-full rounded-lg border border-rose-300 bg-frosted-white p-2 backdrop-blur-md focus:border-rose-400 focus:outline-none md:w-2/3"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button
                    className="flex items-center rounded-lg bg-rose-300 px-4 py-2 text-white duration-300 hover:bg-rose-400"
                    onClick={handleSearch}
                >
                    <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
                </button>
            </div>
        </div>
    );
}
