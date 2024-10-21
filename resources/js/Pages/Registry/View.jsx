import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RegistryCard from '@/Pages/Registry/Partials/RegistryCard';
import { Head } from '@inertiajs/react';
import AddItem from './Partials/AddItem';
import CountDisplay from './Partials/CountDisplay';
import Search from './Partials/Search';

export default function View({ auth, cardsData, count }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Registry" />
                <Search />
                <AddItem />
                <CountDisplay count={count} />
                <div className="flex w-full justify-center">
                    <div className="mt-4 grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {cardsData.map((s) => (
                            <RegistryCard
                                key={s.id}
                                title={s.title}
                                link={s.link}
                                image={s.image}
                                is_reserved={s.is_reserved}
                                item_type={s.item_type}
                            />
                        ))}
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
