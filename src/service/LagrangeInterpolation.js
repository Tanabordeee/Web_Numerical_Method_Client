const LagrangeInterpolation = (x, y, val) => {
    let xCopy = [...x]; 
    let yCopy = [...y]; 
    let l = new Array(xCopy.length).fill(0);
    let value = val;
    let result = 0;
    let solution = { "L": [], "results": [], "Y": [] };

    // Find L
    for (let i = 0; i < xCopy.length; i++) {
        let sum1 = 1;
        let sum2 = 1;
        for (let j = 0; j < xCopy.length; j++) {
            if (i !== j) {
                sum1 *= (xCopy[j] - value);
                sum2 *= (xCopy[j] - xCopy[i]);
            }
        }
        l[i] = sum1 / sum2;
    }

    // Calculate result
    for (let i = 0; i < xCopy.length; i++) {
        result += (l[i] * yCopy[i]);
        solution.results.push(result);
    }

    solution.L = l;
    solution.Y = yCopy;
    return { result, solution };
};

export default LagrangeInterpolation;
