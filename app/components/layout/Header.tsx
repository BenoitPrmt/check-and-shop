import React from 'react';
import AboutModal from "~/components/modal/AboutModal";

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center w-full">
            <h1 className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text">Check & Shop</h1>
            <AboutModal />
        </nav>
    );
};

export default Header;