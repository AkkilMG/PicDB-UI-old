/**
 * (c) 2022-2023 PicDB | Akkil M G
 * @author: Akkil M G (https://github.com/HeimanPictures)
 * @license: GNU General Public License v3.0
**/ 

import { useEffect, useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector("header").classList.add("backdrop-blur-sm");
            } else {
                document.querySelector("header").classList.remove("backdrop-blur-sm");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 z-50 w-full text-gray-100 transition-all duration-300 ease-in-out">
                <div className="container flex flex-wrap items-center pt-5 px-5 mx-auto md:flex-nowrap">
                    <a className="flex-grow font-semibold text-2xl" href="/">PicDB</a>
                    
                    {/* Hamburger Icon */}
                    <button className="inline-flex items-center p-3 ml-3 text-gray-100 rounded-lg md:hidden hover:border-rounded hover:border-orange-600 focus:outline-none bg-opacity-60 focus:outline-none fixed right-4 top-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    
                    
                    {/* Nav Menu */}
                    <nav className={`px-3 md:flex flex-wrap items-center justify-center text-base  ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <div className={`py-4 p-3 md:flex md:flex-row ${isMenuOpen ? 'mt-3 rounded absolute top-full right-4 w-full/2 bg-gray-600 bg-opacity-90 md:static md:bg-transparent' : 'px-3'}`}>
                            <a href="/" className="block px-4 py-2 text-gray-100 hover:text-orange-600 md:inline-block md:mr-6">Home</a>
                            <a href="/report" className="block px-4 py-2 text-gray-100 hover:text-orange-600 md:inline-block md:mr-6">Report</a>
                            <a href="/contact" className="block px-4 py-2 text-gray-100 hover:text-orange-600 md:inline-block md:mr-6">Contact</a>
                            <a href="https://github.com/AkkilMG/PicDB-UI" className="block px-4 py-2 text-gray-100 bg-orange-600 hover:bg-orange-700 rounded-md">
                                Source Code
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
  
