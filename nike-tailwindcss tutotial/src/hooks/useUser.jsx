import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

function useUser() {
  const { registeredUser, setRegisteredUser, orders, setOrders } =
    useContext(GlobalContext);

  function editUserInfo(data) {
    // should call an api
    const oldUserDetails = { ...registeredUser };
    const newDetails = { ...oldUserDetails, ...data };
    setRegisteredUser(newDetails);
  }

  return { registeredUser, editUserInfo, orders };
}

export default useUser;
