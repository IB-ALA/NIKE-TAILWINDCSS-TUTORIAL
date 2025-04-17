import { FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import CommonInput from "./../../components/commonInput";
import { TfiEmail } from "react-icons/tfi";
import { PiCityLight } from "react-icons/pi";

function DeliveryDetailsForm({
  setDeliveryFormData,
  deliveryFormData,
  errors,
}) {
  function handleDeliveryInputChange(e) {
    let { name, value } = e.target;
    setDeliveryFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="lg:border lg:dark:border-slate-800 lg:p-3 lg:rounded-lg flex-1">
      <div>
        <h3 className="text-coral-red font-semibold text-lg mb-2">
          Delivery Details
        </h3>

        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="flex items-center gap-2">
              <FiUser />
              Name
            </label>
            <CommonInput
              name="name"
              id="name"
              placeholder={" "}
              value={deliveryFormData.name}
              handleOnChange={handleDeliveryInputChange}
              className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="flex items-center gap-2">
              <FiPhone />
              Phone
            </label>

            <CommonInput
              name={"phone"}
              handleOnChange={handleDeliveryInputChange}
              value={deliveryFormData.phone}
              className={
                "w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
              }
              id={"phone"}
              placeholder={" "}
              type={"tel"}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2">
              <TfiEmail />
              Email
            </label>
            <CommonInput
              name="email"
              id="email"
              type={"email"}
              placeholder={" "}
              value={deliveryFormData.email}
              handleOnChange={handleDeliveryInputChange}
              className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="flex items-center gap-2">
              <FiMapPin />
              Address
            </label>
            <CommonInput
              name="address"
              id="address"
              placeholder={" "}
              value={deliveryFormData.address}
              handleOnChange={handleDeliveryInputChange}
              className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="flex items-center gap-2">
              <PiCityLight />
              City
            </label>
            <CommonInput
              name="city"
              id="city"
              placeholder={" "}
              value={deliveryFormData.city}
              handleOnChange={handleDeliveryInputChange}
              className="w-full p-2 border rounded-xl outline-blue-500 bg-transparent dark:border-slate-800 capitalize"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDetailsForm;
