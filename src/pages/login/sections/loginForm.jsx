import { useContext } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import { GlobalContext } from "../../../context";

function LoginForm() {
  const { loginFormData, setLoginFormData, handleLogin } =
    useContext(GlobalContext);
  return (
    <section className="flex justify-center">
      <form className="w-96">
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
        />
      </form>
    </section>
  );
}

export default LoginForm;
