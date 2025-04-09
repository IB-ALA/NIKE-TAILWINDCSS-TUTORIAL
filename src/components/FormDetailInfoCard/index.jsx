import CommonInput from "../commonInput";

function FormDetailInfoCard({ formData, setFormData, id }) {
  return (
    <div className="flex flex-col border-b  last:border-none border-b-slate-100 dark:border-b-slate-800 pl-1 pb-1">
      <label
        htmlFor={id}
        className="capitalize text-coral-full cursor-pointer text-[12px]"
      >
        {id === "phoneNumber" ? "phone number" : id}
      </label>
      <CommonInput
        className={`border-none bg-transparent w-full pl-2 text-slate-gray text-[15px] outline-none active:bg-slate-50 active:dark:bg-slate-900 ${
          id !== "email" && "capitalize"
        }`}
        formData={formData}
        setFormData={setFormData}
        type={id === "email" ? "email" : id === "phoneNumber" ? "tel" : "text"}
        placeholder={`Enter ${id === "phoneNumber" ? "phone number" : id}`}
        name={id}
        id={id}
        value={formData[id]}
      />
    </div>
  );
}

export default FormDetailInfoCard;
