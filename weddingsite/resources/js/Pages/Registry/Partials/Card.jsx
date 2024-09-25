import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import CardModal from "./CardModal.jsx";

export default function Card() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div className="m-2 w-1/5 border-2 border-josefBlue bg-gray-50 rounded-lg hover:border-rosePink transition-all duration-200 shadow-sm hover:shadow-lg">
                <img className="rounded-t-lg" src="https://cdn.shopify.com/s/files/1/2131/5111/files/Web_Stainless_FryingPan_12in_1x1_Hero.jpg?v=1719871990" alt="frying pan" />
                <div className="p-2">
                    <h1 className="text-2xl w-full text-center p-2">Frying Pan</h1>
                    <PrimaryButton className="mt-2 w-full hover:bg-rosePink" onClick={openModal}>
                        <span className="w-full text-center text-lg">
                            View
                        </span>
                    </PrimaryButton>
                </div>
            </div>
            <CardModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
