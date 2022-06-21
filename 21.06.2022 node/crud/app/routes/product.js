import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  getProductsActive,
  getProductPriceRange,
} from "../comtrollers/product.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/getSpecify/:id", getProduct);
productRouter.get("/active", getProductsActive);
productRouter.get("/priceRange", getProductPriceRange);

export { productRouter };
