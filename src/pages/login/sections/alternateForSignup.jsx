import CommonButton from "../../../components/commonButton";

function SignUpOption({ login, setLogin }) {
  return (
    <section className="flex flex-col items-center my-4">
      <div className="flex w-full items-center justify-center">
        <span className="h-[1px] bg-slate-200 w-96"></span>
      </div>

      <p className="w-96 text-center info-text mt-2">
        {login ? "Do not have an account?" : "Already have an account?"}

        <CommonButton
          className="text-coral-red mx-2 underline underline-offset-2 hover:text-[hsl(6,100%,50%)] transition-colors hover:dark:text-[hsl(6,100%,66%)] dark:text-[hsl(6,100%,70%)]"
          btnText={login ? "Sign Up" : "Log In"}
          handleOnClick={() => setLogin(!login)}
        />
      </p>
    </section>
  );
}

export default SignUpOption;
