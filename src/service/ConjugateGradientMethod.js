import { subtract, multiply, divide, add, transpose, sqrt, dot, inv } from "mathjs";

const ConjugateGradientMethod = (MatrixA, MatrixB, MatrixX) => {
    let A = MatrixA;
    let B = MatrixB;
    let X = MatrixX;
    let R = subtract(multiply(A, X), B);
    let D = multiply(-1, R);
    let error = 1;
    let iteration = 0;
    let result = [];

    while (error > 0.000001 && iteration < 1000) {
        let AD = multiply(A, D);
        let D_transpose = transpose(D);
        let R_transpose = transpose(R);

        let lambda = divide(dot(R_transpose, R), dot(D_transpose, AD));
        let new_x = add(X, multiply(lambda, D));
        let new_r = subtract(multiply(A, new_x), B);
        let alpha = divide(dot(new_r, AD), dot(D_transpose, AD));
        let new_d = add(multiply(-1, new_r), multiply(alpha, D));

        error = sqrt(dot(R_transpose, R));
        X = new_x;
        R = new_r;
        D = new_d;

        result.push({
            iteration: iteration + 1,
            X: new_x,
            R: R,
            alpha,
            D: D,
            lambda
        });
        iteration++;
    }

    return result;
}

export default ConjugateGradientMethod;