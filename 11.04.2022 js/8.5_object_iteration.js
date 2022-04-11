const swap = object =>{
    const swapObj ={};
    for (const item in object) {
        swapObj[object[item]] = item;
    }
    return swapObj;
}

const obj1 = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
    key4:'value4',
    key5:'value5',
    key6:'value6',
}
const obj2 = swap(obj1);
console.log(obj1);
console.log(obj2);