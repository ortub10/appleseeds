const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
const food2 = ["chicken"];

const conpare =(arr1, arr2)=>{
    const same=[]
    for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (item1 === item2){
                same.push(item1);
            }
        }
    }
    if(same.length!==0){
        return same;
    }
    return false;
}
console.log("food-food1:",conpare(food,food1));
console.log("food1-food2:",conpare(food1,food2));
