const numbers = [45, 14, 19, 7];

//Build filter method with the help of prototypes
Array.prototype.myFilter = function (callback, thisArg) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (thisArg === undefined) {
      if (callback(this[i], i, this)) newArray.push(this[i]);
    } else {
      thisArg["callback"] = callback;
      if (thisArg["callback"](this[i], i, this)) newArray.push(this[i]);
    }
  }
  return newArray;
};

//Build find method with the help of prototypes
Array.prototype.myFind = function (callback, thisArg) {
  for (let i = 0; i < this.length; i += 1) {
    if (thisArg === undefined) {
      if (callback(this[i], i, this)) return this[i];
    } else {
      thisArg["callback"] = callback;
      if (thisArg["callback"](this[i], i, this)) return this[i];
    }
  }
  return undefined;
};

//Build reduce method with the help of prototypes
Array.prototype.myReduce = function (callback, initialValue) {
  let total = this[0];
  let start = 1;
  if (typeof initialValue !== "number" && initialValue !== undefined) {
    total = initialValue;
    start = 0;
  } else if (typeof initialValue === "number") {
    start = 0;
    total = initialValue;
  }
  for (let i = start; i < this.length; i += 1) {
    total = callback(total, this[i], i, this);
  }
  return total;
};

const newNumbers = numbers.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(newNumbers);

const newNumbers2 = numbers.myFilter(
  function (item) {
    return item % 2 === this.val;
  },
  { val: 1 }
);

console.log(newNumbers2);

const numberFind = numbers.myFind(function (item) {
  return item < 30;
});

console.log(numberFind);

const numberFind2 = numbers.myFind(
  function (item) {
    return item < this.val;
  },
  { val: 30 }
);

console.log(numberFind2);

const sum = numbers.myReduce(function (total, curent) {
  return total + curent;
});

console.log(sum);

const sum2 = numbers.myReduce(function (total, curent) {
  return total + curent;
}, 5);

console.log(sum2);

const arr = numbers.myReduce(function (total, curent) {
  total.push(curent * 2);
  return total;
}, []);

console.log(arr);

const obj = numbers.myReduce(function (total, curent) {
  total[`${curent}`] = curent;
  return total;
}, {});

console.log(obj);
