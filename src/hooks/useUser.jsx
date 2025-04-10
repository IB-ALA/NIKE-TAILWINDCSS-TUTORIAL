import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

function useUser() {
  const { registeredUser, setRegisteredUser, orders, setOrders } =
    useContext(GlobalContext);

  useEffect(() => {
    setOrders([
      {
        orderID: "74785",
        products: [
          {
            id: "54376",
            quantity: 2,
            size: "23",
            color: "blue",
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
      },
      {
        orderID: "74786",
        products: [
          {
            id: "54375",
            quantity: 2,
            size: "23",
            color: "red",
          },
        ],
        total: 20.15,
        status: "pending",
      },
    ]);
  }, []);

  function editUserInfo(data) {
    // should call an api
    const oldUserDetails = { ...registeredUser };
    const newDetails = { ...oldUserDetails, ...data };
    setRegisteredUser(newDetails);
  }

  return { registeredUser, editUserInfo, orders };
}

export default useUser;
