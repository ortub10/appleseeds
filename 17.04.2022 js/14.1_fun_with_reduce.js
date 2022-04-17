const numbers = [6,2,3,1,9,7,5,10];

//max
const maxReduce = numberArr =>{
    const maxValue = numberArr.reduce((max, current) =>{
        if(current>max) return current;
        return max;
    });
  return maxValue;  
}

    console.log("max:",maxReduce(numbers));

//sum of even numbers
const sumEvenNumbersReduce = numberArr =>{
    const sumEvenNumbers = numberArr.reduce((acc,value) =>{
    if(value % 2 === 0) return acc+value;
    return acc;
 },0); 
 return sumEvenNumbers;  
}

console.log("sum of even numbers:",sumEvenNumbersReduce(numbers));

//average
const averageReduce = numberArr =>{
    const average = numberArr.reduce((acc, current,index) =>{
        return (acc*index + current)/(index+1);
    });
    return average;
}

console.log("average:",averageReduce(numbers));