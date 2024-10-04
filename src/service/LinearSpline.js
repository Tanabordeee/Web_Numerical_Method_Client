let x = [2,4,6,8,10]
let y = [9.5,8.0,10.5,39.5,72.5]
let value = 4.5;
let count = 0;
let index1 = 0;
let index2 = 0;
let m =[]
for(let i = 0 ; i < x.length - 1; i++){
    m.push((y[i + 1]-y[i]) / (x[i + 1] - x[i]))
}
for(let i = 0 ; i < x.length; i++){
    if(value >= x[i] && value <= x[i + 1]){
        let result = y[i] + (m[i]) * (value - x[i]);
        console.log(result);
        break;
    }
}