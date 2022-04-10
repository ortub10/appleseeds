const lengthStr = arr =>{
const arrNum = [];
for (const item of arr) {
    arrNum.push(item.length); 
}
return arrNum;
}

const strings = ["boo", "doooo", "hoo","ro"];
console.log(lengthStr(strings));