import React, { useState, useMemo, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import Card from '@/Pages/Registry/Partials/Card.jsx';

export default function Registry({ auth, cardData }) {
    const [sortOption, setSortOption] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can adjust this number as needed
    const itemsRef = useRef(null); // Reference to the items container

    const filteredCards = useMemo(() => {
        return cardData.filter(card => {
            const isMatchingTitle = card.title.toLowerCase().includes(searchQuery.toLowerCase());
            const isReserved = sortOption === 'reserved' ? card.is_reserved : (sortOption === 'unreserved' ? !card.is_reserved : true);
            return isMatchingTitle && isReserved;
        });
    }, [cardData, sortOption, searchQuery]);

    const pageCount = Math.ceil(filteredCards.length / itemsPerPage);
    const paginatedCards = filteredCards.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        itemsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to items container
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            itemsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to items container
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
            itemsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to items container
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Registry" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-semibold mb-4">Registry Items</h1>
                            <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <label htmlFor="sort" className="mr-2">Sort by:</label>
                                    <select
                                        id="sort"
                                        value={sortOption}
                                        onChange={(e) => {
                                            setSortOption(e.target.value);
                                            setCurrentPage(1); // Reset to first page when sorting changes
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="all">All Items</option>
                                        <option value="reserved">Reserved</option>
                                        <option value="unreserved">Unreserved</option>
                                    </select>
                                </div>
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <label htmlFor="search" className="mr-2">Search by Title:</label>
                                    <input
                                        type="text"
                                        id="search"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setCurrentPage(1); // Reset to first page when searching
                                        }}
                                        placeholder="Search..."
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full sm:w-48"
                                    />
                                </div>
                                <div className="hidden sm:block">
                                    Showing {paginatedCards.length} of {filteredCards.length} items
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center" ref={itemsRef}>
                                {paginatedCards.length > 0 ? (
                                    paginatedCards.map((card) => (
                                        <Card key={card.id} card={card} userId={auth.user.id} />
                                    ))
                                ) : (
                                    <div className="text-gray-500">No items found.</div>
                                )}
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <button
                                    onClick={handlePrevPage}
                                    className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                    disabled={currentPage === 1}
                                >
                                    &lt; Prev
                                </button>
                                {[...Array(pageCount)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`mx-1 px-3 py-1 rounded ${
                                            currentPage === index + 1
                                                ? 'bg-josefBlue text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={handleNextPage}
                                    className={`mx-1 px-3 py-1 rounded ${
                                        currentPage === pageCount || paginatedCards.length === 0
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                    disabled={currentPage === pageCount || paginatedCards.length === 0}
                                >
                                    Next &gt;
                                </button>
                            </div>
                            <div className="mt-4 sm:hidden text-gray-500">
                                Showing {paginatedCards.length} of {filteredCards.length} items
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
