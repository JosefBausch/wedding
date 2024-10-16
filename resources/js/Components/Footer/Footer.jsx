import SendMessage from './Components/SendMessage';

export default function Footer() {
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <footer className="bg-frosted-light-blue mb-2 mt-8 w-11/12 rounded-xl border-2 border-blue-300 px-4 py-8 text-lg shadow-md backdrop-blur-md sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-5">
                        <div>
                            <ul className="space-y-3">
                                <li>
                                    <a className="hover:underline" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Registry
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Accept Invite
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Your Account
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li>
                                    <a className="hover:underline" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Gift List
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li>
                                    <a className="hover:underline" href="#">
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Travel Info
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <SendMessage />
                        </div>
                    </div>
                    <div className="mt-8 text-center text-base font-semibold text-blue-500">
                        <i className="fa-regular fa-copyright"></i> Josef+Rose
                        2024 - All Rights Reserved
                    </div>
                </footer>
            </div>
        </>
    );
}
