const countryToLiveIn = (language, isIsland, population, country) =>{
    if(language === 'English' && population<50000000 && isIsland === false)
        return `You should live in ${country}`;
    return `${country} does not meet your criteria`;
} 

console.log(countryToLiveIn('Hebrew', false,8000000, 'Israel'));
console.log(countryToLiveIn('English', false,8000000, 'Israel'));