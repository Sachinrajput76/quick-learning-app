"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicking outside of the menu box
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>

        {/* Mobile hamburger icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation for desktop and mobile */}
        <nav
          ref={menuRef}
          className={`${
            isMenuOpen
              ? 'translate-x-0' // Menu is open, slide to position
              : 'translate-x-full' // Menu is closed, hidden offscreen
          } lg:translate-x-0 fixed top-0 right-0 w-3/4 bg-blue-600 text-white h-full flex flex-col items-center justify-center space-y-6 transition-all duration-500 lg:block lg:static lg:w-auto lg:h-auto lg:flex-row lg:space-x-6 lg:space-y-0`}
        >
          {/* Cross Icon Positioned at Top Left of the Menu */}
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 left-4 text-2xl text-white"
            >
              <FaTimes />
            </button>
          )}

          <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-300">Login</Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-blue-300">Register</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
