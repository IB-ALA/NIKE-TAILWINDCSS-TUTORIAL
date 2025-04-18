import express from "express";
import { products } from "./data/product";
import { UserType } from "./data/user";
import { authUserID } from "./middleware/authUserId";
import { getOrders } from "./helpers/orders";
import { OrderType } from "./data/orders";

const app = express();
const PORT = 5000;

app.get("/", (_req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.get("/products", (_req, res) => {
  res.json({ products });
});

app.get("/orders/:id", (_req, res) => {
  const id: string = _req.params.id;
  const user: UserType | undefined = authUserID(id);

  console.log({ id });
  console.log({ user });

  if (!user) res.status(404).json({ result: "User not authenticated" });
  else {
    const orders: OrderType[] = getOrders(id);
    res.json({ orders });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
