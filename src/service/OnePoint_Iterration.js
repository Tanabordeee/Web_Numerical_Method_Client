import { evaluate } from "mathjs";
const OnePoint_Iterration = (equation , guess) =>{
    function normalizeEquation(equation) {
        return equation.replace(/[a-zA-Z]/g, 'x'); // /g เพื่อให้ match หมดไม่ใช่แค่ตัวแรก 
    }
    function calculate(x){
        let result = evaluate(normalizeEquation(equation) , {x : x});
        return result;
    }
    
    let x = parseInt(guess);
    let old_x = 0;
    let new_x = 0;
    if(x == 0){
        x = 1;
    }
    while(true){
        old_x = x;
        x = calculate(x);
        new_x = x;
        let check = Math.abs(new_x - old_x);
        if (check < 0.000001){
            return new_x;
        }
        if(new_x == Infinity || new_x == -Infinity){
            return "Infinity";
        }
    }
}
export default OnePoint_Iterration;