function makeAllCaps(arr) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arr)) {
      reject("It is not array!!");
    }
    const arrBig = arr.map((element) => {
      if (!(typeof element === "string")) {
        reject("must includes only strings");
      } else {
        return element.toUpperCase();
      }
    });
    resolve(arrBig);
  });
}
function sortWords(arr) {
  return new Promise(function (resolve, reject) {
    resolve(arr.sort());
  });
}

const arr1 = ["ccc", "bbb", "aaa", "eee", "ddd", "fff"];
const arr2 = ["ccc", "bbb", "aaa", 8, "ddd", "fff"];
const arr3 = { str1: "aaa", str2: "bbb" };

makeAllCaps(arr1)
  .then((ans) => sortWords(ans))
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err));

makeAllCaps(arr2)
  .then((ans) => sortWords(ans))
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err));

makeAllCaps(arr3)
  .then((ans) => sortWords(ans))
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err));
