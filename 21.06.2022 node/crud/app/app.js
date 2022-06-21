import express from "express";
import { productRouter } from "./routes/product.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);

export { app };
