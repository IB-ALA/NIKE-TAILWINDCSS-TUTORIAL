function CommonIMG({
  imgSrc,
  imgAlt,
  imgClassName,
  imgWidth,
  imgHeight,
  handleOnClick,
}) {
  return (
    <img
      src={imgSrc}
      width={imgWidth || ""}
      height={imgHeight || ""}
      alt={imgAlt || "Image"}
      className={imgClassName || ""}
      onClick={handleOnClick || null}
    />
  );
}

export default CommonIMG;
