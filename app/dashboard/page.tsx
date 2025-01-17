// app/component/dashboard/Dashboard.tsx
"use client";
import React, { useState, useRef } from "react";
import { TbArrowBarLeft, TbArrowBarToRight } from "react-icons/tb";
import { GET_COUNTRIES } from "../graphql/queries";
import { ApolloProvider, useQuery, gql } from '@apollo/client';

// Dashboard Component
export default function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(150);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isDragging = useRef(false);
  const initialX = useRef(0);
  const initialSidebarWidth = useRef(0);

  // Use the useQuery hook to fetch the mocked GraphQL data
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    initialX.current = e.clientX;
    initialSidebarWidth.current = sidebarWidth;
    document.body.style.userSelect = "none"; // Prevent text selection
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - initialX.current;
    let newWidth = initialSidebarWidth.current + dx;

    if (newWidth < 100) {
      setIsSidebarCollapsed(true);
      newWidth = 0;
    } else {
      setIsSidebarCollapsed(false);
    }

    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.userSelect = "auto";
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const toggleSidebar = () => {
    if (isSidebarCollapsed) {
      setSidebarWidth(150);
    }
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {!isSidebarCollapsed && (
        <div
          className="bg-gray-800 text-white p-4"
          style={{ width: `${sidebarWidth}px` }}
        >
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Resizer */}
      {!isSidebarCollapsed && (
        <div
          className="cursor-ew-resize bg-gray-600 w-2 h-full"
          onMouseDown={handleMouseDown}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {isSidebarCollapsed ? <TbArrowBarToRight /> : <TbArrowBarLeft />}
        </button>

        <h2 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h2>
        <p className="text-lg">Here is an overview of countries</p>

        {/* Dashboard Cards */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {data?.countries?.map((country: { code: string, name: string, capital: string }) => (
              <div key={country.code} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{country.name}</h3>
                <p className="text-lg font-bold text-green-600">Capital: {country.capital}</p>
                <p className="text-lg font-bold text-yellow-600">Code: {country.code}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
