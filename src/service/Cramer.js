import { det } from "mathjs";
const Cramer = ({MatrixA , MatrixB}) =>{
    const A = MatrixA;
    const B =  MatrixB;
    let result = [];
    let temp = []
    for (let i = 0; i < 3; i++) {
        temp = A.map(row => [...row]); 
        temp[i][0] = B[0][0];
        temp[i][1] = B[0][1];
        temp[i][2] = B[0][2];
        let x = det(temp) / det(A);
        result.push(x);
    }
    return result;
}
export default Cramer;