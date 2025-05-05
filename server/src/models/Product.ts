import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    unique: true,
    lowercase: true,
  },
  image: {
    type: String,
    required: [true, "Please provide image URL"],
    lowercase: true,
  },
});

const productDetailsSchema = new Schema({
  colors: {
    type: [colorSchema],
    required: [true, "Please provide product varietie (color)"],
  },
  description: {
    type: String,
    required: [true, "Please provide product discription"],
  },
});

const productSchema = new Schema({
  name: { type: String, required: [true, "Please provide product name"] },
  image: { type: String, required: [true, "Please provide product image URL"] },
  price: { type: Number, required: [true, "Please provide product price"] },
  sizes: { type: [Number], required: [true, "Please provide product sizes"] },
  productDetails: { type: productDetailsSchema },
});

export default mongoose.model("Product", productSchema);
