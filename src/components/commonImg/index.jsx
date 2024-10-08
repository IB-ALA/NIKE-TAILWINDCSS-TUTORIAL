function CommonIMG({ imgSrc, imgAlt, imgClassName, imgWidth, imgHeight }) {
  return (
    <img
      src={imgSrc}
      width={imgWidth || ""}
      height={imgHeight || ""}
      alt={imgAlt || "Image"}
      className={imgClassName || ""}
    />
  );
}

export default CommonIMG;
