
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeLinkStyle = {
        color: '#34d399', // emerald-400
        textShadow: '0 0 8px rgba(52, 211, 153, 0.5)',
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 shadow-md shadow-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24 md:h-28">
                        <div className="flex-shrink-0">
                             <Link to="/" className="block">
                                <img 
                                    src="https://images.squarespace-cdn.com/content/v1/5e6aa593d76c5f415c9a8f82/40f7ac0d-4416-4b1c-a76f-d95825ecb16a/WashingtonVendors-22.png" 
                                    alt="Hannah Industries Logo" 
                                    className="h-[4.2rem] w-auto filter invert grayscale brightness-2"
                                />
                            </Link>
                        </div>
                        <nav className="hidden md:block">
                            <ul className="flex items-center space-x-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <NavLink
                                            to={link.path}
                                            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* Mobile menu button is now fixed position, outside this element */}
                    </div>
                </div>
            </header>
            
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden fixed top-9 right-4 sm:right-6 lg:right-8 text-gray-300 hover:text-emerald-400 focus:outline-none z-50"
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>

            <div 
                className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-hidden={!isMenuOpen}
            >
                <div
                    className="absolute inset-0 bg-black/60 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                ></div>

                <aside 
                    className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900 shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="sidebar-title"
                >
                    <div className="flex items-center justify-between mb-8">
                         <Link to="/" onClick={() => setIsMenuOpen(false)} id="sidebar-title">
                            <img 
                                src="https://images.squarespace-cdn.com/content/v1/5e6aa593d76c5f415c9a8f82/40f7ac0d-4416-4b1c-a76f-d95825ecb16a/WashingtonVendors-22.png" 
                                alt="Hannah Industries Logo" 
                                className="h-14 w-auto filter invert grayscale brightness-2"
                            />
                        </Link>
                    </div>
                    <nav>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                                        className="block px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-emerald-400 hover:bg-slate-800"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>
        </>
    );
};

export default Header;