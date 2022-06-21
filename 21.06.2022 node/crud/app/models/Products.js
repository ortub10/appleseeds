import mongoose from "mongoose";

const productchema = new mongoose.Schema({
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
      },
    ],
  },
});

const Product = mongoose.model("products", productchema);

export { Product };
