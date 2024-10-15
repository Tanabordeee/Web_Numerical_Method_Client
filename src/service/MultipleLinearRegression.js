import {lusolve} from 'mathjs';

const MultipleRegression = (xData, yData, Xvalue) => {
    const n = xData[0].length; 
    const k = xData.length; 

    const matrix1 = Array(k + 1).fill(0).map(() => Array(k + 1).fill(0));
    const matrix2 = Array(k + 1).fill(0);
    
    matrix1[0][0] = n; 

    for (let i = 1; i <= k; i++) {
        let sum = 0;
        for (let L = 0; L < n; L++) {
            sum += xData[i - 1][L];
        }
        matrix1[0][i] = sum;
        matrix1[i][0] = sum; 
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= i; j++) {
            let sum = 0;
            for (let L = 0; L < n; L++) {
                sum += xData[i - 1][L] * xData[j - 1][L]; 
            }
            matrix1[i][j] = sum;
            matrix1[j][i] = sum;
        }
    }

    matrix2[0] = yData.reduce((acc, val) => acc + val, 0); 
    for (let i = 1; i <= k; i++) {
        let sum = 0;
        for (let L = 0; L < n; L++) {
            sum += yData[L] * xData[i - 1][L];  
        }
        matrix2[i] = sum;
    }

    const coefficients = lusolve(matrix1, matrix2);
    

    let predictedValue = coefficients[0][0]; 
    for (let i = 1; i <= k; i++) {
        predictedValue += coefficients[i][0] * Xvalue[i - 1];
    }


    const predictedPoints = xData[0].map((_, index) => {
        const xi = xData.map(col => col[index]); 
        let predictedY = coefficients[0][0]; 
        for (let i = 1; i <= k; i++) {
            predictedY += coefficients[i][0] * xi[i - 1]; 
        }
        return [xi, predictedY];
    });


    let regressionEquation = `Y = ${coefficients[0][0].toFixed(2)}`;
    for (let i = 1; i <= k; i++) {
        regressionEquation += ` + ${coefficients[i][0].toFixed(2)} * X${i}`;
    }

    return {
        predictedValue: predictedValue,
        regressionEquation: regressionEquation, 
        predictedPoints: predictedPoints, 
        data: xData.map((xi, index) => [xi, yData[index]])
    };
};

export default MultipleRegression;

