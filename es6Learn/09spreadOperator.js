const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];

const numberCombined = [...numberOne, ...numberTwo];
console.log(numberCombined);// [ 1, 2, 3, 4, 5, 6 ]

const numbers = [ 1, 2, 3, 4, 5, 6 ];

const [one , two, ...rest] = numbers;
console.log(one); // 1
console.log(two); // 2
console.log(rest); // [ 3, 4, 5, 6 ]

