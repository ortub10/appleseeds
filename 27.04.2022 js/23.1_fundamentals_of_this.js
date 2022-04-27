//1
console.log(this); // point on the window because there is not object arount it

//2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

//2.a
//point on the window because arrow function has no new this

//2.b
//fix: chane to declaration function:
const myObjFix = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObjFix.greet();

//3
const myFuncDec = function () {
  console.log(this); // point on the window because 'myFuncDec' function is global
};

//4
const myFuncArrow = () => {
  console.log(this); //point on the window because arrow function has no new this
};
myFuncArrow();

//5
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

//5.a
//point on the window because arrow function has no new this
//5.b
//fix: chane to declaration function:
document.querySelector(".element").addEventListener(function () {
  console.log(this);
});
