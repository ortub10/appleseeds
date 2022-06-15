const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let numbersArr = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.send(numbersArr);
});

app.post("/numbers", (req, res) => {
  numbersArr.push(req.body.myNum);
  res.send(numbersArr);
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  numbersArr = numbersArr.filter((number) => number != num);
  res.send(numbersArr);
});

app.put("/numbers/:num", (req, res) => {
  const numToReplace = req.params.num;
  const newNum = +req.body.num;
  const indexNumToReplace = numbersArr.findIndex(
    (number) => number == numToReplace
  );
  numbersArr[indexNumToReplace] = newNum;
  res.send(numbersArr);
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
