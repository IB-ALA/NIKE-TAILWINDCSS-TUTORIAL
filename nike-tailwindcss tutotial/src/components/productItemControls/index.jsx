import { useRef } from "react";
import CommonButton from "../commonButton";
import { useCart } from "../../hooks/useCart";

function ProductItemControls({ sizes, id, useSpaceBetween }) {
  const itemSize = useRef();
  const itemQuantity = useRef();
  const { handleAddToCart } = useCart();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex justify-between w-full mt-3 flex-wrap"
    >
      <div
        className={`flex min-w-28 max-w-44 justify-between ${
          useSpaceBetween ? "mx-0" : "mx-auto"
        } my-2`}
      >
        <div className="flex flex-col mr-2">
          <label htmlFor="size" className="text-[14px] text-slate-500">
            Size
          </label>

          <select
            name="size"
            id=""
            className="max-w-12 min-w-8 w-full border rounded-sm dark:outline-none outline-blue-400 bg-transparent dark:border-gray-800 text-gray-500"
            ref={itemSize}
          >
            {sizes?.map((size) => (
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
            className="max-w-12 min-w-8 w-full border rounded-sm dark:outline-none outline-blue-400 bg-transparent dark:border-gray-800 pl-1 text-gray-500"
            step="1"
            min="1"
            max="9"
            defaultValue="1"
            ref={itemQuantity}
          />
        </div>
      </div>

      <div
        className={`flex items-center ${
          useSpaceBetween ? "mx-0" : "mx-auto"
        } px-1`}
      >
        <CommonButton
          btnText={"Add To Cart"}
          className={
            "text-white font-bold bg-coral-red w-full px-3 py-2 rounded-lg flex-shrink-0 standard-btn-hover"
          }
          handleOnClick={() => {
            const item = {
              id,
              quantity: Number(itemQuantity?.current?.value),
              size: itemSize?.current?.value,
              color: "default",
            };

            handleAddToCart(item);
          }}
          btnTitle={"Add to cart"}
        />
      </div>
    </div>
  );
}

export default ProductItemControls;
