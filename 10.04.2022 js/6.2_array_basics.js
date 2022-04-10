const people = ["Greg", "Mary", "Devon", "James"];
const printArr = arr=>{
    for (const item of arr) {
        console.log(item)
    }
}
printArr(people);
console.log('-----------------------------------');
people.shift();
// printArr(people);
console.log(people);
console.log('-----------------------------------');
people.pop();
// printArr(people);
console.log(people);
console.log('-----------------------------------');
people.unshift('Matt');
// printArr(people);
console.log(people);
console.log('-----------------------------------');
people.push('Or');
console.log(people);
//printArr(people);
console.log('-----------------------------------');

for (const item of people) {
    console.log(item);
    if(item ==='Mary') {break;}
}

console.log('-----------------------------------');
let copyArr = people.slice(2);
console.log('copy:',copyArr);
//printArr(copyArr);
console.log('-----------------------------------');
console.log('the indexOf Mary:',people.indexOf('Mary'))
console.log('-----------------------------------');
console.log('the indexOf Foo:',people.indexOf('Foo'))
people[0] = "Greg";
people[3] = "James";
people.splice(2,1,'Elizabeth','Artie');
//printArr(people);
console.log(people);
const withBob = people.concat('Bob');
console.log(withBob);