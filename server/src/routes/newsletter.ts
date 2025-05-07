import express from "express";
import validator from "validator";
import { AuthenticatedRequest } from "../middleware/users";
import { sendNewsletterEmail } from "../mailor/sendNewsletter";
import Newsletter from "../models/Newsletter";

const router = express.Router();

router.post("/subscribe", async (req: AuthenticatedRequest, res) => {
  // {
  // "newsletterSubscriber": {
  //   "email": "iishaqyusif@gmail.com"
  // }
  // }

  if (!req.body) {
    res.status(409).json({ error: "Provide request body." });
  }

  const { newsletterSubscriber }: { newsletterSubscriber: { email: string } } =
    req.body;

  if (!newsletterSubscriber || !newsletterSubscriber?.email) {
    res.status(400).json({ error: "Email is required." });
    return;
  }

  const { email }: { email: string } = newsletterSubscriber;

  if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Invalid email format." });
    return;
  }

  try {
    const existing = await Newsletter.findOne({ email });

    if (existing) {
      res.status(409).json({ message: "Email already subscribed." });
      return;
    }
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    const result = await sendNewsletterEmail(email);

    res
      .status(201)
      .json({ message: "Subscribed successfully!", data: result?.response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

router.delete("/unsubscribe/:email", async (req: AuthenticatedRequest, res) => {
  const email: string = req.params.email;

  if (!email) {
    res.status(400).json({ error: "Email is required." });
    return;
  }

  if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Invalid email format." });
    return;
  }

  try {
    const existing = await Newsletter.findOne({ email });

    if (!existing) {
      res.status(409).json({ error: "Email not subscribed." });
      return;
    }

    const result = await Newsletter.deleteOne({ email });

    res.status(201).json({ message: "Unsubscribed successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Unsubscription failed. Try again later." });
  }
});

export default router;
