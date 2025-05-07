import express from "express";
import Product from "../models/Product";
import { createProduct } from "../utils/createProduct";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const products = await Product.find();

    res.json({ message: "Successful!", products: createProduct(products) });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
