import { useEffect, useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import { isFormValid } from "../../../shared";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

function LoginForm() {
  const { loginFormData, setLoginFormData, handleLogin } = useForm();
  const [formValidity, setFormValidity] = useState(true);
  // const [errors, setErrors] = useState();

  useEffect(() => {
    setFormValidity(!isFormValid(loginFormData)?.valid);
  }, [loginFormData]);

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="sm:w-96 w-80 flex items-center flex-col mx-auto"
      >
        <CommonInput
          autoFocus={true}
          placeholder={"Enter email"}
          name={"email"}
          key={"email"}
          type={"email"}
          id={"email"}
          required={true}
          className={
            "border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent"
          }
          value={loginFormData?.email}
          handleOnChange={(e) => {
            let { name, value } = e.target;
            setLoginFormData((prev) => ({ ...prev, [name]: value }));
          }}
        />
        {/* {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )} */}

        <CommonInput
          placeholder={"Enter password"}
          name={"password"}
          key={"password"}
          type={"password"}
          id={"password"}
          required={true}
          className={
            "border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent"
          }
          value={loginFormData?.password}
          handleOnChange={(e) => {
            let { name, value } = e.target;
            setLoginFormData((prev) => ({ ...prev, [name]: value }));
          }}
        />
        {/* {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )} */}

        {!Object?.keys(isFormValid(loginFormData)?.newErrors)?.includes(
          "email"
        ) && (
          <Link
            to={{
              pathname: "/forgotpassword",
              search: `?email=${loginFormData?.email}`,
              // hash: "#hash",
            }}
            className="font-montserrat mb-2 underline underline-offset-2 text-coral-full"
          >
            Forgot password
          </Link>
        )}

        <CommonButton
          btnText={"Login"}
          type={"submit"}
          extraClasses={"w-full mt-3"}
          disabled={formValidity}
        />
      </form>
    </section>
  );
}

export default LoginForm;
