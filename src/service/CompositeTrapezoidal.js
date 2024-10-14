import { evaluate } from "mathjs";
const CompositeTrapeZoidal = (aInput , bInput , nInput , equation)=>{
    let a = aInput;
    let b = bInput;
    let n = nInput;
    let solution = {};
    let func = (x) => {
        return evaluate(equation , {x:x});
    }
    let h = (b - a) / n;
    let sum = 0;
    for (let i = a + h ; i < b ; i+= h){
        sum += func(i);
    }
    let I = (h / 2)*(func(a) + (2*sum) + func(b));
    solution = {functionA :func(a) , functionB :func(b) , sum:sum , h:h};
    return {I , solution}
}
export default CompositeTrapeZoidal;