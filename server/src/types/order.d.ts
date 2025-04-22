export interface OrderItem {
  id: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  userId?: string;
  orderId: string;
  orderItems: OrderItem[];
  total: number;
  status: string;
  orderDate: string;
}

export interface PlaceOrderParam {
  userId?: string;
  orderItems: OrderItem[];
  total: number;
}
