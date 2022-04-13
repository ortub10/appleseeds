const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

//1
const onlyNames = arr =>(arr.map(obj=>(obj.name)))
console.log(onlyNames(data));

//2
const born = arr =>{
    const before1990 = [];
    arr.forEach(element => {
    const birthday = element.birthday;    
    const year = birthday.substr(birthday.length-4);
    if(year<1990){
        before1990.push(element);
    }   
    });
    return before1990;
}
console.log(born(data));

//3
const foods = arr =>{
    const numberFoods = {};
     arr.forEach(element => {
     const innerObj = element.favoriteFoods;
     for (const items in innerObj) {
        // console.log();
         innerObj[items].forEach(item =>{
             if(numberFoods[item] === undefined){
                 numberFoods[item] = 0;
             }
             numberFoods[item]+=1;
         })  
         } 
     });
    return numberFoods;
}

console.log(foods(data));