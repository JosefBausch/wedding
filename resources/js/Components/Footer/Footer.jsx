import SendMessage from "./Components/SendMessage";

export default function Footer() {
    return (
        <div className="flex w-full items-center justify-center mt-8 mb-4">
            <footer className="w-4/5 rounded-xl border-2 border-blue-300 bg-frosted-light-blue px-4 py-8 text-lg shadow-md backdrop-blur-md sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <p className="font-pus text-xl font-center">
                            "As for me and my house, we will serve the Lord."
                        </p>
                    </div>
                    <p className="mt-8 text-center text-base font-semibold text-blue-500">
                        <i className="fa-regular fa-copyright"></i> 2024 - 2025 Josef+Rose
                    </p>
                </div>
            </footer>
        </div>
    );
}
