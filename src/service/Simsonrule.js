import { evaluate } from "mathjs";
const SimpSonRulemethod = (aInput , bInput , equation)=>{
    let a = aInput;
    let b = bInput;
    let h = (b-a)/2;
    let solution = {};
    let func = (x)=>{
        return evaluate(equation , {x:x});
    }
    let I = (h/3) * (func(a) + 4*func(a+h) +func(b));
    solution = {functionA : func(a) , functionAH : func(a+h) , functionB : func(b) ,h:h}
    return {I , solution}
}
export default SimpSonRulemethod;