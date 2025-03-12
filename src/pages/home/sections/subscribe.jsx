import { useEffect, useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";

function Subscribe() {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({ newsletterSubcriber: "" });
  const [buttonTitle, setButtonTitle] = useState("Subscribe");

  useEffect(() => {
    checkEmail(
      formData.newsletterSubcriber,
      setIsValid,
      "Subscribe",
      setButtonTitle
    );
  }, [formData]);

  function checkEmail(emailToBeChecked, setValidity, initialMsg, setErrorMsg) {
    let errorMessage;
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+\.)([a-z]{2,3})?$/;

    if (!emailToBeChecked.match(emailRegex)) {
      setValidity(false);
      if (emailToBeChecked !== "") {
        errorMessage = "Please enter a valid email address";
      } else {
        errorMessage = "Please enter an email";
      }
      setErrorMsg(errorMessage);
    } else {
      setValidity(true);
      setErrorMsg(initialMsg);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // form form logic or api call here
    console.log(formData);
    setFormData({ newsletterSubcriber: "" });
  }

  return (
    <section
      id="contact-us"
      className="flex justify-between items-center gap-10 max-container max-lg:flex-col"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-[40%]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <form
        onSubmit={handleSubmit}
        id="newsletter-form"
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <CommonInput
          type="email"
          name="newsletterSubcriber"
          id="newsletterSubcriber"
          placeholder="subscribe@nike.com"
          className="input"
          required={true}
          value={formData.newsletterSubcriber}
          setFormData={setFormData}
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <CommonButton
            type={"submit"}
            btnText={"Sign Up"}
            extraClasses={"w-full"}
            disabled={!isValid}
            btnTitle={buttonTitle}
          />
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
