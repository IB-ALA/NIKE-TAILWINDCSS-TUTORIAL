import CommonIMG from "../commonImg";

function CommonButton({
  className,
  btnText,
  handleOnClick,
  afterTextImg,
  imgClassName,
  imgAlt,
  extraClasses,
  type,
  disabled,
}) {
  return (
    <button
      onClick={handleOnClick || null}
      className={
        className ||
        `flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white hover:bg-opacity-90 transition-all duration-200 ease-in-out ${extraClasses} disabled:opacity-65 disabled:cursor-not-allowed`
      }
      type={type || "button"}
      disabled={disabled || false}
    >
      {btnText || "Click Me"}
      {afterTextImg && (
        <CommonIMG
          imgSrc={afterTextImg}
          imgAlt={imgAlt || null}
          imgClassName={imgClassName || null}
        />
      )}
    </button>
  );
}

export default CommonButton;
