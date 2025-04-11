import { useEffect, useRef, useState } from "react";
import CommonIMG from "../commonImg";

function ProductVarietyCard({
  name,
  img,
  bigImg,
  setBigImg,
  setChosenVariety,
}) {
  const [isChosen, setIsChosen] = useState(false);
  const varietyInputElem = useRef();

  useEffect(() => {
    // console.log(varietyInputElem?.current?.checked);
    bigImg === img ? setIsChosen(true) : setIsChosen(false);
  }, [bigImg]);

  useEffect(() => {
    bigImg === img && setChosenVariety(name);
  }, []);

  return (
    <div className="flex sm:pr-4 pr-2">
      <input
        type="radio"
        name="variety"
        id={name}
        className={"hidden"}
        ref={varietyInputElem}
        checked={isChosen}
        onChange={() => {
          setBigImg(img);
          setChosenVariety(name);
        }}
      />
      <label
        htmlFor={name}
        className={`sm:w-20 sm:h-20 w-16 h-16 sm:p-2 p-1 border rounded-xl cursor-pointer sm:mb-2 mb-1 ${
          isChosen
            ? "border-coral-red shadow-md shadow-coral-red scale-105 transition-all ease-in-out"
            : "border-slate-150 dark:border-slate-700"
        }`}
        title={isChosen ? `Chosen type: ${name}` : ` Choose ${name} type`}
      >
        <CommonIMG
          imgAlt={name}
          imgHeight={70}
          imgWidth={70}
          imgSrc={img}
          imgClassName={
            "object-contain sm:w-[70px] sm:h-[70px] w-[55px] h-[55px]"
          }
        />
      </label>
    </div>
  );
}

export default ProductVarietyCard;
