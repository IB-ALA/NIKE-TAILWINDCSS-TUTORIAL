import { useContext } from "react";
import { GlobalContext } from "../context";

function useUser() {
  const { registeredUser, setRegisteredUser } = useContext(GlobalContext);

  return { registeredUser, setRegisteredUser };
}

export default useUser;
