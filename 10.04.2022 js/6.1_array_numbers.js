const arr = [1,7,3,0,-5,7,3,9];
for (const item of arr) {
    process.stdout.write(item+",");
}

const arrayLength = arr =>{
    let count = 0;
    for (const item of arr) {
        count++;
    }
    console.log();
    return count;
}
const arraySum = arr =>{
    let sum = 0;
    for (const item of arr) {
        sum+=item;
    }
    return sum;
}
const arrayMulti = arr =>{
    let multi = 1;
    for (const item of arr) {
        multi*=item;
    }
    return multi;
}

console.log('length:', arrayLength(arr)); 
console.log('sum:', arraySum(arr)); 
console.log('multi:', arrayMulti(arr)); 