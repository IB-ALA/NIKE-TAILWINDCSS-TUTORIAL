import { useContext } from "react";
import { GlobalContext } from "../context";

export function useForm() {
  const {
    initialLoginFormData,
    loginFormData,
    setLoginFormData,
    initialSignupFormData,
    signupFormData,
    setSignupFormData,
  } = useContext(GlobalContext);

  function handleLogin() {
    // api call and auth
    console.log({ loginFormData });
    setLoginFormData(initialLoginFormData);
  }
  function handleSignup() {
    // api call and auth
    console.log({ signupFormData });
    setSignupFormData(initialSignupFormData);
  }

  return {
    loginFormData,
    setLoginFormData,
    handleLogin,
    signupFormData,
    setSignupFormData,
    handleSignup,
  };
}
