import {abs} from "mathjs";
const GaussSeidel = (MatrixA , MatrixB , MatrixX) =>{
    let A = MatrixA
    let B = MatrixB
    let x = [...MatrixX]; 
    let temp_x = [...MatrixX];
    let count = 0;
    let e = 0.0000001
    let check = true;
    let solution = [];
    let result = [];
    while(check){
        for(let j = 0 ; j < x.length ; j++) {
            let sum = 0;
            for(let k = 0 ; k < x.length ; k++) {
                if( j != k){
                    sum += A[j][k] * x[k];
                }       
            }
            x[j] = (B[j] - sum) / A[j][j];
            solution.push({
                findX: [{ B: B[j], Amain: A[j][j] , sum:sum}]
              });
            }
        for(let i = 0 ; i < x.length ; i++){
            if(abs((x[i] - temp_x[i])/x[i])*100 < e){
                check = false;
            }
            temp_x[i] = x[i];
        }
        if(check){
            count++;
            x.map((val , index) => {
                result.push({
                    iteration:count,
                    index:index,
                    val:val
                })
            });
        }
    }
    return {result , solution};
}
export default GaussSeidel;