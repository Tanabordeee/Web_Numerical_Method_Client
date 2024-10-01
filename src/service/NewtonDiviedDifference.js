sum = 0;
value = 46267;

// polynomial
// x = [0,20000,40000,60000,80000];
// y = [9.81,9.7487,9.6879,9.6879,9.5682];

// Quadratic
x = [0 , 40000 , 80000];
y = [9.81 , 9.6879 , 9.5682]

// linear
// x = [0 , 80000]
// y = [9.81 , 9.5682]
function calculate(x , y , left , right , memory={}){
    if(left === right){
        return y[left];
    }
    let key = `${left},${right}`;
    if (key in memory) {
        return memory[key];
    }
    memory[key] = (calculate(x , y , left , right + 1) - calculate(x, y, left - 1, right))/(x[left] - x[right]);
    return memory[key];
}
let memory = {};
let result = y[0]; // c0 = f(X0);
for(let i = 1; i < x.length ; i++){
    let term = calculate(x , y , i , 0 , memory);
    for(let j = 0 ; j < i ; j++){
        term *= value - x[j];
    }
    result+= term;
}
console.log(result);

// c0 + c1(x - x0) + c2(x - x0)(x - x1)
// c1 = f(x)