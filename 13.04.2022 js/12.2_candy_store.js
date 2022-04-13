const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
}

//1
function getCandy(candyStore, id){
    const candy =  candyStore.candies.find(obj => (obj.id===id));
    return candy;
}
console.log('id:as12f -getCandy:',getCandy(candyStore,'as12f'));
console.log('id:5hd7y -getCandy:',getCandy(candyStore,'5hd7y'));

//2
function getPrice(candyStore, id){
    const candy =  candyStore.candies.find(obj => (obj.id===id));
    return candy.price;
} 
console.log('id:as12f -getPrice:',getPrice(candyStore,'as12f'));
console.log('id:5hd7y -getPrice:',getPrice(candyStore,'5hd7y'));

//3
function addCandy(candyStore, id, name, price){
    const newObj = {
        name:name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies[candyStore.candies.length] = newObj;
}
console.log('Before add:',candyStore);
addCandy(candyStore,'Sugar','ff13r',5);
console.log('After add:',candyStore);

//4
function buy(candyStore, id){
   const candyToBuy = candyStore.candies.find(obj=>(obj.id === id))
   candyToBuy.amount-=1;
   candyStore.cashRegister+= candyToBuy.price;
}

console.log('Before buy:',candyStore);
buy(candyStore,'5hd7y');
console.log('After buy:',candyStore);