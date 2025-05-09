import { Types } from "mongoose";
import { OrderDocument } from "../models/Order";
import { OrderType } from "../types/order";

export function createOrder(orders: OrderDocument[]): OrderType[] {
  return orders.map(
    ({ _id, userId, orderItems, total, status, orderDate }) => ({
      orderId: (_id as Types.ObjectId).toString(),
      userId: userId?.toString(),
      orderItems: orderItems.map((item) => ({
        productId: item.productId.toString(),
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      })),
      total,
      status,
      orderDate: orderDate.toISOString(),
    })
  );
}
