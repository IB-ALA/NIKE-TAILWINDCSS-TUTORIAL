import express from "express";
import User, { User as UserDocument } from "../models/User";
import bcrypt from "bcryptjs";
import validator from "validator";
import crypto from "crypto";
import { sendResetPasswordEmail } from "../mailor/sendResetPasswordLink";
import { sendEmailVerificationEmail } from "../mailor/sendEmailVerification";
import { createUserToken } from "../utils/jwt";
import { createUser } from "../utils/createUser";
import { sendPasswordResetConfirmationEmail } from "../mailor/sendPasswordResetConfirmation";

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

  if (password?.length < 6) {
    res.status(404).json({ error: "Password must be atleast 6 characters." });
    return;
  }

  try {
    const existing = await User.findOne({ email });
    console.log({ existing });

    if (existing) {
      res.status(400).json({ message: "Email already in use" });
      return;
    }

    const user = new User({ name, email, password });

    const verificationToken = crypto.randomBytes(32).toString("hex");
    user.verificationToken = verificationToken;

    await user.save();

    const result = await sendEmailVerificationEmail(
      email,
      name,
      verificationToken
    );

    // console.log({ result });

    res.status(201).json({
      message:
        "User registered successfully. Please check your email to verify account.",
      verificationToken,
    });

    // after testing, remove the verificationToken from the response!!!
  } catch (err) {
    // console.log(err);

    res.status(500).json({ message: "Error registering user." });
  }
});

router.post("/verify-email", async (req, res) => {
  if (!req.body) {
    res.status(404).json({ error: "Provide request body!" });
    return;
  }

  const {
    verificationToken,
    email,
  }: { verificationToken: string; email: string } = req.body;

  if (!verificationToken || !email) {
    res.status(404).json({ error: "Provide all necessary info in body." });
    return;
  }

  if (!validator.isEmail(email)) {
    res.status(404).json({ error: "Provide valid a email." });
    return;
  }

  try {
    const user: UserDocument | null = await User.findOne({ email });

    if (!user || user.verificationToken !== verificationToken) {
      res.status(404).json({ error: "Verification failed." });
      return;
    }

    (user.isVerified = true), (user.verificationToken = undefined);

    await user.save();

    // may want to send a successful verification email.. maybe later

    res.status(201).json({ message: "Email verified successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error verifying user." });
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

  if (password?.length < 6) {
    res.status(404).json({ error: "Password must be atleast 6 characters." });
    return;
  }

  try {
    const user: UserDocument | null = await User.findOne({ email });
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

    if (!user.isVerified) {
      res.status(400).json({ message: "Please verify your email." });
      return;
    }

    const token = createUserToken({ payload: { user: createUser(user) } });

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    //   expiresIn: "1h",
    // });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed" });
  }
});

router.post("/forgot-password", async (req, res) => {
  if (!req.body) {
    res.status(404).json({ error: "Provide request body!" });
    return;
  }

  const { email }: { email: string } = req.body;

  if (!email) {
    res.status(404).json({ error: "Provide all necessary info in body." });
    return;
  }

  if (!validator.isEmail(email)) {
    res.status(404).json({ error: "Provide valid a email." });
    return;
  }

  try {
    const user: UserDocument | null = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!user.isVerified) {
      res.status(404).json({ message: "User not yet verified" });
      return;
    }

    const now = new Date();

    // Check if a reset token was recently requested
    if (user.resetPasswordTokenExpiry && user.resetPasswordTokenExpiry > now) {
      res.status(429).json({ message: "Please wait before requesting again." });
      return;
    }

    const token: string = crypto.randomBytes(32).toString("hex");

    // token valid for 10 mins
    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    // Save token & expiry
    user.resetPasswordToken = token;
    user.resetPasswordTokenExpiry = expiry;
    await user.save();

    const result = await sendResetPasswordEmail(user.email, token);
    // console.log({ result });

    // after testing, remove the token from the response!!!
    res.json({ message: "Reset link sent to your email.", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send reset email." });
  }
});

router.post("/reset-password", async (req, res) => {
  if (!req.body) {
    res.status(404).json({ error: "Provide request body!" });
    return;
  }

  const {
    email,
    password,
    token,
  }: { email: string; password: string; token: string } = req.body;

  if (!email || !password || !token) {
    res.status(404).json({ error: "Provide all necessary info in body." });
    return;
  }

  if (password?.length < 6) {
    res.status(404).json({ error: "Password must be atleast 6 characters." });
    return;
  }

  try {
    const user: UserDocument | null = await User.findOne({
      email: email,
      resetPasswordToken: token,
      resetPasswordTokenExpiry: { $gt: new Date() },
    });

    if (!user) {
      res.status(400).json({
        message:
          "Invalid or expired request. Please request a new password reset",
      });
      return;
    }

    (user.password = password),
      (user.resetPasswordToken = undefined),
      (user.resetPasswordTokenExpiry = undefined);

    await user.save();

    const result = await sendPasswordResetConfirmationEmail(email, user.name);
    // console.log({ result });

    res.json({ message: "Password reset successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Reset failed." });
  }
});

export default router;
