import { orders, OrderType } from "../../data/orders";

export function getOrders(userID: string): OrderType[] {
  // would be a call to db
  return orders.filter((order: OrderType) => order.userID === userID);
}
