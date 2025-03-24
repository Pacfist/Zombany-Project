import React from "react";

const Modal = ({ stepStatus, onClose, content }) => {
  if (!stepStatus) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-auto z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Step</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="modal-content">{content || "No content available"}</div>
      </div>
    </div>
  );
};

export default Modal;
