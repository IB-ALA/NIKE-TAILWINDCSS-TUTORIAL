import { orders } from "../data/orders";
import { Order } from "../types/order";

export function getOrders(userId: string): Order[] {
  // would be a call to db
  return orders.filter((order: Order) => order.userId === userId);
}
