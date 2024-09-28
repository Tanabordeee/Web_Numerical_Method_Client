// src/components/MethodSelector.js

import React from "react";

const MethodSelector = ({ method, setMethod }) => {
  return (
    <div className="flex justify-center my-4">
      <select
        className="cursor-pointer p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="Cramer">Cramer's Rule</option>
        <option value="GaussElimination">Gauss Elimination</option>
        <option value="GaussJordan">Gauss-Jordan Elimination</option>
        <option value="MatrixInversion">Matrix Inversion</option>
        <option value="LU_Decomposition">LU Decomposition Method</option>
        <option value="Cholesky_Decomposition">
          Cholesky Decomposition Method
        </option>
        <option value="ConjugateGradientMethod">Conjugate Gradient Method</option>
        <option value="GaussSeidel">Gauss-Seidel Method</option>
        <option value="JacobiMethod">Jacobi Method</option>
      </select>
    </div>
  );
};

export default MethodSelector;
