import DeleteRegistryCard from './DeleteRegistryItem';

export default function RegistryCard({
    id, // Accept the id prop here
    title,
    link,
    image,
    is_reserved,
    item_type,
}) {
    const reserved = is_reserved; // Use the boolean directly

    return (
        <div className="relative rounded-xl border-4 border-rose-100 bg-frosted-white p-4 shadow-lg backdrop-blur-md duration-300 hover:shadow-2xl md:border-white">
            <div className="absolute right-4 top-4">
                {can.create_registry_item && (
                    <DeleteRegistryCard item_id={id} r={{ id, title }} />
                )}{' '}
                {/* Pass id to DeleteRegistryCard */}
            </div>
            <img
                src={image}
                alt={title}
                className="hidden h-56 w-full rounded-lg border-2 border-rose-100 object-cover md:block"
            />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">
                    {item_type.charAt(0).toUpperCase() + item_type.slice(1)}
                </p>
                <div className="mt-4 flex gap-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full rounded-lg bg-rose-300 px-4 py-2 text-center text-white duration-300 hover:bg-rose-400"
                    >
                        View Item
                    </a>
                    <button
                        className={`w-full rounded-lg px-4 py-2 text-white duration-300 ${reserved ? 'bg-gray-300' : 'bg-blue-300 hover:bg-blue-400'}`}
                        disabled={reserved}
                    >
                        {reserved ? 'Reserved' : 'Register'}
                    </button>
                </div>
            </div>
        </div>
    );
}
