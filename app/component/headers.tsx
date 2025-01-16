"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

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

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md" role="banner">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>

        {/* Mobile hamburger icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Backdrop for Mobile Menu */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          />
        )}

        {/* Navigation */}
        <nav
          ref={menuRef}
          className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 right-0 w-3/4 bg-blue-600 text-white h-full flex flex-col items-center justify-center space-y-6 transition-all duration-500 z-20 lg:static lg:w-auto lg:h-auto lg:flex-row lg:space-x-6 lg:space-y-0 lg:translate-x-0`}
        >
          {isMenuOpen && <button
            onClick={toggleMenu}
            className="text-2xl absolute top-1.5 left-1.5"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>}
          <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`hover:text-blue-300 ${isActive('/') ? 'font-bold' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={handleLinkClick}
                className={`hover:text-blue-300 ${isActive('/login') ? 'font-bold' : ''}`}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                onClick={handleLinkClick}
                className={`hover:text-blue-300 ${isActive('/register') ? 'font-bold' : ''}`}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                onClick={handleLinkClick}
                className={`hover:text-blue-300 ${isActive('/dashboard') ? 'font-bold' : ''}`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
