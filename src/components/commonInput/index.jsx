function CommonInput({
  className,
  name,
  id,
  type,
  placeholder,
  required,
  autoFocus,
  value,
  formData,
  setFormData,
}) {
  return (
    <input
      type={type || "text"}
      className={className || ""}
      name={name}
      id={id}
      placeholder={placeholder || "Enter value"}
      required={required || false}
      autoFocus={autoFocus || false}
      value={value || ""}
      onChange={(e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    />
  );
}

export default CommonInput;
