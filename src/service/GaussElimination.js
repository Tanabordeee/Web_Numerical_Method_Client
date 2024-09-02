const GuassElimination = (MatrixA , MatrixB) =>{
    const A = MatrixA

    const B = MatrixB

let n = A.length;
let factor = []
let temp = []
let factorB = []
let tempB = B.map(row => row);
for (let i = 0; i < n; i++) {
    for (let k = i+1; k < n; k++) {
        for(let m = 0 ; m < n ; m++){
            factor.push(A[i][m] / A[i][i]);
            factorB.push(B[i] / A[i][i]);
        }
        for (let j = 0; j < n; j++) {
            temp[j] = A[k][j] - factor[j] * A[k][i];
            tempB[k] = B[k] - factorB[j] * A[k][i];
        }
        for(let p = 0 ; p < n ; p++){
            A[k][p] = temp[p];
            B[p] = tempB[p];
        }
        factor = []
        factorB = []
    }
}
let resultX = []
// an * Xn = bn
// Xn = bn/an
// ai,i * Xi + ai,i+1 * Xi+1 + ... + ai,n * Xn = bi
// Xi = (bi-(ai,i+1 * Xi+1+...+ai,n * Xn))/ai,i
for(let i = n - 1 ; i >= 0 ; i--){
    resultX[i] = B[i];
    for(let j = i+1; j < n; j++){
        resultX[i] -= A[i][j] * resultX[j];
    }
    resultX[i] /= A[i][i];
}
    return resultX;
}
export default GuassElimination;
