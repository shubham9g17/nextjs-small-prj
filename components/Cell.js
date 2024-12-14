import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-16 h-16 bg-blue-200 rounded-full cursor-pointer transition-all hover:scale-105"
      style={{ backgroundColor: value ? "transparent" : "#c4c4c4" }}
    >
      {value && (
        <div
          className="absolute inset-0 m-auto w-12 h-12 rounded-full"
          style={{
            backgroundColor: value, // Dynamically set the player's disc color
          }}
        />
      )}
    </div>
  );
};

export default Cell;
