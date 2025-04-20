export interface OrderItem {
  id: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  userId: string;
  orderID: string;
  orderItems: OrderItem[];
  total: number;
  status: string;
  orderDate: string;
}
