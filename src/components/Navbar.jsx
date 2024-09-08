import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="flex mt-4 justify-between items-center p-4">
            <NavLink to="/" className="text-3xl lg:text-4xl font-bold text-gray-900 ">etec</NavLink>
            <ul className="gap-8 text-gray-600 hidden md:flex text-lg">
                <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>All products</NavLink></li>
                <li><NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>About us</NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>FAQ</NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>Blog</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>Contact</NavLink></li>
            </ul>
            <FaBars onClick={handleMenu} className='md:hidden cursor-pointer text-2xl' />
            {isMenuOpen && (
                <ul className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 gap-4 text-gray-600 flex flex-col md:hidden w-full text-lg">
                    <li><NavLink to="/products" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>All products</NavLink></li>
                    <li><NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>About us</NavLink></li>
                    <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>FAQ</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>Blog</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-gray-900' : ''}>Contact</NavLink></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar