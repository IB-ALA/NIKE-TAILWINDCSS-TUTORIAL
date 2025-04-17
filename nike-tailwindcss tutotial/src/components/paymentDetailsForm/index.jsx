import { useRef } from "react";
import CommonButton from "./../../components/commonButton";
import CommonInput from "./../../components/commonInput";
import { FcCellPhone } from "react-icons/fc";
import { FiCreditCard } from "react-icons/fi";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

function PaymentDetailsForm({
  mobileMoneyFormData,
  setMobileMoneyFormData,
  cardFormData,
  setCardFormData,
  errors,
  paymentMethod,
  setPaymentMethod,
}) {
  const momoProviderRef = useRef();

  function handleMobileMoneyInputChange(e) {
    let { name, value } = e.target;
    console.log(mobileMoneyFormData?.momoProvider);
    console.log(value);

    setMobileMoneyFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCardInputChange(e) {
    let { name, value } = e.target;

    if (name === "cardNumber") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    if (name === "cardExpiry") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 4)
        .replace(/(.{2})/, "$1/")
        .trim();
    }

    setCardFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="lg:border lg:dark:border-slate-800 lg:p-3 lg:rounded-lg flex-1">
      <div>
        <h3 className="text-coral-red font-semibold text-lg mb-4">
          Payment Method
        </h3>

        <div className="flex gap-4 max-lg:mb-3">
          <CommonButton
            btnText={"Mobile Money"}
            btnTitle={"Mobile Money"}
            className={`flex-1 p-2 border rounded-xl ${
              paymentMethod === "mobileMoney"
                ? "bg-red-500 text-white dark:border-none"
                : "dark:border-slate-700 "
            }`}
            handleOnClick={() => setPaymentMethod("mobileMoney")}
          />

          <CommonButton
            btnText={"Card"}
            btnTitle={"card"}
            className={`flex-1 p-2 border rounded-xl ${
              paymentMethod === "card"
                ? "bg-red-500 text-white dark:border-none"
                : "dark:border-slate-700 "
            }`}
            handleOnClick={() => setPaymentMethod("card")}
          />
        </div>
      </div>

      {/* Momo Details */}
      {paymentMethod === "mobileMoney" && (
        <div>
          <h4 className="font-medium mb-2 lg:mt-4 flex items-center gap-2">
            <FcCellPhone />
            Mobile Money
          </h4>

          <div className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="momoProvider">Provider</label>

              <select
                name="momoProvider"
                id="momoProvider"
                className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
                onChange={handleMobileMoneyInputChange}
                value={mobileMoneyFormData?.momoProvider}
                ref={momoProviderRef}
              >
                <option id="momoProvider" value="MTN">
                  MTN
                </option>
                <option id="momoProvider" value="telecel">
                  Telecel
                </option>
                <option id="momoProvider" value="at">
                  AT
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="momoNumber">Mobile number</label>

              <CommonInput
                name={"momoNumber"}
                id={"momoNumber"}
                type={"tel"}
                value={mobileMoneyFormData.momoNumber}
                handleOnChange={handleMobileMoneyInputChange}
                className={
                  "w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
                }
                placeholder={"1234567890"}
              />
              {errors.momoNumber && (
                <p className="text-red-500 text-sm">{errors.momoNumber}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div>
          <h4 className="font-medium mb-2 lg:mt-4 flex items-center gap-2">
            <FiCreditCard />
            Card Details
          </h4>

          <div className="space-y-3">
            <div>
              <label>Card Number</label>

              <CommonInput
                name={"cardNumber"}
                value={cardFormData.cardNumber}
                handleOnChange={handleCardInputChange}
                className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
                placeholder="1234 5678 9012 3456"
              />

              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber}</p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label>Expiry (MM/YY)</label>

                <CommonInput
                  name="cardExpiry"
                  id="cardExpiry"
                  value={cardFormData.cardExpiry}
                  handleOnChange={handleCardInputChange}
                  className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
                  placeholder="MM/YY"
                />

                {errors.cardExpiry && (
                  <p className="text-red-500 text-sm">{errors.cardExpiry}</p>
                )}
              </div>

              <div className="flex-1">
                <label>CVC</label>

                <CommonInput
                  name="cardCvc"
                  id="cardCvc"
                  value={cardFormData.cardCvc}
                  handleOnChange={handleCardInputChange}
                  className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
                  placeholder="123"
                />

                {errors.cardCvc && (
                  <p className="text-red-500 text-sm">{errors.cardCvc}</p>
                )}
              </div>
            </div>

            <div className="flex gap-2 text-2xl text-gray-600 mt-1">
              <FaCcVisa />
              <FaCcMastercard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentDetailsForm;
