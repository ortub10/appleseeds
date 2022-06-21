import mongoose from "mongoose";
import { PORT, MONGO_URL } from "./config.js";

import { app } from "./app/app.js";

mongoose.connect(MONGO_URL, (error, mongoDBinstance) => {
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
