import { useEffect, useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import useFetch from "../../../hooks/useFetch";
import { toast } from "react-toastify";
import Spinner from "../../../components/spinner";

function Subscribe() {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({ newsletterSubscriber: "" });
  const [buttonTitle, setButtonTitle] = useState("Subscribe");
  const { run: submitNewsletterEmail, isLoading, data, error } = useFetch();

  useEffect(() => {
    checkEmail(
      formData.newsletterSubscriber,
      setIsValid,
      "Subscribe",
      setButtonTitle
    );
  }, [formData]);

  useEffect(() => {
    console.log({ data }, { error });
  }, [data, error]);

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

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log(formData);

    try {
      const payload = {
        newsletterSubscriber: {
          email: formData.newsletterSubscriber,
        },
      };

      const result = await submitNewsletterEmail(
        "http://localhost:5000/newsletter/subscribe",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      // console.log({ result });
      toast.success(result?.message, { hideProgressBar: true });
      setFormData({ newsletterSubscriber: "" });
    } catch (error) {
      toast.error(error?.message, { hideProgressBar: true });
    }
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
          name="newsletterSubscriber"
          id="newsletterSubscriber"
          placeholder="subscribe@nike.com"
          className="input dark:border-slate-800"
          required={true}
          value={formData.newsletterSubscriber}
          handleOnChange={(e) => {
            let { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
          }}
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <CommonButton
              type={"submit"}
              btnText={"Sign Up"}
              extraClasses={"w-full"}
              disabled={!isValid}
              btnTitle={buttonTitle}
            />
          )}
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
