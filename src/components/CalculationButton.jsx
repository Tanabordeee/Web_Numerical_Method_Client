// src/components/CalculationButton.js

import React, { useState } from "react";

const CalculationButton = ({ method, handleCalculate }) => {
  return (
    <form onSubmit={handleCalculate}>
      <button
        type="submit"
        className="border p-2 bg-green-500 rounded-md text-white hover:bg-red-500 m-3"
      >
        CALCULATE
      </button>
    </form>
  );
};

export default CalculationButton;
