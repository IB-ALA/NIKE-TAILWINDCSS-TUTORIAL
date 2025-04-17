import CommonInput from "../commonInput";

function FormDetailInfoCard({
  formData,
  setFormData,
  id,
  parentKeys = [],
  errors,
}) {
  // from here
  const value = formData[id];

  const currentPath = [...parentKeys, id];

  const updateNestedFormData = (path, newValue) => {
    setFormData((prevData) => {
      const newData = structuredClone(prevData);
      let ref = newData;
      for (let i = 0; i < path.length - 1; i++) {
        if (!ref[path[i]]) ref[path[i]] = {};
        ref = ref[path[i]];
      }
      ref[path[path.length - 1]] = newValue;
      return newData;
    });
  };
  // to here: AI, dealing with a deep obj

  return (
    <div className="flex flex-col border-b  last:border-none border-b-slate-100 dark:border-b-slate-800 pl-1 pb-1">
      <label
        htmlFor={id}
        className={`${
          id === "cvv" ? "uppercase" : id === "zip" ? "uppercase" : "capitalize"
        } text-coral-full cursor-pointer text-[12px]`}
      >
        {id === "phoneNumber"
          ? "phone number"
          : id === "momoProvider"
          ? "Provider"
          : id === "momoNumber"
          ? "momo number"
          : id === "cardNumber"
          ? "card number"
          : id === "cardCvc"
          ? "cvc"
          : id}
      </label>
      {typeof formData[id] === "object" ? (
        // we struggled with this so i just changed the billingDetail object to a flat one instead of the deep one.
        // check context (Globalstate)
        // later, we may write a code to deal with that alone.
        Object.keys(formData[id]).map((key) => {
          if (Object.prototype.hasOwnProperty.call(formData[id], key)) {
            return (
              <FormDetailInfoCard
                key={key}
                formData={formData[id]}
                setFormData={
                  (val) =>
                    updateNestedFormData([...currentPath], {
                      ...formData[id],
                      [key]: val,
                    })
                  // setFormData({ ...formData[id], [id]: newFormData })
                }
                id={key}
                parentKeys={currentPath}
              />
            );
          }
          return null;
        })
      ) : (
        <div>
          <CommonInput
            className={`border-none bg-transparent w-full pl-2 text-slate-gray text-[15px] outline-none active:bg-slate-50 active:dark:bg-slate-900 ${
              id !== "email" ? "capitalize" : ""
            }`}
            handleOnChange={(e) => {
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
              setFormData((prev) => ({ ...prev, [name]: value }));
            }}
            type={
              id === "email"
                ? "email"
                : id === "phoneNumber"
                ? "tel"
                : id === "cvv"
                ? "number"
                : "text"
            }
            placeholder={`Enter ${
              id === "phoneNumber"
                ? "phone number"
                : id === "cardNumber"
                ? "card number"
                : id
            }`}
            name={id}
            id={id}
            value={value}
          />

          {errors[id] && (
            <p className="text-red-500 text-[11px]">{errors[id]}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FormDetailInfoCard;
