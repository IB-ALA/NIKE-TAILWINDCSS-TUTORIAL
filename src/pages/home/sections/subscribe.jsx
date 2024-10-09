import CommonButton from "../../../components/commonButton";

function Subscribe() {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center gap-10 max-container max-lg:flex-col"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-[40%]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <form className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="subscribe@nike.com"
          className="input"
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <CommonButton
            type={"submit"}
            btnText={"Sign Up"}
            extraClasses={"w-full"}
            handleOnClick={(e) => e.preventDefault()}
          />
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
