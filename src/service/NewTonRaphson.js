import { derivative , abs , evaluate } from "mathjs";
const NewTonRaphson = ({equation , guess}) => {

    const diff = derivative(equation , 'x');

    function calculate(x){
        let result = evaluate(equation , {x : x});
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
while (error > 0.000001){
    x_old = x;
    let funcX = calculate(x);
    let funcX_diff = calculate_diff(x);
    x = x - (funcX / funcX_diff);
    x_new = x;
    error = abs(x_new - x_old);
    i++;
}
 return x_new;
}
export default NewTonRaphson;