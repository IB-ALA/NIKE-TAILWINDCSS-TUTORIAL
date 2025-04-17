import { useEffect, useRef, useState } from "react";
import useUser from "./../../../hooks/useUser";
import DeliveryDetailsForm from "../../../components/deliveryDetailsForm";
import PaymentDetailsForm from "../../../components/paymentDetailsForm";
import CommonButton from "../../../components/commonButton";

function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("mobileMoney");
  const [deliveryFormData, setDeliveryFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });
  const [cardFormData, setCardFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [mobileMoneyFormData, setMobileMoneyFormData] = useState({
    momoProvider: "",
    momoNumber: "",
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const { registeredUser } = useUser();

  // if user exits, we use the save old checkout data
  useEffect(() => {
    setDeliveryFormData({ ...registeredUser?.deliveryDetails });
    setMobileMoneyFormData({
      momoProvider: registeredUser?.billingDetails?.momoProvider,
      momoNumber: registeredUser?.billingDetails?.momoNumber,
    });
    setCardFormData({
      cardNumber: registeredUser?.billingDetails?.cardNumber,
      cardCvc: registeredUser?.billingDetails?.cardCvc,
      cardExpiry: registeredUser?.billingDetails?.cardExpiry,
    });
  }, [registeredUser]);

  function handleSubmit(e) {
    e.preventDefault();
    const { newErrors, valid } = isFormValid(deliveryFormData);
    setErrors(newErrors);

    if (paymentMethod === "card") {
      setErrors((prev) => ({
        ...prev,
        ...isFormValid(cardFormData).newErrors,
      }));

      if (valid && isFormValid(cardFormData).valid) {
        console.log({ deliveryFormData });
        console.log({ cardFormData });
        alert("Payment processed successfully! 🚀");
        // call api here. if old details exits, ask to over ride it,
        // else, save new details, for regidter users ONLY!!
      } else {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (paymentMethod === "mobileMoney") {
      setErrors((prev) => ({
        ...prev,
        ...isFormValid(mobileMoneyFormData).newErrors,
      }));

      if (valid && isFormValid(mobileMoneyFormData).valid) {
        console.log({ deliveryFormData });
        console.log({ mobileMoneyFormData });
        alert("Payment processed successfully! 🚀");
      } else {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <form
      className="max-lg:max-w-2xl mx-auto max-lg:border bg-dark-1 max-lg:dark:border-slate-900 rounded-2xl lg:shadow-3xl shadow-md dark:shadow-[#32323264] p-6 space-y-6"
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
    >
      <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        {/* Delivery Info */}
        <DeliveryDetailsForm
          deliveryFormData={deliveryFormData}
          setDeliveryFormData={setDeliveryFormData}
          errors={errors}
        />

        {/* Payment Method */}
        <PaymentDetailsForm
          mobileMoneyFormData={mobileMoneyFormData}
          setMobileMoneyFormData={setMobileMoneyFormData}
          cardFormData={cardFormData}
          setCardFormData={setCardFormData}
          errors={errors}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </section>

      <section>
        <CommonButton
          btnText={"Pay Now"}
          className={
            "w-full mt-6 bg-coral-red hover:bg-red-500 text-white py-2 rounded-xl transition"
          }
          btnTitle={"Complete order"}
          type={"submit"}
        />
      </section>
    </form>
  );
}

export default CheckoutForm;
