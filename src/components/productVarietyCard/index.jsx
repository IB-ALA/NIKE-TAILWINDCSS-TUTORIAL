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
    <div className="flex pr-4">
      <input
        type="radio"
        name="variety"
        id={name}
        className={"hidden"}
        ref={varietyInputElem}
        checked={isChosen}
        onChange={(e) => {
          setBigImg(img);
          setChosenVariety(name);

          // e.target.checked ? setChosenVariety(name) : null;
        }}
      />
      <label
        htmlFor={name}
        className={`w-20 h-20 p-2 border rounded-xl cursor-pointer mb-2 ${
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
          imgClassName={"object-contain"}
        />
      </label>
    </div>
  );
}

export default ProductVarietyCard;
