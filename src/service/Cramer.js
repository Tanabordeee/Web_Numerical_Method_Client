import { det } from "mathjs";

const Cramer = (MatrixA, MatrixB) => {
    const A = MatrixA.map(row => [...row]); 
    const B = [...MatrixB];
    const size = A.length;
    let resultJson = {"calculationA":[],"calculationB":[],"result": []};
    let result = [];

    for (let i = 0; i < size; i++) {
        
        let temp = A.map(row => [...row]);
        for (let j = 0; j < size; j++) {
            temp[j][i] = B[j];
        }
        resultJson.calculationA.push(temp);
        const detA = det(A);
        const detTemp = det(temp);
        result.push(detTemp / detA);
    }
    resultJson.result = result
    return resultJson;
};

export default Cramer;