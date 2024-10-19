// src/components/MatrixInput.js

import React from "react";

const MatrixInput = ({
  size,
  matrixA,
  setMatrixA,
  matrixB,
  setMatrixB,
  matrixX,
  setMatirX,
  method,
}) => {
  // Handle changes in Matrix A inputs
  const handleMatrixAChange = (value, row, col) => {
    const updatedMatrixA = matrixA.map((r, rowIndex) => {
      if (rowIndex === row) {
        return r.map((c, colIndex) => {
          if (colIndex === col) {
            const parsedValue = parseFloat(value);
            return isNaN(parsedValue) ? 0 : parsedValue;
          }
          return c;
        });
      }
      return r;
    });
    setMatrixA(updatedMatrixA);
  };

  // Handle changes in Matrix B inputs
  const handleMatrixBChange = (value, row) => {
    const updatedMatrixB = matrixB.map((val, rowIndex) => {
      if (rowIndex === row) {
        const parsedValue = parseFloat(value);
        return isNaN(parsedValue) ? 0 : parsedValue;
      }
      return val;
    });
    setMatrixB(updatedMatrixB);
  };

  // Handle changes in Matrix X inputs
  const handleMatrixXChange = (value, row) => {
    const updateMatrixX = matrixX.map((val, rowIndex) => {
      if (rowIndex === row) {
        const parsedValue = parseFloat(value);
        return isNaN(parsedValue) ? 0 : parsedValue;
      }
      return val;
    });
    setMatirX(updateMatrixX);
  };

  // Create input grid for Matrix A
  const renderMatrixA = () => {
    return matrixA.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-3 ">
        {row.map((_, colIndex) => (
          <input
            className="border w-full h-20 text-center mb-3 rounded-lg"
            onChange={(e) =>
              handleMatrixAChange(e.target.value, rowIndex, colIndex)
            }
            value={_}
            key={`${rowIndex}-${colIndex}`}
            type="number"
            placeholder={`a${rowIndex * size + colIndex + 1}`}
          />
        ))}
      </div>
    ));
  };

  // Create input grid for Matrix B
  const renderMatrixB = () => {
    return matrixB.map((_, index) => (
      <input
        className="text-center border w-[60%] h-20 mb-3 rounded-lg"
        type="number"
        key={index}
        value={_}
        placeholder={`b${index + 1}`}
        onChange={(e) => handleMatrixBChange(e.target.value, index)}
      />
    ));
  };

  const renderMatrixX = () => {
    return matrixX.map((_, index) => (
      <input
        className="text-center border w-[60%] h-20 mb-3 rounded-lg"
        type="number"
        key={index}
        value={_}
        placeholder={`X${index + 1}`}
        onChange={(e) => handleMatrixXChange(e.target.value, index)}
      />
    ));
  };

  return (
    <div>
      <div className="flex items-center mt-2 justify-center w-[100%]">
        {/* Matrix A */}
        <div className="ml-5 flex flex-col justify-center items-center">
          <p className="mb-3 text-4xl">[A]</p>
          <div className="p-4 rounded-lg">{renderMatrixA()}</div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col justify-center items-center text-center h-[100%] mx-4">
          <p className="text-4xl">{"{X}"}</p>
          <div className="p-4 rounded-lg">
            {matrixA.map((_, index) => (
              <input
                className="text-center border w-[60%] h-20 mb-3 rounded-lg"
                disabled
                key={index}
                placeholder={`X${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Equals Sign */}
        <div className="flex flex-col justify-center items-center text-center h-[100%]">
          <p className="text-4xl">=</p>
        </div>

        {/* Matrix B */}
        <div className="flex flex-col justify-center items-center text-center h-[100%]">
          <p className="mb-3 text-4xl">[B]</p>
          <div className="p-4 rounded-lg">{renderMatrixB()}</div>
        </div>
      </div>

      {(method === "ConjugateGradientMethod" || method === "GaussSeidel" || method === "jacobiMethods") &&(
        <div className="flex flex-col justify-center items-center text-center h-[100%]">
          <p>[X]</p>
          <div className="p-4 rounded-lg flex gap-2">{renderMatrixX()}</div>
        </div>
      )}
    </div>
  );
};

export default MatrixInput;
