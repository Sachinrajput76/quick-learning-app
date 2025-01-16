"use client"; // Ensures this code runs on the client side

import React, { ReactNode, useEffect, useState } from 'react';
import Footer from './component/footer';
import Header from './component/headers';
import './globals.css';
import ReduxProvider from './component/reduxProvider';
import { usePathname } from 'next/navigation'; // Correct import for the App Router

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Using usePathname() from next/navigation

  // Set the isMounted flag to true after the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check the pathname and update the currentPage state accordingly
  useEffect(() => {
    if (isMounted) {
      switch (pathname) {
        case '/':
          setCurrentPage('landing');
          break;
        case '/login':
          setCurrentPage('login');
          break;
        case '/register':
          setCurrentPage('register');
          break;
        case '/dashboard':
          setCurrentPage('dashboard');
          break;

        default:
          setCurrentPage('other');
          break;
      }
    }
  }, [isMounted, pathname]);

  // Ensure that nothing is rendered until mounted
  if (!isMounted) return null;
console.log("currentPage",currentPage)
  return (
    <html lang="en">
      <body className="h-full">
        <ReduxProvider>
          <div className="bg-gray-100 flex flex-col h-full">
            {/* Header */}
            <Header />
            {/* Main content area with conditional styling */}
            <main className={`${currentPage === 'landing' ? 'h-[calc(100vh-120px)]' : ''} flex-grow overflow-y-auto`}>
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
