import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RegistryCard from '@/Pages/Registry/Partials/RegistryCard';
import { Head, usePage } from '@inertiajs/react';
import AddItem from './Partials/AddItem';
import CountDisplay from './Partials/CountDisplay';
import Search from './Partials/Search';

export default function View({ auth, cardsData, count }) {
    const { can } = usePage().props;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Registry" />
            <Search />

            {can.create_registry_item && <AddItem />}

            <CountDisplay count={count} />
            <div className="flex w-full justify-center">
                <div className="mt-4 grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {cardsData.map((r) => (
                        <RegistryCard
                            key={r.id} // This key is for React's reconciliation process
                            id={r.id} // Pass the id to the RegistryCard
                            title={r.title}
                            link={r.link}
                            image={r.image}
                            is_reserved={r.is_reserved}
                            item_type={r.item_type}
                            user_id={r.user_id}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
