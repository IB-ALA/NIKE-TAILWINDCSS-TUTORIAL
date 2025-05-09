export interface OrderItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export type OrderStatus =
  | "created"
  | "processing"
  | "delivering"
  | "delivered"
  | "failed"
  | "cancelled";

export interface OrderType {
  userId?: string;
  orderId: string;
  orderItems: OrderItem[];
  total: number;
  status: OrderStatus;
  orderDate: string;
}

export interface PlaceOrderParam {
  userId?: string;
  orderItems: OrderItem[];
  total: number;
}
