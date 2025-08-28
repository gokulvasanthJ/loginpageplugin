import React from "react";

const Input = ({ type, placeholder, value ,onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </>
  );
};

export default Input;
