"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Footer from "./component/footer";
import Header from "./component/headers";
import "./globals.css";
import ReduxProvider from "./component/reduxProvider";
import { usePathname } from "next/navigation"; // Correct import for the App Router
import SlideUpPopup from "./component/SlideUpPopup"; // Import the SlideUpPopup component
import Head from "next/head";
import SwipeHandler from "./component/SwipeHandler";
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("landing");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // State for popup
  const pathname = usePathname(); // Using usePathname() from next/navigation

  // Update the currentPage state based on the pathname
  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrentPage("landing");
        break;
      case "/login":
        setCurrentPage("login");
        break;
      case "/register":
        setCurrentPage("register");
        break;
      case "/dashboard":
        setCurrentPage("dashboard");
        break;
      default:
        setCurrentPage("other");
        break;
    }
  }, [pathname]);

  // Function to open and close the popup
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  // Function to close the menu
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

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
          content="https://example.com/your-image.jpg"
        />
        <meta
          property="og:url"
          content="https://sachinrajput76.github.io/quick-learning-app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className="h-full">
        <ReduxProvider>
          <ApolloProvider client={client}>
            <SwipeHandler
              onSwipeLeft={() => setIsMenuOpen(true)} // Open menu on swipe left
              onSwipeRight={handleMenuClose} // Close menu on swipe right
            >
              <div className="bg-gray-100 flex flex-col h-full">
                {/* Header with isMenuOpen and onMenuClose props */}
                <Header isMenuOpenProp={isMenuOpen} onMenuClose={handleMenuClose} />

                {/* Main content area with conditional styling */}
                <main
                  className={`${['landing', 'login', 'dashboard'].includes(currentPage)
                    ? 'h-[calc(100vh-136px)]'
                    : ''
                    } flex-grow overflow-y-auto`}
                >
                  {children}
                </main>

                {/* Footer */}
                <Footer />

                {/* Slide-up popup for filters */}
                <SlideUpPopup isOpen={isPopupOpen} onClose={togglePopup}>
                  {/* Filter Content Here */}
                  <h2 className="text-lg font-bold">Filter Options</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="category" className="block">
                        Category
                      </label>
                      <select id="category" className="p-2 border rounded">
                        <option value="">Select Category</option>
                        <option value="tech">Technology</option>
                        <option value="edu">Education</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="price" className="block">
                        Price Range
                      </label>
                      <input
                        type="range"
                        id="price"
                        min="0"
                        max="1000"
                        step="10"
                        className="w-full"
                      />
                    </div>
                  </div>
                </SlideUpPopup>

                {/* Trigger button to open the popup */}
                {/* <button
                onClick={togglePopup}
                className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full"
              >
                Open Filters
              </button> */}
              </div>
            </SwipeHandler>
          </ApolloProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
