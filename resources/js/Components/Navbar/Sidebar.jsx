import { useEffect } from 'react';

export default function Sidebar() {
    useEffect(() => {
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;
        let startX = 0;

        const openMobileMenu = () => {
            mobileMenu.classList.remove('hidden'); // Show the menu
            setTimeout(() => {
                mobileMenu.classList.remove('-translate-x-full'); // Slide the menu in
            }, 10); // Timeout to allow transition to take effect
            body.classList.add('overflow-hidden');
        };

        const closeMobileMenu = () => {
            mobileMenu.classList.add('-translate-x-full'); // Slide the menu out
            body.classList.remove('overflow-hidden');
            setTimeout(() => {
                mobileMenu.classList.add('hidden'); // Hide the menu after transition
            }, 300); // Match the duration of the CSS transition
        };

        const handleTouchStart = (event) => {
            startX = event.touches[0].clientX; // Get the initial X position
        };

        const handleTouchMove = (event) => {
            const currentX = event.touches[0].clientX; // Get the current X position
            const diffX = startX - currentX; // Calculate the swipe distance

            if (diffX > 50) {
                // Threshold for swiping left
                closeMobileMenu();
            }
        };

        // Add event listeners
        const hamburgerButton = document.getElementById('hamburger-button');
        const closeButton = document.getElementById('close-button');
        hamburgerButton.addEventListener('click', openMobileMenu);
        closeButton.addEventListener('click', closeMobileMenu);
        mobileMenu.addEventListener('touchstart', handleTouchStart);
        mobileMenu.addEventListener('touchmove', handleTouchMove);

        return () => {
            // Cleanup event listeners on unmount
            hamburgerButton.removeEventListener('click', openMobileMenu);
            closeButton.removeEventListener('click', closeMobileMenu);
            mobileMenu.removeEventListener('touchstart', handleTouchStart);
            mobileMenu.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div>
            <div
                id="mobile-menu"
                className="bg-frosted-white fixed inset-0 z-20 flex -translate-x-full transform flex-col backdrop-blur-sm transition-transform duration-300 ease-in-out"
            >
                <div className="flex items-center justify-between p-4">
                    <div className="font-pus text-2xl">
                        <a href="#">
                            <span className="text-blue-300">Josef</span>+
                            <span className="text-rose-300">Rose</span>
                        </a>
                    </div>
                    <button
                        id="close-button"
                        className="text-3xl focus:outline-none"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="mt-6 flex flex-col items-center space-y-6 text-xl">
                    <a href="#" className="hover:underline">
                        Registry
                    </a>
                    <a href="#" className="hover:underline">
                        Accept Invite
                    </a>
                    <a href="#" className="hover:underline">
                        Account
                    </a>
                    <a href="#" className="hover:underline">
                        About Us
                    </a>
                </div>
                <div className="mt-auto flex items-center justify-center p-4 text-center text-base font-semibold text-blue-400">
                    <i className="fa-regular fa-copyright mr-2"></i> Josef+Rose
                    2024 - All Rights Reserved
                </div>
            </div>
        </div>
    );
}
