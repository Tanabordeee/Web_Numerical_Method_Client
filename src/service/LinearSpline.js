const LinearSpline = (xinput, yinput, val) => {
    let x = [...xinput];
    let y = [...yinput];
    let value = val;
    let m = [];
    let solutions = [];

    for (let i = 0; i < x.length - 1; i++) {
        m.push((y[i + 1] - y[i]) / (x[i + 1] - x[i]));
    }

    for (let i = 0; i < x.length - 1; i++) {
        if (value >= x[i] && value <= x[i + 1]) {
            let result = y[i] + (m[i]) * (value - x[i]);
            solutions.push({
                x1: x[i],       // ค่า x1
                x2: x[i + 1],   // ค่า x2
                y1: y[i],       // ค่า y1
                y2: y[i + 1],   // ค่า y2
                m: m[i],        // ค่า m (slope)
                result: result  // ผลลัพธ์ที่คำนวณได้
            });
            return { result, solutions }; // Return here after finding the result
        }
    }

    return { result: null, solutions: [] }; // Return default if no solution found
};

export default LinearSpline;
