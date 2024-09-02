import {abs , evaluate} from 'mathjs';
const FalsePosition_Method = ({equation , Xl , Xr}) => {
    function normalizeEquation(equation) {
        return equation.replace(/[a-zA-Z]/g, 'x'); // /g เพื่อให้ match หมดไม่ใช่แค่ตัวแรก 
    }
    function calculate(x) {
        let result = evaluate(normalizeEquation(equation), { x: x });
        return result;
    }
    let XLeft = parseFloat(Xl)
    let XRight = parseFloat(Xr)
    let X1 = 0;
    let funcX1 , funcXright , funcXleft
    let check;
    while(1){
        funcX1 = calculate(X1)
        funcXright = calculate(XRight)
        funcXleft = calculate(XLeft)
        X1 = ((XLeft * funcXright) - (XRight * funcXleft)) / (funcXright - funcXleft)
        funcX1 = calculate(X1)
        if(funcX1 === 0) {
            break;
        }
        if(funcX1 * funcXright > 0){
            XRight = X1;
            check = abs((XRight - XLeft))
        }else{
            XLeft = X1;
            check = abs((XLeft - XRight))
        }
        if (check < 0.000001) {
            break;
        }
    }
    return X1;
}

export default FalsePosition_Method;
