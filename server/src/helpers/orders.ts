import { orders, Order } from "../data/orders";

export function getOrders(userId: string): Order[] {
  // would be a call to db
  return orders.filter((order: Order) => order.userId === userId);
}
