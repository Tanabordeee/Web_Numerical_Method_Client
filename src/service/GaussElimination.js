const GuassElimination = (MatrixA , MatrixB) =>{
    const A = MatrixA.map(row => [...row]); 
    const B = [...MatrixB];
    let n = A.length;
    let resultJson = {"calculationA":[], "calculationB":[] , "result": []};
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            if( i != j){
                let c = A[j][i] / A[i][i];
                for(let k = i ; k < n ; k++){
                    A[j][k] = A[j][k] - c * A[i][k];
                }
                B[j] = B[j] - c * B[i];
                resultJson.calculationA.push(A.map(row => [...row]));
                resultJson.calculationB.push([...B]);
            }
        }
    }
    let resultX = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        resultX[i] = B[i];
        for (let j = i + 1; j < n; j++) {
            resultX[i] -= A[i][j] * resultX[j];
        }
        resultX[i] /= A[i][i];
    }
    resultJson.result = resultX;
    return resultJson;
}
export default GuassElimination;

