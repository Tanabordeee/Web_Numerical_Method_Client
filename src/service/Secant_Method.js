import { abs , evaluate } from "mathjs";
const Secant_Method = ({equation , guess , guess2}) =>{
    function normalizeEquation(equation) {
        return equation.replace(/[a-zA-Z]/g, 'x'); // /g เพื่อให้ match หมดไม่ใช่แค่ตัวแรก 
    }
    function calculate(x){
        let result = evaluate(normalizeEquation(equation) , {x : x});
        return result;
    }
    
    let x0 = parseFloat(guess); 
    let x1 = parseFloat(guess2); 
    let error = 1;
    let i = 0 , new_x = 0 , f_x0 = 0 , f_x1 = 0;
    while (error > 0.000001) {
        f_x0 = calculate(x0);
        f_x1 = calculate(x1);
        new_x = x1 - (f_x1 * (x0 - x1) )/ (f_x0 - f_x1); 
        error = abs(new_x - x1);
        x0 = x1;
        x1 = new_x;
        i++;
    }
    
    return new_x;
}
export default Secant_Method;