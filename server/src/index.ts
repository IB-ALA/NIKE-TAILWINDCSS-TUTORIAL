import express from "express";
import validator from "validator";
import { products } from "./data/product";
import { Product } from "./types/product";
import { User } from "./types/user";
import { getOrders } from "./helpers/orders";
import { Order } from "./types/order";
import { AuthenticatedRequest, authUserId } from "./middleware/users";
import { Wishlist } from "./types/wishlist";
import { getWishlist } from "./helpers/wishlist";
import { getDeliverDetails } from "./helpers/deliver-details";
import { DeliveryDetails } from "./types/delivery-details";
import { getBillingDetails } from "./helpers/billing-details";
import { BillingDetails } from "./types/billing-details";
import { addEmailToSubcribers, isEmailSubbscribed } from "./helpers/newsletter";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from Nike TS backend!");
});

app.get("/products", (_req, res) => {
  const dbProducts: Product[] = products;
  res.json({ products: dbProducts });
});

app.get("/orders/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const id: string = req.params.id;
  const user: User | undefined = req.user;
  console.log(user?.id);

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  const orders: Order[] = getOrders(id);
  res.json({ orders });
});

app.get("/wishlist/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const id: string = req.params.id;
  const user: User | undefined = req.user;
  console.log(user?.id);

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  const wishlist: Wishlist | undefined = getWishlist(id);

  if (!wishlist) {
    res.json({ wishlist: [] });
    return;
  }

  res.json({ wishlist: wishlist?.list });
});

app.get(
  "/delivery-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    const deliveryDetails: DeliveryDetails | undefined = getDeliverDetails(id);

    if (!deliveryDetails) {
      res.json({ deliveryDetails: [] });
      return;
    }

    res.json({ deliveryDetails: deliveryDetails?.details });
  }
);

app.get(
  "/billing-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    const billingDetails: BillingDetails | undefined = getBillingDetails(id);

    if (!billingDetails) {
      res.json({ billingDetails: [] });
      return;
    }

    res.json({ billingDetails: billingDetails?.details });
  }
);

app.post("/newsletter/subscribe", (req: AuthenticatedRequest, res) => {
  const { newsletterSubscriber }: { newsletterSubscriber: { email: string } } =
    req.body;

  console.log(req.body);

  if (!newsletterSubscriber || !newsletterSubscriber?.email) {
    res.status(400).json({ error: "Email is required." });
    return;
  }

  const { email }: { email: string } = newsletterSubscriber;

  if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Invalid email format." });
    return;
  }

  // const cleanEmail = validator.normalizeEmail(email);
  // console.log(cleanEmail);

  // added user to the newletter db... and send a welcome text.. maybe
  // all here in a try/catch block
  if (isEmailSubbscribed(email)) {
    res.status(409).json({ message: "Email already subscribed." });
    return;
  }

  addEmailToSubcribers(email);

  res.status(201).json({ message: "Subscribed successfully!" });

  // console.error(err);
  // return res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
