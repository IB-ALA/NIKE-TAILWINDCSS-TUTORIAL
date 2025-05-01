import express from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

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

  if (!validator.isEmail(email)) {
    res.status(404).json({ error: "Provide valid a email." });
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

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  if (!req.body) {
    res.status(404).json({ error: "Provide request body!" });
    return;
  }

  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    res.status(404).json({ error: "Provide all necessary info in body." });
    return;
  }

  if (!validator.isEmail(email)) {
    res.status(404).json({ error: "Provide valid a email." });
    return;
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Compare password with hashed one
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
