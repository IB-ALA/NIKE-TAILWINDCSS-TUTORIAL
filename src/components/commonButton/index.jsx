import CommonIMG from "../commonImg";

function CommonButton({
  className,
  btnText,
  handleOnClick,
  afterTextImg,
  beforeTextImg,
  imgClassName,
  imgAlt,
  extraClasses,
  type,
  disabled,
  btnTitle,
}) {
  return (
    <button
      onClick={handleOnClick || null}
      className={
        className ||
        `flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white standard-btn-hover ${extraClasses} disabled:opacity-65 disabled:cursor-not-allowed`
      }
      type={type || "button"}
      disabled={disabled || false}
      title={btnTitle || null}
    >
      {beforeTextImg && (
        <CommonIMG
          imgSrc={afterTextImg}
          imgAlt={imgAlt || null}
          imgClassName={imgClassName || null}
        />
      )}
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
