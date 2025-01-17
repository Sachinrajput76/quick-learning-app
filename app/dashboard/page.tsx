// app/dashboard/Dashboard.tsx
'use client'
import { useQuery } from '@apollo/client';
import React, { useState, useRef } from "react";
import { TbArrowBarLeft, TbArrowBarToRight } from "react-icons/tb";
import {
  //  GET_COUNTRIES, 
  GET_TEACHERS
} from "../graphql/queries"; // Add GET_TEACHERS query
import TeacherCard from '../component/TeacherCard'; // Assuming the TeacherCard component is in the same folder
import Popup from '../component/Popup'; // Assuming the Popup component is in the same folder

// Dashboard Component
export default function Dashboard() {
  const [sidebarWidth, setSidebarWidth] = useState(150);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<null | { name: string, experience: number, totalMinutesTaught: number }>(null);
  const isDragging = useRef(false);
  const initialX = useRef(0);
  const initialSidebarWidth = useRef(0);

  // Use the useQuery hook to fetch the mocked GraphQL data for countries and teachers
  // const { data: countriesData, loading: countriesLoading, error: countriesError } = useQuery(GET_COUNTRIES);
  const { data: teachersData, loading: teachersLoading, error: teachersError } = useQuery(GET_TEACHERS);

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

  const handleTeacherClick = (teacher: { name: string, experience: number, totalMinutesTaught: number }) => {
    setSelectedTeacher(teacher);
  };

  const handleClosePopup = () => {
    setSelectedTeacher(null); // Close the popup when clicked
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
        {/* Countries Dashboard Cards */}
        {/* <h3 className="text-2xl font-semibold mt-6 mb-4">Countries</h3>
        {countriesLoading ? (
          <p>Loading countries...</p>
        ) : countriesError ? (
          <p className="text-red-500">Error: {countriesError.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {countriesData?.countries?.map((country: { code: string, name: string, capital: string }) => (
              <div
                key={country.code}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{country.name}</h3>
                <p className="text-lg font-bold text-green-600">Capital: {country.capital}</p>
                <p className="text-lg font-bold text-yellow-600">Code: {country.code}</p>
              </div>
            ))}
          </div>
        )} */}

        {/* Teachers Dashboard Cards */}
        <h3 className="text-2xl font-semibold mt-6 mb-4">Teachers</h3>
        {teachersLoading ? (
          <p>Loading teachers...</p>
        ) : teachersError ? (
          <p className="text-red-500">Error: {teachersError.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {teachersData?.teachers?.map((teacher: { id: string, name: string, experience: number, totalMinutesTaught: number }) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                experience={teacher.experience}
                totalMinutesTaught={teacher.totalMinutesTaught}
                onClick={() =>
                  handleTeacherClick({
                    name: teacher.name,
                    experience: teacher.experience,
                    totalMinutesTaught: teacher.totalMinutesTaught,
                  })
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* Show Popup if a teacher is selected */}
      {selectedTeacher && (
        <Popup teacher={selectedTeacher} onClose={handleClosePopup} />
      )}
    </div>
  );
}
