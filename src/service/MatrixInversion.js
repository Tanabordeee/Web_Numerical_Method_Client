const MatrixInversion = (MatrixA, MatrixB) => {
    const A = MatrixA.map(row => [...row]); 
    const B = [...MatrixB];
    let resultJson = { "calculationA": [], "calculationB": [], "calculationI": [], "result": [] };
    
    
    let I = A.map((_, index_row) => 
        A.map((_, index_col) => 
            index_row === index_col ? 1 : 0
        )
    );
    
    let n = A.length;
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let c = A[j][i] / A[i][i];
                for (let k = 0; k < n; k++) {
                    A[j][k] -= c * A[i][k];
                    I[j][k] -= c * I[i][k];
                }
                
                resultJson.calculationA.push(A.map(row => [...row]));
                resultJson.calculationI.push(I.map(row => [...row]));
            }
        }
    }
    

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            I[i][j] /= A[i][i];
        }
        A[i][i] /= A[i][i];
        
        resultJson.calculationI.push(I.map(row => [...row]));
        resultJson.calculationA.push(A.map(row => [...row]));
    }
    
    
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = 0;
        for (let j = 0; j < n; j++) {
            result[i] += I[i][j] * B[j];
        }
    }
    resultJson.result = result;

    return resultJson;
};

export default MatrixInversion;
