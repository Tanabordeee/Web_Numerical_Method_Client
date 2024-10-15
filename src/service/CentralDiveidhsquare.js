import { evaluate, pow, abs, derivative } from "mathjs";

const CentralDiveidhsquare = (xInput, hInput, equation) => {
    let x = xInput;
    let h = hInput;


    let func = (x) => {
        return evaluate(equation, { x: x });
    }


    let diff1 = (x) => {
        return (-1 * func(x + h * 2) + 8 * func(x + h) - 8 * func(x - h) + func(x - h * 2)) / (12 * h);
    }

 
    let diff2 = (x) => {
        return (-1 * func(x + h * 2) + 16 * func(x + h) - 30 * func(x) + 16 * func(x - h) - func(x - h * 2)) / (12 * pow(h, 2));
    }


    let diff3 = (x) => {
        return (-1 * func(x + h * 3) + 8 * func(x + h * 2) - 13 * func(x + h) + 13 * func(x - h) - 8 * func(x - h * 2) + func(x - h * 3)) / (8 * pow(h, 3));
    }


    let diff4 = (x) => {
        return (-1 * func(x + h * 3) + 12 * func(x + h * 2) - 39 * func(x + h) + 56 * func(x) - 39 * func(x - h) + 12 * func(x - h * 2) - func(x - h * 3)) / (6 * pow(h, 4));
    }


    let symbolicDiff1 = derivative(equation, 'x').evaluate({ x: x });
    let symbolicDiff2 = derivative(derivative(equation, 'x'), 'x').evaluate({ x: x });
    let symbolicDiff3 = derivative(derivative(derivative(equation, 'x'), 'x'), 'x').evaluate({ x: x });
    let symbolicDiff4 = derivative(derivative(derivative(derivative(equation, 'x'), 'x'), 'x'), 'x').evaluate({ x: x });


    let error1 = abs((diff1(x) - symbolicDiff1) / diff1(x)) * 100 / 100;
    let error2 = abs((diff2(x) - symbolicDiff2) / diff2(x)) * 100 / 100;
    let error3 = abs((diff3(x) - symbolicDiff3) / diff3(x)) * 100 / 100;
    let error4 = abs((diff4(x) - symbolicDiff4) / diff4(x)) * 100 / 100;


    return {
        diff1: diff1(x),
        diff2: diff2(x),
        diff3: diff3(x),
        diff4: diff4(x),
        symbolicDiff1,
        symbolicDiff2,
        symbolicDiff3,
        symbolicDiff4,
        error1: error1.toFixed(6),
        error2: error2.toFixed(6),
        error3: error3.toFixed(6),
        error4: error4.toFixed(6)
    };
}

export default CentralDiveidhsquare;
