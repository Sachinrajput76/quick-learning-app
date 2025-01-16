"use client";

import React from "react";

type SlideUpPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const SlideUpPopup: React.FC<SlideUpPopupProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 transition-transform transform ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          X
        </button>
        <div>{children}</div>
      </div>
    </>
  );
};

export default SlideUpPopup;
