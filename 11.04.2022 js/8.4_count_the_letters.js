const array = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgers"];
const coutLetters = arr => {
    const letters = {}
    let sentence = arr.join('').toLowerCase().replace(/\s+/g, '')
    for(item of sentence){
        if((!(item in letters))){
            letters[item] = 0;
        }
        letters[item]++; 
    }
    return letters
}
console.log(coutLetters(array));

//Extra - letter with the most occurrences as well
const mostOccurrences = arr =>{
    const numberOfletter = coutLetters(arr);
    let max = {
        letter: '',
        length: 0
    }
    for(letter in numberOfletter){
        if(numberOfletter[letter]>max.length){
            max.letter = letter;
            max.length = numberOfletter[letter];
        }
    }
    return max;
} 

console.log('most occurrences:',mostOccurrences(array));