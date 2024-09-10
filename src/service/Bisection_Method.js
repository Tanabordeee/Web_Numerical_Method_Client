import { evaluate , abs } from "mathjs";
const Bisection_Method = (equation , Xl ,Xr) => {
    function normalizeEquation(equation) {
        return equation.replace(/[a-zA-Z]/g, 'x'); // /g เพื่อให้ match หมดไม่ใช่แค่ตัวแรก 
    }
    function calculate(x) {
        let result = evaluate(normalizeEquation(equation), { x: x });
        return result;
    }

    let XLeft = parseFloat(Xl);
    let XRight = parseFloat(Xr);
    let Xm, funcXm, funcXright;
    let check;

    while (true) {
        Xm = (XLeft + XRight) / 2;
        funcXm = calculate(Xm);

        if (funcXm === 0) {
            break;
        }

        funcXright = calculate(XRight);

        if (funcXm * funcXright > 0) {
            XRight = Xm;
            check = abs((XRight - XLeft));
        } else {
            XLeft = Xm;
            check = abs((XLeft - XRight));
        }

        if (check < 0.000001) {
            break;
        }
    }

    return Xm;
}
export default Bisection_Method;