"use client";
// app/dashboard/page.tsx
import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(150); // Default sidebar width
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Collapse state
  const isDragging = useRef(false);
  const initialX = useRef(0);
  const initialSidebarWidth = useRef(0);

  // Handle mouse down event on the resizer
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    initialX.current = e.clientX;
    initialSidebarWidth.current = sidebarWidth;
    document.body.style.userSelect = "none"; // Prevent text selection
  };

  // Handle mouse movement during drag
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - initialX.current;
    let newWidth = initialSidebarWidth.current + dx;

    // Collapse sidebar if width is too small
    if (newWidth < 100) {
      setIsSidebarCollapsed(true);
      newWidth = 0;
    } else {
      setIsSidebarCollapsed(false);
    }

    setSidebarWidth(newWidth);
  };

  // Stop dragging on mouse up
  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.userSelect = "auto"; // Re-enable text selection
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    if (isSidebarCollapsed) {
      setSidebarWidth(150); // Reset to default width
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
          {isSidebarCollapsed ? ">" : "<"}
        </button>

        <h2 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h2>
        <p className="text-lg">Here is an overview of your account activity.</p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Total Sales</h3>
            <p className="text-3xl font-bold text-blue-600">$20,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">New Orders</h3>
            <p className="text-3xl font-bold text-green-600">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Total Users</h3>
            <p className="text-3xl font-bold text-yellow-600">1,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
