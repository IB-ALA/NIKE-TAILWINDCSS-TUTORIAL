import CommonButton from "../../../components/commonButton";

function LoginOptions() {
  return (
    <article className="flex flex-col items-center py-5 sm:w-96 w-80 mx-auto">
      {/* add the button images */}
      <CommonButton
        btnText={"Log in with Google"}
        className={
          "rounded-full w-full border border-slate-400 dark:border-slate-800 py-3 font-montserrat leading-none mb-4"
        }
      />
      <CommonButton
        btnText={"Log in with Apple"}
        className={
          "rounded-full w-full border border-slate-400 dark:border-slate-800 py-3 font-montserrat leading-none mb-4"
        }
      />
      <div className="flex w-full items-center justify-center">
        <span className="h-[1px] bg-slate-200 dark:bg-slate-900 w-[172px]"></span>
        <p className="text-slate-500 mx-2 font-montserrat">OR</p>{" "}
        <span className="h-[1px] bg-slate-200 dark:bg-slate-900 w-[172px]"></span>
      </div>
    </article>
  );
}

export default LoginOptions;
