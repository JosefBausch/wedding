import AcceptInvite from '@/Components/AcceptInvite';
import QuoteSlideshow from '@/Components/QuoteSlideshow';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Home" />
            <AcceptInvite />
            <QuoteSlideshow />
        </AuthenticatedLayout>
    );
}
