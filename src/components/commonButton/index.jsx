function CommonButton({ className, btnText, handleOnClick }) {
  return (
    <button onClick={handleOnClick || null} className={className || ""}>
      {btnText || "Click Me"}
    </button>
  );
}

export default CommonButton;
