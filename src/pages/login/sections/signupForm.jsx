import { useEffect, useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import { isFormValid } from "../../../shared";
import { useForm } from "../../../hooks/useForm";

function SignupForm() {
  const { signupFormData, setSignupFormData, handleSignup } = useForm();
  const [formValidity, setFormValidity] = useState(true);

  useEffect(() => {
    setFormValidity(!isFormValid(signupFormData)?.valid);
  }, [signupFormData]);

  return (
    <section className="flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-96 mt-4">
        <CommonInput
          autoFocus={true}
          placeholder={"Enter name"}
          name={"name"}
          key={"name"}
          type={"text"}
          id={"name"}
          required={true}
          className={
            "border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent"
          }
          value={signupFormData?.name}
          formData={signupFormData}
          setFormData={setSignupFormData}
        />
        <CommonInput
          placeholder={"Enter email"}
          name={"email"}
          key={"email"}
          type={"email"}
          id={"email"}
          required={true}
          className={
            "border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent"
          }
          value={signupFormData?.email}
          formData={signupFormData}
          setFormData={setSignupFormData}
        />
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
          value={signupFormData?.password}
          formData={signupFormData}
          setFormData={setSignupFormData}
        />
        <CommonInput
          placeholder={"Re-enter password"}
          name={"reEnteredPassword"}
          key={"reEnteredPassword"}
          type={"password"}
          id={"reEnteredPassword"}
          required={true}
          className={
            "border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent"
          }
          value={signupFormData?.reEnteredPassword}
          formData={signupFormData}
          setFormData={setSignupFormData}
        />

        <CommonButton
          btnText={"Signup"}
          type={"submit"}
          extraClasses={"w-full mt-3"}
          handleOnClick={() => handleSignup()}
          disabled={formValidity}
        />
      </form>
    </section>
  );
}

export default SignupForm;
