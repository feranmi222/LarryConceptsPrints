import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../../src/assets/images/logo.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='bg-white bg-opacity-0 p-5 w-full absolute top-0 z-10'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src={company_logo} alt="Company Logo" className='w-16 md:w-24' />
                    </Link>
                </div>

                {/* Hamburger Menu for mobile screens */}
                <div className='md:hidden' onClick={toggleMenu}>
                    <button className="text-white focus:outline-none hover:bg-transparent">
                        &#9776; {/* Hamburger icon */}
                    </button>
                </div>

                {/* Menu links */}
                <ul className={`md:flex md:items-center md:space-x-6 space-y-6 md:space-y-0 absolute md:static left-0 w-full md:w-auto md:bg-transparent bg-gray-900 bg-opacity-80 text-white text-navFont font-bold transition-all duration-300 ease-in ${menuOpen ? 'top-16' : 'top-[-400px]'}`}>
                    <li className='hover:text-black'><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li className='hover:text-black'><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li className='hover:text-black'><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
                    <li className='hover:text-black'><Link to="/quotes" onClick={() => setMenuOpen(false)}>Quotes</Link></li>
                    <li className='hover:text-black'><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li className='hover:text-black'><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
