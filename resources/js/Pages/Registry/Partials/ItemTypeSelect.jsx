import { useEffect, useState } from 'react';

export default function ItemTypeSelect({ onChange }) {
    const [itemTypes, setItemTypes] = useState([]);

    useEffect(() => {
        const fetchItemTypes = async () => {
            const response = await fetch('/item-types');
            const data = await response.json();
            setItemTypes(data);
        };

        fetchItemTypes();
    }, []);

    return (
        <select
            className="bg-frosted-white w-full rounded-lg border border-rose-300 p-2 backdrop-blur-md focus:border-rose-400 focus:outline-none md:w-1/3"
            onChange={onChange} // Call the passed onChange function
        >
            <option value="all">All Types</option>
            {itemTypes.map((type) => (
                <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}{' '}
                    {/* Capitalize first letter */}
                </option>
            ))}
        </select>
    );
}
