const populations =  [9000000,47000000,67000000, 83000000];

function percentageOfWorld1(population){
    let worldPopulation = 7900000000;
    let percentages = (population/worldPopulation) * 100;
    let percentagesRound1 = Math.round(percentages*10)/10;
    return  percentagesRound1 + ' % of the world population';
}
const populationPercentages = populations =>{
    const percentages =[];
    for (const item of populations) {
        percentages.push(percentageOfWorld1(item));
    }
    return percentages
}
console.log(populationPercentages(populations));