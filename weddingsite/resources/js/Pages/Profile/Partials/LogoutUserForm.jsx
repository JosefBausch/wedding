import PrimaryLink from '@/Components/PrimaryLink.jsx';
export default function LogoutUserForm() {
    return (
        <>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Logout of your account</h2>
                <br></br>
                <PrimaryLink method="post" href={route('logout')} as="button">Logout</PrimaryLink>
            </header>
        </>
    );
}
