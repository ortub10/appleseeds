import { Product } from "../models/Products.js";

export const createProduct = async (req, res) => {
  try {
    const productBody = req.body;
    // console.log(productBody);
    const product = new Product(productBody);
    const newProduct = await product.save();
    res.send(newProduct);
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    console.log(e);
  }
};

export const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.send(product);
  } catch (e) {
    console.log(e);
  }
};

export const getProductsActive = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.send(products);
  } catch (e) {
    console.log(e);
  }
};

export const getProductPriceRange = async (req, res) => {
  try {
    const products = await Product.find({
      "details.price": { $gte: 50, $lte: 500 },
    });
    res.send(products);
  } catch (e) {
    console.log(e);
  }
};

export const updateActiveAndDiscount = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "category", "isActive", "details"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  const innerUpdates = Object.keys(req.body["details"]);
  const innerAllowedUpdates = ["description", "price", "discount"];
  const innerIsValid = innerUpdates.every((update) =>
    innerAllowedUpdates.includes(update)
  );

  if (!isValid || !innerIsValid) res.send({ error: "Invalid Update" });

  try {
    const id = req.params.id;
    const productToUdate = req.body;
    const newProduct = await Product.findByIdAndUpdate(id, productToUdate, {
      new: true,
    });
    res.send(newProduct);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.send(deleteProduct);
  try {
  } catch (e) {
    console.log(e);
  }
};

export const deleteAllProduct = async (req, res) => {
  const deleteProduct = await Product.deleteMany({});
  res.send(deleteProduct);
  try {
  } catch (e) {
    console.log(e);
  }
};
