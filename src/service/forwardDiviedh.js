import { derivative, evaluate, pow, abs } from "mathjs";

const fowardDivided = (xInput, hInput, equation) => {
    let x = xInput;
    let h = hInput;

    let func = (x) => { 
        return evaluate(equation, { x: x });
    }


    const diff1 = (x) => {
        return (func(x + h) - func(x)) / h;
    }


    const diff2 = (x) => {
        return (func(x + h * 2) - 2 * func(x + h) + func(x)) / pow(h, 2);
    }


    const diff3 = (x) => {
        return (func(x + h * 3) - 3 * func(x + h * 2) + 3 * func(x + h) - func(x)) / pow(h, 3);
    }

    const diff4 = (x) => {
        return (func(x + h * 4) - 4 * func(x + h * 3) + 6 * func(x + h * 2) - 4 * func(x + h) + func(x)) / pow(h, 4);
    }


    const symbolicDiff1 = derivative(equation, 'x').evaluate({ x: x });
    const symbolicDiff2 = derivative(derivative(equation, 'x'), 'x').evaluate({ x: x });
    const symbolicDiff3 = derivative(derivative(derivative(equation, 'x'), 'x'), 'x').evaluate({ x: x });
    const symbolicDiff4 = derivative(derivative(derivative(derivative(equation, 'x'), 'x'), 'x'), 'x').evaluate({ x: x });


    const error1 = abs((diff1(x) - symbolicDiff1) / diff1(x)) * 100;
    const error2 = abs((diff2(x) - symbolicDiff2) / diff2(x)) * 100;
    const error3 = abs((diff3(x) - symbolicDiff3) / diff3(x)) * 100;
    const error4 = abs((diff4(x) - symbolicDiff4) / diff4(x)) * 100;

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

export { fowardDivided };
