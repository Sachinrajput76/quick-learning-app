import React from 'react';
type Teacher = {
  id: string;
  name: string;
  experience: number;
  totalMinutesTaught: number;
  subjects?: { id: string; name: string; level: string }[];
  ratings?: { average: number; count: number };
  joinedDate?: string;
};

type PopupProps = {
  teacher: Teacher;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{teacher.name}</h3>
        <p className="text-gray-600 mb-2">
          <strong>Experience:</strong> {teacher.experience} years
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Total Minutes Taught:</strong> {teacher.totalMinutesTaught.toLocaleString()} minutes
        </p>
        {teacher.joinedDate && (
          <p className="text-gray-600 mb-2">
            <strong>Joined Date:</strong> {new Date(teacher.joinedDate).toLocaleDateString()}
          </p>
        )}
        {teacher.subjects && teacher.subjects.length > 0 && (
          <div className="mb-4">
            <strong className="text-gray-700">Subjects:</strong>
            <ul className="list-disc list-inside mt-2">
              {teacher.subjects.map((subject) => (
                <li key={subject.id} className="text-gray-600">
                  {subject.name} ({subject.level})
                </li>
              ))}
            </ul>
          </div>
        )}
        {teacher.ratings && (
          <p className="text-gray-600 mb-4">
            <strong>Ratings:</strong> {teacher.ratings.average} (based on {teacher.ratings.count} reviews)
          </p>
        )}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
