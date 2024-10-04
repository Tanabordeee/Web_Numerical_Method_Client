import { derivative , abs , evaluate } from "mathjs";
const NewTonRaphson = (equation , guess) => {
    function normalizeEquation(equation) {
        return equation.replace(/[a-zA-Z]/g, 'x'); // /g เพื่อให้ match หมดไม่ใช่แค่ตัวแรก 
    }
    const diff = derivative(normalizeEquation(equation) , 'x');

    function calculate(x){
        let result = evaluate(normalizeEquation(equation) , {x : x});
        return result;
    }

function calculate_diff(x){
    return diff.evaluate({x : x});
}

let x = parseFloat(guess);
let x_new = 0;
let x_old = 0;
let i = 0;
let error = 1;
let solution = [];
while (error > 0.000001){
    x_old = x;
    let funcX = calculate(x);
    let funcX_diff = calculate_diff(x);
    x = x - (funcX / funcX_diff);
    x_new = x;
    error = abs(x_new - x_old);
    i++;
    solution.push({resultX:x_new , funcXright : funcX_diff , check:error});
}
 return {x_new , solution};
}
export default NewTonRaphson;