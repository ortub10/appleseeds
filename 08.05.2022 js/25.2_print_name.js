const obj = {
  name: "jhon",
  printName: function () {
    console.log(this.name);
  },
  printNameAfterSecond: function () {
    const afterSec = obj.printName.bind(this);
    setTimeout(function () {
      afterSec();
    }, 1000);
  },
};
obj.printName();
obj.printNameAfterSecond();

const name2 = {
  name: "stev",
};
obj.printName.call(name2);
obj.printNameAfterSecond.call(name2);
