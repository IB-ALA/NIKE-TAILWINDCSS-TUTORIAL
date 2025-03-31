import { useContext, useEffect, useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import { GlobalContext } from "../../../context";
import { isFormValid } from "../../../shared";

function LoginForm() {
  const { loginFormData, setLoginFormData, handleLogin } =
    useContext(GlobalContext);
  const [formValidity, setFormValidity] = useState(true);

  useEffect(() => {
    setFormValidity(!isFormValid(loginFormData).valid);
  }, [loginFormData]);

  return (
    <section className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-96">
        <CommonInput
          autoFocus={true}
          placeholder={"Enter email"}
          name={"email"}
          key={"email"}
          type={"email"}
          id={"email"}
          required={true}
          className={
            "border border-slate-400 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md"
          }
          value={loginFormData.email}
          formData={loginFormData}
          setFormData={setLoginFormData}
        />
        <CommonInput
          placeholder={"Enter password"}
          name={"password"}
          key={"password"}
          type={"password"}
          id={"password"}
          required={true}
          className={
            "border border-slate-400 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md"
          }
          value={loginFormData.password}
          formData={loginFormData}
          setFormData={setLoginFormData}
        />

        <CommonButton
          btnText={"Login"}
          type={"submit"}
          extraClasses={"w-full mt-3"}
          handleOnClick={() => handleLogin()}
          disabled={formValidity}
        />
      </form>
    </section>
  );
}

export default LoginForm;
