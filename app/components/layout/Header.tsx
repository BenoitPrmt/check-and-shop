import React from 'react';
import AboutModal from "~/components/modal/AboutModal";
import {Link} from "react-router";

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center w-full">

            <Link to="/">
                <div className="flex items-center space-x-2">
                    <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
                    <h1 className="font-bold text-2xl bg-gradient-to-r from-[#f17587] via-[#f68058] to-[#fe901a] text-transparent bg-clip-text">Check & Shop</h1>
                </div>
            </Link>

            <AboutModal />
        </nav>
    );
};

export default Header;