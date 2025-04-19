interface OrderItem {
  id: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  userID: string;
  orderID: string;
  orderItems: OrderItem[];
  total: number;
  status: string;
  orderDate: string;
}

export const orders: Order[] = [
  {
    userID: "User234",
    orderID: "74785",
    orderItems: [
      {
        id: "54376",
        quantity: 2,
        size: "23",
        color: "black",
      },
      {
        id: "54377",
        quantity: 1,
        size: "23",
        color: "default",
      },
    ],
    total: 60.45,
    status: "delivered",
    orderDate: "2024-08-21T13:26:35.000Z",
  },
  {
    userID: "User234",
    orderID: "74786",
    orderItems: [
      {
        id: "54376",
        quantity: 2,
        size: "23",
        color: "red",
      },
    ],
    total: 20.15,
    status: "canceled",
    orderDate: "2024-08-21T13:26:35.000Z",
  },
  {
    userID: "User235",
    orderID: "74787",
    orderItems: [
      {
        id: "54376",
        quantity: 2,
        size: "23",
        color: "default",
      },
      {
        id: "54377",
        quantity: 1,
        size: "23",
        color: "default",
      },
    ],
    total: 60.45,
    status: "pending",
    orderDate: "2024-08-21T13:26:35.000Z",
  },
];
