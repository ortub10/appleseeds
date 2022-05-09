function greateThenTen(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve();
    } else {
      reject();
    }
  });
}

greateThenTen(1)
  .then(() => console.log("Greater then 10"))
  .catch(() => console.log("Less then 10"));
