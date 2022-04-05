const describeCountry = function(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;   
};

let country1 = describeCountry('Spain',20,'Madrid'); 
let country2 = describeCountry('France',15, 'Paris'); 
let country3 = describeCountry('USA',30,'Washington D.C'); 
console.log(country1);
console.log(country2);
console.log(country3);