const express = require("express");

const app = express();
const PORT = 3000;

app.get("/numbers", (req, res) => {
  res.send("success using " + req.method);
});

app.post("/numbers", (req, res) => {
  res.send("success using " + req.method);
});

app.delete("/numbers", (req, res) => {
  res.send("success using " + req.method);
});

app.put("/numbers", (req, res) => {
  res.send("success using " + req.method);
});
app.listen(PORT, () => {
  console.log("Listen on port " + PORT);
});
