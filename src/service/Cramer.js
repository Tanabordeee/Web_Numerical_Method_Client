const math = require('mathjs');
exports.Cramer = async (res ,req) =>{
    const { matrixA , matrixB } = req.body;
    const A = matrixA;
    const B =  matrixB;
    let result = [];
    let temp = []
    for (let i = 0; i < 3; i++) {
        temp = A.map(row => [...row]); // ลอกลง temp
        temp[i][0] = B[0][0];
        temp[i][1] = B[0][1];
        temp[i][2] = B[0][2];
        let x = math.det(temp) / math.det(A);
        result.push(x);
    }
    
    res.json({"result":result})
    
}
