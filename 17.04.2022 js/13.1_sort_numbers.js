const numbers = [1, -5, 666, 2, 400, 11];

//1
const numbersFromSmallToBig = numbers.slice().sort((a,b) => a-b);
console.log(numbersFromSmallToBig);

//2
const numbersFromBigToSmall = numbers.slice().sort((a,b) => b-a);
console.log(numbersFromBigToSmall);

