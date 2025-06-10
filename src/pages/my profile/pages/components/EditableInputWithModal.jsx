import { Edit, X } from "lucide-react";
import React, { useState, useRef } from "react";

export default function EditableInputWithModal({ label, value }) {
  const [isEditable, setIsEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

  const handlePenClick = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setIsEditable(true);
    setShowModal(false);

    // Focus after slight delay
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <label className="text-sm text-gray-700">{label}</label>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          readOnly={!isEditable}
          onChange={(e) => setInputValue(e.target.value)}
          className={`w-full px-3 py-2 border-0 outline-none rounded-md ${
            isEditable
              ? "shadow bg-white"
              : "bg-gray-50 cursor-not-allowed"
          }`}
        />
        {isEditable ? (
          <X
            onClick={() => setIsEditable(false)}
            className="absolute cursor-pointer right-2 text-green-600 hover:text-green-800"
          />
        ) : (
          <button
            onClick={handlePenClick}
            className="absolute cursor-pointer right-2 text-green-600 hover:text-green-800"
          >
            <Edit size={15} />
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={handleModalCancel}
          className="fixed inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 shadow-lg w-80"
          >
            <p className="text-gray-800 text-center mb-4">
              Are you sure you want to edit?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleModalConfirm}
                className="bg-[#47BA82] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#47BA82]/90"
              >
                Done
              </button>
              <button
                onClick={handleModalCancel}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
