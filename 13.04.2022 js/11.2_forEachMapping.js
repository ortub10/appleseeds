const number = [3,8,4,9,7,12];
//1
const doubleValues = arr =>(arr.map(value => value*2));
console.log(doubleValues(number));

//2
const onlyEvenValues = arr =>{
    const evenArr = [];
    arr.forEach(element => {
        if(element % 2===0){
            evenArr.push(element);
        }
    });
    return evenArr;
}
console.log(onlyEvenValues(number));

//3
const showFirstAndLast = arr =>{
    const firstLast = [];
    arr.forEach((element, index) => {
        if(index === 0 || index === arr.length-1){
            firstLast.push(element+"");
        }
    });
    return firstLast;
}
console.log(showFirstAndLast(number));

//4
const vowelCount = string =>{
    const vowel = 'aeiou';
    const vowelObj = {};
    string.toLowerCase().split("").forEach(char =>{
        if(vowel.includes(char)){
            if(vowelObj[char] === undefined){
                vowelObj[char] = 0;
            }
            vowelObj[char]+=1;
        }
    });
    return vowelObj;
}
console.log(vowelCount('HEllo World'));

//5
const capitalize = string =>{
    const chars =  string.split("")
    const charsUpper =  chars.map(char=>(char.toUpperCase()))
    return charsUpper.join("");
}
console.log(capitalize('hello'));

//6
const shiftLetters = string =>{
    if(!(/^[a-zA-Z -]+$/.test(string)))
    return 'Valid input';
    const chars =  string.split("")
    const charsShift =  chars.map(char=>{
        let minusOneLetter = String.fromCharCode((char.charCodeAt(0))-1);
        if(char ==='a') minusOneLetter ='z';
        if(char ==='A') minusOneLetter ='Z';
        if(char ===' ') minusOneLetter =' ';
        if(char ==='-') minusOneLetter ='-';
        return minusOneLetter;
    })
    return charsShift.join(""); 
}
console.log(shiftLetters('Hello to all of-you'));

//7
const swapCase = string =>{
    const words =  string.split(" ");
    const charsSwap = words.map(word =>capitalize(word));
    return charsSwap.join(" "); 
}
console.log(swapCase('the big bang'));

