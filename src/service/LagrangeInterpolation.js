let x = [0,20000,40000,60000,80000]
let y = [9.81,9.7487,9.6879,9.6879,9.5682]
let l = new Array(x.length).fill(0);
value = 42000;
sum1 = 1;
sum2 = 1;
result = 0;
// find L
for(let i = 0 ; i < x.length ; i++){ 
    sum1 = 1;
    sum2 = 1;
    for(let j = 0 ; j < x.length ; j++){
        if(i!=j){
            sum1 *= (x[j] - value);
            sum2 *= (x[j] - x[i]);
        }
    }
    l[i] = sum1 / sum2;
}
for(let i = 0 ; i < x.length ; i++){
    result += (l[i] * y[i]);
}
console.log(result);
