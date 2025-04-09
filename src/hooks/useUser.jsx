import { useContext } from "react";
import { GlobalContext } from "../context";

function useUser() {
  const { registeredUser, setRegisteredUser } = useContext(GlobalContext);

  function editUserInfo(data) {
    // should call an api
    const oldUserDetails = { ...registeredUser };
    const newDetails = { ...oldUserDetails, ...data };
    setRegisteredUser(newDetails);
  }

  return { registeredUser, editUserInfo };
}

export default useUser;
