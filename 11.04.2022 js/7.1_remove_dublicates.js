const arr = [3,4,4,3,6,3];
const removeDuplicates = arr =>{
    let count = 0;
    let oneItem = [];
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i])===i){
            oneItem[count] = arr[i];
            count++;
        }
    }
    return oneItem;
}

console.log(removeDuplicates(arr)); 