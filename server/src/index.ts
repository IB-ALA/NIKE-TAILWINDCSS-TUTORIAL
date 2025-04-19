import express from "express";
import { products } from "./data/product";
import { User } from "./data/user";
import { getOrders } from "./helpers/orders";
import { Order } from "./data/orders";
import { AuthenticatedRequest, authUserId } from "./middleware/users";
import { Wishlist } from "./data/wishlist";
import { getWishlist } from "./helpers/wishlist";

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
  console.log({ user });

  if (!user) {
    res.status(404).json({ result: "User not authenticated" });
    return;
  }

  const orders: Order[] = getOrders(id);
  res.json({ orders });
});

app.get("/wishlist/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const id: string = req.params.id;
  const user: User | undefined = req.user;
  console.log({ user });

  if (!user) {
    res.status(404).json({ result: "User not authenticated" });
    return;
  }

  const wishlist: Wishlist | undefined = getWishlist(id);

  if (!wishlist) {
    res.json({ wishlist: [] });
    return;
  }

  res.json({ wishlist: wishlist?.list });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
