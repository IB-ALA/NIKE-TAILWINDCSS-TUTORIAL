import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

export function useOrders() {
  const { orders, setOrders } = useContext(GlobalContext);

  useEffect(() => {
    setOrders([
      {
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
    ]);
  }, []);

  function fetchOrders({ userId }) {
    // by an async call to the api and then setOrders to the resultant data
  }

  return { orders };
}
