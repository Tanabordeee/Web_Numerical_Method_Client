import React from "react";

const SizeInput = ({ size, setSize }) => {
  return (
    <input
      className="border mx-2 mb-2 p-3 rounded-lg"
      placeholder="INPUT SIZE"
      type="number"
      min="1"
      value={size}
      onChange={(e) => setSize(parseInt(e.target.value, 10))}
    />
  );
};

export default SizeInput;