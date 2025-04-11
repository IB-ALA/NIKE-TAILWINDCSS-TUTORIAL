import CommonButton from "../../../components/commonButton";

function SignUpOption({ login, setLogin }) {
  return (
    <section className="flex flex-col items-center mt-4 pb-4 sm:w-96 w-80 mx-auto">
      <div className="flex w-full items-center justify-center">
        <span className="h-[1px] bg-slate-200 dark:bg-slate-900 w-full "></span>
      </div>

      <p className="w-full text-center sm:info-text text-md font-montserrat text-slate-gray mt-2">
        {login ? "Do not have an account?" : "Already have an account?"}

        <CommonButton
          className="text-coral-full mx-2 underline underline-offset-2"
          btnText={login ? "Sign Up" : "Log In"}
          handleOnClick={() => setLogin(!login)}
        />
      </p>
    </section>
  );
}

export default SignUpOption;
