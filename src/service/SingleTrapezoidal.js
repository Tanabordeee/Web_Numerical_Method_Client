import { evaluate } from "mathjs";
const SingleTrapezoidal = (aInput , bInput , equation)=>{
    let a = aInput;
    let b = bInput;
    let solution = {};
    let func = (x) => {
        return evaluate(equation , {x:x});
    }
    let I = ((b - a) / 2) * (func(a) + func(b));
    solution = {functionA:func(a) , functionB:func(b)}
    return {I , solution};
}
export default SingleTrapezoidal;