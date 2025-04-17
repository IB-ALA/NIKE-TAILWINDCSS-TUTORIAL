function CommonInput({
  className,
  name,
  id,
  type,
  placeholder,
  required,
  autoFocus,
  value,
  handleOnChange,
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
      onChange={(e) => handleOnChange(e)}
    />
  );
}

export default CommonInput;
