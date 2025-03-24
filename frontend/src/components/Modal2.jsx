import React from "react";

const Modal = ({mod_title, stepStatus, onClose, content }) => {
  if (!stepStatus) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-auto z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{mod_title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="modal-content flex justify-center items-center">
          {content ? (
                    <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Parameter</th>
                        <th className="border border-gray-300 px-4 py-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Calories</td>
                        <td className="border border-gray-300 px-4 py-2">89 kcal</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Proteins</td>
                        <td className="border border-gray-300 px-4 py-2">1.1 g</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Fats</td>
                        <td className="border border-gray-300 px-4 py-2">0.3 g</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Carbs</td>
                        <td className="border border-gray-300 px-4 py-2">22.8 g</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Fiber</td>
                        <td className="border border-gray-300 px-4 py-2">2.6 g</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Vitamin C</td>
                        <td className="border border-gray-300 px-4 py-2">8.7 mg</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Potassium</td>
                        <td className="border border-gray-300 px-4 py-2">358 mg</td>
                      </tr>
                    </tbody>
                  </table>
          ) : (
            <div className="flex flex-col justify-start items-center gap-4">
              <p>Loading data of the item</p>
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;