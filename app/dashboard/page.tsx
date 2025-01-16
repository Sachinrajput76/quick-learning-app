"use client";
// app/dashboard/page.tsx
import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(150); // Initial width of sidebar
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to check if sidebar is collapsed
  const isDragging = useRef(false);
  const initialX = useRef(0);
  const initialSidebarWidth = useRef(0);

  // Handle the start of dragging
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    initialX.current = e.clientX;
    initialSidebarWidth.current = sidebarWidth;
    // Prevent text selection during drag
    document.body.style.userSelect = "none";
  };

  // Handle resizing (dragging the resizer)
  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - initialX.current;
    let newSidebarWidth = initialSidebarWidth.current + dx;

    // If the sidebar width is less than the minimum width, collapse the sidebar
    if (newSidebarWidth < 100) {
      setIsSidebarCollapsed(true);
      newSidebarWidth = 0;
    } else {
      setIsSidebarCollapsed(false);
    }

    setSidebarWidth(newSidebarWidth);
  };

  // Stop dragging
  const onMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "auto";
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    document.body.style.userSelect = "auto";
  };

  // Attach the event listeners on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    if (!isSidebarCollapsed) {
      setSidebarWidth(0); // Collapse the sidebar
    } else {
      setSidebarWidth(150); // Expand the sidebar
    }
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        {!isSidebarCollapsed && (
          <div
            className="bg-gray-800 text-white p-4"
            style={{ width: `${sidebarWidth}px` }}
          >
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
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
            onMouseDown={onMouseDown}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            {isSidebarCollapsed ? "Show Sidebar" : "Hide Sidebar"}
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

          {/* Recent Activity */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">Order #1234 shipped to John Doe.</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">User Jane Smith updated her profile.</p>
                <p className="text-sm text-gray-500">4 hours ago</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">New order #5678 received from Mike Taylor.</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
