import { evaluate, pow, abs, derivative } from "mathjs";

const BackwardDiveidhsquare = (xInput, hInput, equation) => {
    let x = xInput;
    let h = hInput;


    let func = (x) => {
        return evaluate(equation, { x: x });
    }

    let diff1 = (x) => {
        return (3 * func(x) - 4 * func(x - h) + func(x - h * 2)) / (2 * h);
    }


    let diff2 = (x) => {
        return (2 * func(x) - 5 * func(x - h) + 4 * func(x - h * 2) - func(x - h * 3)) / pow(h, 2);
    }


    let diff3 = (x) => {
        return (5 * func(x) - 18 * func(x - h) + 24 * func(x - h * 2) - 14 * func(x - h * 3) - func(x - h * 4)) / (2 * pow(h, 3));
    }


    let diff4 = (x) => {
        return (3 * func(x) - 14 * func(x - h) + 26 * func(x - h * 2) - 24 * func(x - h * 3) + 11 * func(x - h * 4) - 2 * func(x - h * 5)) / pow(h, 4);
    }


    let symbolicDiff1 = derivative(equation, 'x');
    let symbolicDiff2 = derivative(symbolicDiff1, 'x');
    let symbolicDiff3 = derivative(symbolicDiff2, 'x');
    let symbolicDiff4 = derivative(symbolicDiff3, 'x');


    let evaluatedDiff1 = symbolicDiff1.evaluate({ x: x });
    let evaluatedDiff2 = symbolicDiff2.evaluate({ x: x });
    let evaluatedDiff3 = symbolicDiff3.evaluate({ x: x });
    let evaluatedDiff4 = symbolicDiff4.evaluate({ x: x });


    let error1 = abs((diff1(x) - evaluatedDiff1) / diff1(x)) * 100 / 100;
    let error2 = abs((diff2(x) - evaluatedDiff2) / diff2(x)) * 100 / 100;
    let error3 = abs((diff3(x) - evaluatedDiff3) / diff3(x)) * 100 / 100;
    let error4 = abs((diff4(x) - evaluatedDiff4) / diff4(x)) * 100 / 100;


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
        error4: error4.toFixed(6),
    };
}

export default BackwardDiveidhsquare;
