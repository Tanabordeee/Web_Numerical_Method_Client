import regression from 'regression';

const PolynomialRegression = (matrixX , matrixY , val , mOrder) => {
    let x = [...matrixX];
    let y = [...matrixY];
    let Xvalue = val;

    let data = x.map((xi, index) => [xi, y[index]]);

    const result = regression.polynomial(data, { order: mOrder });

    const predictedPoints = matrixX.map(xi => [xi, result.predict(xi)[1]]);

    let prediction = result.predict(Xvalue);

    return {
        predictedValue: prediction[1],      
        regressionEquation: result.string,  
        predictedPoints: predictedPoints,
        data: data
    };
}

export default PolynomialRegression;