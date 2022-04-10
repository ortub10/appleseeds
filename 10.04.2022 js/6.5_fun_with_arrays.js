let arrayOne = new Array(100).fill(1);
console.log(arrayOne);
console.log('------------------------------------------');
let arrayFrom = Array.from(arrayOne,(item,index)=>item*index+1)
console.log(arrayFrom);
console.log('------------------------------------------');
let obj = {
    var1: 'value1',
    var2: 'value2',
    var3: 'value3',
    var4: 'value4',
    var5: 'value5'
}
let arrayFromObj = Object.values(obj);
console.log(arrayFromObj);
console.log('------------------------------------------');
let array2 = ['a','b','c'];
let objFromArray = {...array2}
console.log(objFromArray);
console.log('------------------------------------------');
console.log(array2 instanceof Array);
console.log(objFromArray instanceof Array);
let array3 = array2.slice(0);
console.log('array2 before change:',array2);
console.log('array3 before change:',array3);
array3[0] = 'q';
console.log('array2 after change:',array2);
console.log('array3 after change:',array3);
console.log('------------------------------------------');
let array4 = array3
console.log('array3 before change:',array3);
console.log('array4 before change:',array4);
array3[0] = 'o';
console.log('array3 after change:',array3);
console.log('array4 after change:',array4);