import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white shadow mt-8">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">
                    © 2023 etec. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <NavLink to="/about-us" className="hover:underline me-4 md:me-6">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" className="hover:underline me-4 md:me-6">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="hover:underline me-4 md:me-6">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer