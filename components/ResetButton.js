import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
