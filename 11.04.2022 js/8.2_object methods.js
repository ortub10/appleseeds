const myCountry = {
    country:'Israel',
    capital:'Jerusalem', 
    language:'Hebrew', 
    population:8,
    neighbours:['Egype','Syria','Lebanon','Jordan'],
    describe(){
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
        have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland(){
        this['isIsland'] = this.neighbours.length===0?true:false;
    }
}
//call the descrbie method
myCountry.describe();
//call the checkIsland
myCountry.checkIsland();
console.log(myCountry);