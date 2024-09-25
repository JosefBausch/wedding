import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from './Partials/Card';
export default function View() {
    return (
        <>
            <AuthenticatedLayout>
                <div className="w-full flex justify-center flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </AuthenticatedLayout>
        </>
    );
}
