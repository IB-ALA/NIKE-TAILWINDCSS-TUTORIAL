import express from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  if (!req.body) {
    res.status(404).json({ error: "Provide request body!" });
    return;
  }

  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;

  if (!name || !email || !password) {
    res.status(404).json({ error: "Provide all necessary info in body." });
    return;
  }

  try {
    // Check if email is already in use
    const existing = await User.findOne({ email });
    console.log({ existing });

    if (existing) {
      res.status(400).json({ message: "Email already in use" });
      return;
    }

    // Create and save new user
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    // console.log({ token });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
});

export default router;
