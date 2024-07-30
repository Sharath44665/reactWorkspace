function calculate(a, b){
    const add = a+b;
    const subtract = a-b;
    const mult = a*b;
    const devide = a/b;

    return [add, subtract, mult, devide];
}

const[addition, subtraction, muliplication, division] = calculate(4,2)
console.log(addition)
console.log(subtraction)
console.log(muliplication)
console.log(division)