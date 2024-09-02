import { det } from "mathjs";

const Cramer = (MatrixA, MatrixB) => {
    const A = MatrixA;
    const B = MatrixB;
    const size = A.length;
    let result = [];

    for (let i = 0; i < size; i++) {
        
        let temp = A.map(row => [...row]);
        for (let j = 0; j < size; j++) {
            temp[j][i] = B[j];
        }
        
        const detA = det(A);
        const detTemp = det(temp);
        result.push(detTemp / detA);
    }

    return result;
};

export default Cramer;