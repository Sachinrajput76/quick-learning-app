"use client"; // Ensures this code runs on the client side

import React, { ReactNode, useEffect, useState } from 'react';
import Footer from './component/footer';
import Header from './component/headers';
import './globals.css';
import ReduxProvider from './component/reduxProvider';
import { usePathname } from 'next/navigation'; // Correct import for the App Router
import Head from 'next/head'; // Meta tags managed here

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<string>('');
  const pathname = usePathname(); // Using usePathname() from next/navigation

  // Update the currentPage state based on the pathname
  useEffect(() => {
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
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>Quick Learning App</title>
        <meta property="og:title" content="Quick Learning App" />
        <meta
          property="og:description"
          content="A platform to connect teachers and students for instant learning and earning opportunities."
        />
        <meta
          property="og:image"
          content="assets/logo3.jpeg"
        />
        <meta
          property="og:url"
          content="https://sachinrajput76.github.io/quick-learning-app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className="h-full">
        <ReduxProvider>
          <div className="bg-gray-100 flex flex-col h-full">
            {/* Header */}
            <Header />
            {/* Main content area with conditional styling */}
            <main
              className={`${['landing', 'login','dashboard'].includes(currentPage)
                  ? 'h-[calc(100vh-136px)]'
                  : ''
                } flex-grow overflow-y-auto`}
            >
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
