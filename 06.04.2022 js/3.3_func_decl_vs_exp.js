function percentageOfWorld1(population){
    let worldPopulation = 7900000000;
    let percentages = (population/worldPopulation) * 100;
    let percentagesRound1 = Math.round(percentages*10)/10;
    return  percentagesRound1 + ' % of the world population';
}

 const percentageOfWorld2= function (population){
    let worldPopulation = 7900000000;
    let percentages = (population/worldPopulation) * 100;
    let percentagesRound1 = Math.round(percentages*10)/10;
    return  percentagesRound1 + ' % of the world population';
}
 let USA  = percentageOfWorld1(329500000);
 let China  = percentageOfWorld1(1402000000);
 let Sapin  = percentageOfWorld1(47350000);

 let USA2  = percentageOfWorld1(329500000);
 let China2  = percentageOfWorld1(1402000000);
 let Sapin2  = percentageOfWorld1(47350000);

 console.log("USA",USA);
 console.log("China",China);
 console.log("Sapin",Sapin);
 console.log("---------------------");
 console.log("USA2",USA2);
 console.log("China2",China2);
 console.log("Sapin2",Sapin2);