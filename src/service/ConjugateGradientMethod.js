import {subtract, multiply, divide, add, transpose, sqrt } from "mathjs";
const ConjugateGradientMethod = (MatrixA , MatrixB , MatrixX) =>{
    let A = MatrixA;
    let B = MatrixB;
    let X = MatrixX;
    let R = subtract(multiply(A ,X) , B);
    let D = multiply(-1 , R);
    let lambda = divide(multiply(multiply(-1 , transpose(D)) , R) , multiply(multiply(transpose(D) , A) , D))
    let error = 1;
    let iteration = 0;
    let result = [];
    while(error > 0.000001){
        let new_x = add(X, multiply(lambda, D));
        R = subtract(multiply(A, new_x), B);
        let alpha = divide(multiply(multiply(transpose(R), A), D), multiply(multiply(transpose(D), A), D));
        D = add(multiply(-1, R), multiply(alpha, D));
        lambda = divide(multiply(multiply(-1, D), R), multiply(multiply(transpose(D), A), D));
        result.push({
            iteration: iteration + 1,
            X: new_x,
            R: R,
            alpha,
            D: D,
            lambda
        });
        X = new_x
        error = sqrt(multiply(transpose(R), R));
        iteration++;
    }
    console.log(result);
    return result;
}
export default ConjugateGradientMethod;