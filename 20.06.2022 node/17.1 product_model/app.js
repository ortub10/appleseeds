const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose.connect("mongodb://localhost:27017/products");
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: {
    type: [
      {
        description: {
          type: String,
          required: true,
          minlength: 10,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        discount: { type: Number, default: 0 },
        images: {
          type: Array,
          minlength: 2,
          default: ["hello or", "hello efy"],
        },
      },
    ],
  },
});

const Product = model("products", ProductSchema);
