// src/components/TeacherCard.tsx
import React from 'react';

interface TeacherCardProps {
  id: string;
  name: string;
  experience: number;
  totalMinutesTaught: number;
  onClick: () => void;
  onConnect: () => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  experience,
  totalMinutesTaught,
  onClick,
  onConnect
}) => (
  <div
    className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h3 className="text-xl font-semibold mb-4">{name}</h3>
    <p className="text-gray-700">Experience: {experience} years</p>
    <p className="text-gray-700">Total Minutes Taught: {totalMinutesTaught}</p>
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the onClick of the card
        onConnect(); // Trigger the onClick function passed as a prop
      }}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Connect
    </button>
  </div>
);

export default TeacherCard;
