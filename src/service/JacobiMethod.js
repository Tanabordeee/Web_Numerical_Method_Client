const math = require('mathjs');
let A = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
let B = [12,17,14,7]
let x = [0,0,0,0]
let temp_x = [0,0,0,0]
let count = 0;
let e = 0.000001
let check = true;
while(check){
    for(let j = 0 ; j < x.length ; j++) {
        let sum = 0;
        for(let k = 0 ; k < x.length ; k++) {
            if( j != k){
                sum += A[j][k] * temp_x[k];
            }       
        }
        x[j] = (B[j] - sum) / A[j][j];
    }
    for(let i = 0 ; i < x.length ; i++){
        if(math.abs((x[i] - temp_x[i])/x[i])*100 < e){
            check = false;
        }
        temp_x[i] = x[i];
    }
    if(check){
        count++;
        x.map((val , index) => console.log("iteration "+ count + " X index : "+index + " = " + val));
    }
}