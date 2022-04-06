const grade =  function (numberScore){
    if(numberScore>=0 && numberScore <=64){ return 'F';}
    else if(numberScore <=69) {return 'D';}
    else if(numberScore <=79) {return 'C';}
    else if(numberScore <=89) {return 'B';}
    else if(numberScore<=100) {return 'A';}
    else {return "invalid input";} 
}

console.log(grade(82));