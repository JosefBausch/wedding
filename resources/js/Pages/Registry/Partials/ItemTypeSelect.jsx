import ItemType from '../../../enums/ItemType';

export default function ItemTypeSelect({ onChange, showAllItems = true }) {
    // Create an array of item type values from the ItemType enum
    const itemTypes = Object.values(ItemType);

    return (
        <select
            className="w-full rounded-lg border border-rose-300 bg-frosted-white p-2 backdrop-blur-md focus:border-rose-400 focus:outline-none md:w-1/3"
            onChange={onChange} // Call the passed onChange function
        >
            {showAllItems && <option value="">All Items</option>}{' '}
            {/* Conditionally render "All Items" option */}
            {/* Include item types from the enum */}
            {itemTypes.map((type) => (
                <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}{' '}
                    {/* Capitalize first letter */}
                </option>
            ))}
        </select>
    );
}
