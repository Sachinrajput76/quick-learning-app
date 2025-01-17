import React from "react";

// Define the type for Teacher
interface Teacher {
    name: string;
    experience: number;
    totalMinutesTaught: number;
}

// Define the props for the Popup component
interface PopupProps {
    teacher: Teacher;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ teacher, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-2xl font-semibold mb-4">{teacher?.name}</h3>
                <p><strong>Experience:</strong> {teacher?.experience} years</p>
                <p><strong>Total Minutes Taught:</strong> {teacher?.totalMinutesTaught}</p>
                <div className="mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
