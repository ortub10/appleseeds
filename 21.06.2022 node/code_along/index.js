import mongoose from "mongoose";
// import express from "express";
// const app = express();
import { PORT, MONGO_URI } from "./config.js";

import { app } from "./app/app.js";

mongoose.connect(MONGO_URI, (error, mongoDBinstance) => {
  if (error) throw new Error(error);
  if (!process.env.MODE_ENV || process.env.MODE_ENV === "developmant") {
    const { host, port, name } = mongoDBinstance;
    console.log({ host, port, name });
  }
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log("listen to port " + PORT);
});
