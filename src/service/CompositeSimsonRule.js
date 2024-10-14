import { evaluate } from "mathjs";
const CompositeSimpsonRule = (aInput,bInput,nInput, equation)=>{

    let n = nInput;
    let b = bInput;
    let a = aInput;
    let h = (b-a)/n;
    let solution = {};
    let func = (x)=>{
        return evaluate(equation , {x:x});
    }
    let sumood= 0;
    let sumeven = 0;
    let count = 1;
    for(let i = a+h; i < b ; i+=h){
        if(count %2 == 0){
            sumeven += func(i);  
        }else{
            sumood += func(i);  
        }
        count++;
    }
    let I = (h/3)*(func(a)+(4*sumood)+(2*sumeven)+func(b));
    solution = {h:h , functionA:func(a) , sumood:sumood , sumeven:sumeven , functionB:func(b)}
    return {I , solution};
}
export default CompositeSimpsonRule;