import { useState } from "react";
import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";
import CommonInput from "../commonInput";
import { useRef } from "react";
import { useEffect } from "react";

function ProductItem({ img, name, price, id, sizes }) {
  // const [quantity, setQuantity] = useState(0);
  const itemSize = useRef();
  const itemQuantity = useRef();

  // useEffect(() => {
  //   console.log(itemSize.current.value);
  // }, []);

  return (
    <div className="border border-slate-400 flex flex-col items-center p-3">
      <div className="">
        <CommonIMG
          imgSrc={img}
          imgHeight={200}
          imgWidth={200}
          imgClassName={"border mt-5 "}
        />
      </div>

      <p className="info-text border mt-2">{name}</p>

      <p className="info-text border mt-2">₵{price}</p>

      <div className="flex flex-row border justify-between w-full mt-3">
        <div className="flex border min-w-28 justify-between ">
          <div className="flex flex-col">
            <label htmlFor="" className="">
              Sizes
            </label>
            {/* <CommonInput className={""} /> */}
            <select
              name="size"
              id=""
              className="max-w-12 min-w-8 w-12 border"
              ref={itemSize}
              // onChange={(e) => {
              //   console.log(quantity);
              //   setQuantity(e.target.value);
              // }}
            >
              {sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="">
              Quantity
            </label>
            {/* <CommonInput
              type={"number"}
              id={"quantity"}
              name={"quantity"}
              // value={quantity}
              defaultValue={1}
              setFormData={setQuantity}
              className={"max-w-12 min-w-8 w-10 border "}
            /> */}
            <input
              type="number"
              className="max-w-12 min-w-8 w-10 border"
              step="1"
              min="1"
              max="9"
              defaultValue="1"
              ref={itemQuantity}
            />
          </div>
        </div>

        <div className="flex items-center">
          <CommonButton
            btnText={"Add To Cart"}
            className={
              "text-white font-montserrat font-bold bg-coral-red p-3 rounded-lg"
            }
            handleOnClick={() => {
              const item = {
                id,
                quantity: itemQuantity.current.value,
                size: itemSize.current.value,
              };
              console.log(item);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
