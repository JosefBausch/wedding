const CountDisplay = ({ count }) => {
    const itemText = count === 1 ? 'Item' : 'Items';
    const displayText =
        count === 0 ? 'No Items Found' : `Found ${count} ${itemText}`;

    return (
        <div className="my-4 flex justify-center">
            <div className="inline-flex items-center rounded-xl bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800 shadow-sm">
                <svg
                    className="mr-2 h-5 w-5 text-rose-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                {displayText}
            </div>
        </div>
    );
};

export default CountDisplay;
