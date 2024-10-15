export default function Footer() {
    return (
        <div className="pb-5 w-full flex justify-center">
            <footer className="w-full md:w-2/3 lg:w-1/3 flex flex-col items-center justify-center bg-gray-100 mt-5 p-4 rounded-lg shadow-md">
                <nav className="flex items-center space-x-4 mb-2">
                    <a href="/" className="text-md text-gray-600 hover:text-rosePink">RSVP</a>
                    <span className="border-l h-4 border-gray-400"></span>
                    <a href="/" className="text-md text-gray-600 hover:text-rosePink">Reservation List</a>
                    <span className="border-l h-4 border-gray-400"></span>
                    <a href="/" className="text-md text-gray-600 hover:text-rosePink">Profile</a>
                    <span className="border-l h-4 border-gray-400"></span>
                    <a href="/" className="text-md text-gray-600 hover:text-rosePink">Home</a>
                </nav>
                <p className="text-sm text-gray-600">© 2024 Hydra Communications LLC | All Rights Reserved</p>
            </footer>
        </div>
    );
}
