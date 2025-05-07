import { Schema, Document, model } from "mongoose";
import { Color, ProductDetails } from "../types/product";

export interface Product extends Document {
  name: string;
  image: string;
  price: number;
  sizes: number[];
  productDetails?: ProductDetails;
}

const colorSchema = new Schema<Color>(
  {
    name: {
      type: String,
      lowercase: true,
      validate: {
        validator: (value: string | null) => value != null,
        message: "Color name is required if colors are provided",
      },
    },
    image: {
      type: String,
      lowercase: true,
      validate: {
        validator: (value: string | null) => value != null,
        message: "Color image is required if colors are provided",
      },
    },
  },
  { _id: false }
);

const productDetailsSchema = new Schema<ProductDetails>(
  {
    colors: {
      type: [colorSchema],
      validate: {
        validator: (value: Color[]) => Array.isArray(value) && value.length > 0,
        message:
          "If provided, productDetails.colors must contain at least one color",
      },
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
    },
  },
  { _id: false }
);

// 4. Product Schema
const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
    },
    image: {
      type: String,
      required: [true, "Please provide product image URL"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
    sizes: {
      type: [Number],
      required: [true, "Please provide product sizes"],
    },
    productDetails: {
      type: productDetailsSchema,
      required: false,
    },
  }
  // { timestamps: true }
);

export default model<Product>("Product", productSchema);
