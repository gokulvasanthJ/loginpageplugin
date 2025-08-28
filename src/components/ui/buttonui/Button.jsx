import React from "react";

const Button = ({ text, color, onClick, width, height }) => {
  return (
    <>
      <button
        color={color}
        onClick={onClick}
        className={` ${width} ${height} bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition mb-4`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
