const fs = require("fs");
// fs.writeFileSync("text.txt", "I learn node js");
// fs.copyFileSync("text.txt", "new.txt");
// fs.renameSync("text.txt", "study.txt");
fs.readdirSync("./").forEach((file) => {
  console.log(file);
});
// const data = fs.readFileSync("new.txt", "utf8");
// console.log(data);
