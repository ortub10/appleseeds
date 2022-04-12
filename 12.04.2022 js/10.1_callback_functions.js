//1
const printString = str =>{
    console.log(str);
}
const isString = (string,callback) =>{
     if(typeof string === 'string'){       
        callback(string);
    }
}
isString('Hello',printString);
isString(55,printString);

//2
const dashes = string =>{
   console.log(string.replaceAll(" ","-"));
}
const firstWordUpperCase = (string,callback)=>{
    const arrStr = string.split(" ");
    arrStr[0] = arrStr[0].toUpperCase();
    string = arrStr.join(" ");
    callback(string);
    // console.log(string);
}
//3
firstWordUpperCase("the day of america",dashes);

//4
const multi2 = item =>{
    return item*2;
}
const divide2 = item =>{
    return item/2;
}
const myFunc = (arr,callback) =>{
    const returnArr =[];
    for(let i = 0; i<arr.length; i+=1){
        returnArr[i] = callback(arr[i]);
    }
    return returnArr;
}
const arr = [2,8,3,4];
console.log(myFunc(arr,multi2));
console.log(myFunc(arr,divide2));
