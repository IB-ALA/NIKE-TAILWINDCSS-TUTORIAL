import express from "express";
import Product from "../models/Product";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const products = await Product.find();
    res.json({ message: "Successful!", products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
