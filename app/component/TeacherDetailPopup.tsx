// app/component/TeacherDetailPopup.tsx
import React from 'react';

interface TeacherDetailPopupProps {
  teacher: {
    id: string;
    name: string;
    experience: number;
    totalMinutesTaught: number;
  };
  onClose: () => void;
}

const TeacherDetailPopup: React.FC<TeacherDetailPopupProps> = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">{teacher.name}</h2>
        <p className="text-gray-700">Experience: {teacher.experience} years</p>
        <p className="text-gray-700">Total Minutes Taught: {teacher.totalMinutesTaught}</p>

        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailPopup;
