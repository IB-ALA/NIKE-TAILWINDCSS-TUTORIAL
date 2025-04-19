import { orders, Order } from "../data/orders";

export function getOrders(userID: string): Order[] {
  // would be a call to db
  return orders.filter((order: Order) => order.userID === userID);
}
