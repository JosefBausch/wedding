import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function ImageGallery({ auth }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % jsonLinks.length);
        }
    };

    const handlePrev = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex - 1 + jsonLinks.length) % jsonLinks.length);
        }
    };

    const jsonLinks = [
        { altText: "test", imgUrl: "18-92seB50W2ok8-sbwXOeOq7ENURQkO1" },
        { altText: "test", imgUrl: "1Fj3rkV-I_sHtybCXspW6-c7kKKSp2noJ" },
        { altText: "test", imgUrl: "12okO54QWzB5vANKVhWQ1LS0bCRS5rXC5" },
        { altText: "test", imgUrl: "1FUdOsmUeowMvr-Tdi3lrl9oUGeoDUGo_" },
        { altText: "test", imgUrl: "1Mrv4xwjYOxecroDxUM3Lrv0sYqnnSK5e" },
        { altText: "test", imgUrl: "1P8uGo7pqTIx5z4QkH_JGdI57psf_xQUZ" },
        { altText: "test", imgUrl: "1tDqDEzxP0FXmemaAy2A_3bIuqRp41wH-" },
        { altText: "test", imgUrl: "1Cp5dxi1FS6n9JtNOuaaUqzZa908AaxsM" },
        { altText: "test", imgUrl: "1ytKvEhKmqKTmvsgDuCvMy8ZPBWJcaP8h" },
        { altText: "test", imgUrl: "1eieeVzTmGlVnSPlxl4TcOigAmvKw5vPf" },
        { altText: "test", imgUrl: "1zTgS-RtnLHzf67AY4urezmEseXHZxBU9" },
        { altText: "test", imgUrl: "1km0Ma8s4SCc5779xb_3HMg_a2xso68oX" },
        { altText: "test", imgUrl: "1uaaTSBqSEKW0bZx4mfnn1uTYuZdrKGUg" },
        { altText: "test", imgUrl: "1IstWfamBAcGor4uw-PddmEBIqKjK85sD" },
        { altText: "test", imgUrl: "1fUY8FsM4uQZ-gJJ2mFuy_1PuBS5Ki68s" }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full flex justify-center">
                {/* Responsive Masonry Layout */}
                <div className="w-10/12 px-4 mt-6 space-y-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                    {jsonLinks.map((link, index) => (
                        <div 
                            key={index} 
                            className="break-inside-avoid cursor-pointer"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <img 
                                className="w-full h-auto rounded-md shadow-md object-cover transition-transform duration-200 hover:scale-105" 
                                src={`https://lh3.googleusercontent.com/d/${link.imgUrl}`} 
                                alt={link.altText} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Viewer Modal */}
            <Dialog open={selectedImageIndex !== null} onClose={() => setSelectedImageIndex(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                <Dialog.Panel className="relative max-w-3xl w-full p-4 flex items-center justify-center">
                    <button 
                        className="absolute top-6 right-6 bg-white text-black text-3xl p-3 rounded-full shadow-md hover:bg-gray-300 transition"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <FaTimes />
                    </button>
                    <button 
                        className="absolute left-6 text-white text-3xl bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-600 transition"
                        onClick={handlePrev}
                    >
                        <FaArrowLeft />
                    </button>
                    {selectedImageIndex !== null && (
                        <img 
                            className="w-full rounded-md shadow-md object-contain max-h-[80vh] max-w-[90vw]" 
                            src={`https://lh3.googleusercontent.com/d/${jsonLinks[selectedImageIndex].imgUrl}`} 
                            alt="Selected Preview"
                        />
                    )}
                    <button 
                        className="absolute right-6 text-white text-3xl bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-600 transition"
                        onClick={handleNext}
                    >
                        <FaArrowRight />
                    </button>
                </Dialog.Panel>
            </Dialog>
        </AuthenticatedLayout>
    );
}
