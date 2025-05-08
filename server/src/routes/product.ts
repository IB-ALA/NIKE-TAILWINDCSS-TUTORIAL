import express from "express";
import Product, { Product as ProductDocument } from "../models/Product";
import { createProduct } from "../utils/createProduct";
import { Product as ProductType } from "../types/product";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const products: ProductType[] = await Product.find().lean<ProductType[]>();

    res.json({
      message: "Successful!",
      products: createProduct(products as ProductDocument[]),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
