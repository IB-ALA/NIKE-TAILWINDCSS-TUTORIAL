import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";
import { useRef } from "react";

function ProductItem({ img, name, price, id, sizes }) {
  const itemSize = useRef();
  const itemQuantity = useRef();

  return (
    <div className="rounded-[20px] shadow-xl bg-dark-1 dark:shadow-[#31313164] flex flex-col items-center p-3 font-montserrat">
      <div className="">
        <CommonIMG
          imgSrc={img}
          imgHeight={200}
          imgWidth={200}
          imgClassName={"my-6"}
        />
      </div>

      <p className="text-lg mt-2 text-coral-red">{name}</p>

      <p className="text-lg mt-2 text-coral-red">₵{price}</p>
      {/* max-w-96 mx-auto */}
      <div className="flex justify-between w-full mt-3 flex-wrap">
        <div className="flex min-w-28 max-w-44 justify-between mx-auto my-2">
          <div className="flex flex-col mr-2">
            <label htmlFor="size" className="text-[14px] text-slate-500">
              Size
            </label>

            <select
              name="size"
              id=""
              className="max-w-12 min-w-8 w-full border rounded-sm outline-blue-500 bg-transparent dark:border-gray-800 text-gray-500"
              ref={itemSize}
            >
              {sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-[14px] text-slate-500">
              Quantity
            </label>

            <input
              type="number"
              className="max-w-12 min-w-8 w-full border rounded-sm outline-blue-500 bg-transparent dark:border-gray-800 pl-1 text-gray-500"
              step="1"
              min="1"
              max="9"
              defaultValue="1"
              ref={itemQuantity}
            />
          </div>
        </div>

        <div className="flex items-center mx-auto px-1">
          <CommonButton
            btnText={"Add To Cart"}
            className={
              "text-white font-bold bg-coral-red w-full px-3 py-2 rounded-lg flex-shrink-0 standard-btn-hover"
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
