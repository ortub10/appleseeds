//a
const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

//a.1
const foodsFromSmallToBig = foods.slice().sort();
console.log(foodsFromSmallToBig);

//a.2
const foodsFromBigToSmall = foods.slice().sort((a, b) => (a > b ? -1 : 1));
console.log(foodsFromBigToSmall);

//b
const foodsWithUpperCase = ["falafel","Sabich","hummus", "pizza with extra pineapple"];

//b.1
const foodsWithUpperCaseFromSmallToBig = foodsWithUpperCase.slice()
.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
console.log(foodsWithUpperCaseFromSmallToBig);

//b.2
const foodsWithUpperCaseFromBigToSmall = foodsWithUpperCase.slice()
.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1));
console.log(foodsWithUpperCaseFromBigToSmall);

//c
const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];

//c.1
const wordsFromLongToShort = words.slice().sort((a,b) =>(b.length - a.length));
console.log(wordsFromLongToShort);



