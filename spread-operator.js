// Max Value
const max = Math.max(12, 45, 64, 54);
console.log(max);

// Array Spread Operator
const array = [2.456, 5, 6565, 3, 3];
const arrayMax = Math.max(...array);
console.log(arrayMax);

// Referential Integrate
const numbers = array;
// 2d array
const numbers2 = [array];
// SpreadOut Array
const numbersSpread = [...array];
// SpreadOut Array add Value
const numbersSpreadAdd = [11, 33, ...array, 56, 45];

array.push(55);
numbers2.push(555);
console.log(array);
console.log(numbers);
console.log(numbers2);
console.log(numbersSpread);
console.log(numbersSpreadAdd);
