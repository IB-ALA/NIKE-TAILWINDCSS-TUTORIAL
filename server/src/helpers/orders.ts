import { orders, updateOrdersData } from "../data/orders";
import { Order, PlaceOrderParam } from "../types/order";

export function getOrders(userId: string): Order[] {
  // would be a call to db
  return orders.filter((order: Order) => order.userId === userId);
}

export function placeOrder(orderDetails: PlaceOrderParam): string {
  const copiedOrdersData: Order[] = [...orders];

  const orderDate: string = new Date() as unknown as string;
  const status: string = "Pending";
  const orderId: string = generateOrderId();

  if (orderDetails.userId) {
    copiedOrdersData.push({
      userId: orderDetails.userId,
      orderId,
      orderItems: orderDetails.orderItems,
      total: orderDetails.total,
      status,
      orderDate,
    });
  } else {
    copiedOrdersData.push({
      orderId,
      orderItems: orderDetails.orderItems,
      total: orderDetails.total,
      status,
      orderDate,
    });
  }

  updateOrdersData(copiedOrdersData);
  return orderId;
}

function generateOrderId(): string {
  return "order234";
}
