import express from "express";
import { products } from "./data/product";
import { User } from "./data/user";
import { getOrders } from "./helpers/orders";
import { Order } from "./data/orders";
import { AuthenticatedRequest, authUserId } from "./middleware/users";
import { Wishlist } from "./data/wishlist";
import { getWishlist } from "./helpers/wishlist";
import { getDeliverDetails } from "./helpers/deliver-details";
import { DeliveryDetails } from "./data/delivery-details";
import { getBillingDetails } from "./helpers/billing-details";
import { BillingDetails } from "./data/billing-details";

const app = express();
const PORT = 5000;

app.get("/", (_req, res) => {
  res.send("Hello from Nike TS backend!");
});

app.get("/products", (_req, res) => {
  res.json({ products });
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
