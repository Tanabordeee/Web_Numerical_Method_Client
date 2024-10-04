import { zeros, transpose, sqrt } from 'mathjs';

const clone = (array) => JSON.parse(JSON.stringify(array));

const Cholesky_Decomposition = (MatrixA, MatrixB) => {
  let A = MatrixA;
  let B = MatrixB;
  let n = A.length;
  let L = zeros(n, n).valueOf();

  const isSymmetric = (matrix) => {
    return matrix.every((row, i) =>
      row.every((value, j) => value === matrix[j][i])
    );
  };

  if (!isSymmetric(A)) {
    throw new Error("Matrix A is not symmetric, Cholesky decomposition requires a symmetric matrix.");
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i <= k; i++) {
      let sum = 0;
      for (let j = 0; j < i; j++) {
        sum += L[i][j] * L[k][j];
      }

      if (k === i) {
        const diagValue = A[k][k] - sum;

        if (diagValue < 0) {
          throw new Error("Matrix is not positive-definite, can't compute sqrt of a negative value.");
        }

        L[k][k] = sqrt(diagValue);
      } else {
        if (Math.abs(L[i][i]) < 1e-10) {
          throw new Error(`Numerical instability detected: L[${i}][${i}] is too small.`);
        }

        L[k][i] = (A[k][i] - sum) / L[i][i];
      }
    }
  }

  let L_transpose = transpose(L);
  let solution = { L, L_transpose };

  // Solve L * Y = B
  let Y = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += L[i][j] * Y[j];
    }
    Y[i] = (B[i] - sum) / L[i][i];
  }

  // Solve L^T * X = Y
  let X = [];
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += L_transpose[i][j] * X[j];
    }
    X[i] = (Y[i] - sum) / L_transpose[i][i];
  }

  let resultX = clone(X); // Clone to avoid reference issues
  return { resultX, solution };
};

export default Cholesky_Decomposition;
