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
}) {
  return (
    <button
      onClick={handleOnClick || null}
      className={
        className ||
        `flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white ${extraClasses}`
      }
      type={type || "button"}
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
