import React from "react";

const Modal = ({ stepStatus, onClose, content }) => {
  if (!stepStatus) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-auto z-[1001] mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Healthy Recipe</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer rounded-full hover:bg-gray-100 p-2"
          >
            ✕
          </button>
        </div>

        <div className="modal-content">
          <div className="whitespace-pre-line">
            {content || "No content available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;