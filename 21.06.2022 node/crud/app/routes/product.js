import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  getProductsActive,
  getProductPriceRange,
  updateActiveAndDiscount,
  deleteProduct,
  deleteAllProduct,
} from "../comtrollers/product.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/getSpecify/:id", getProduct);
productRouter.get("/active", getProductsActive);
productRouter.get("/priceRange", getProductPriceRange);
productRouter.put("/activeAndDiscount/:id", updateActiveAndDiscount);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.delete("/delete", deleteAllProduct);

export { productRouter };
