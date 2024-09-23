const GuassJordan = (MatrixA , MatrixB) =>{
    const A = MatrixA.map(row => [...row]); 
    const B = [...MatrixB];
    let n = A.length;
    let resultJson = {"calculationA":[], "calculationB":[] , "result": []};
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                let c = A[j][i] / A[i][i];
                for (let k = 0; k < n; k++) {
                    A[j][k] = A[j][k] - c * A[i][k]; 
                }
                B[j] = B[j] - c * B[i];
                resultJson.calculationA.push(A.map(row => [...row]));
                resultJson.calculationB.push([...B]);
            }
        }
    }
    for(let i = 0 ; i < n; i++){
        B[i] /= A[i][i];
        A[i][i] /=A[i][i];
    }
    resultJson.result = B;
    return resultJson;
}

export default GuassJordan;