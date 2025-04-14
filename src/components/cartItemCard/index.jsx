import { FaTrashAlt } from "react-icons/fa";
import { useProduct } from "../../hooks/useProduct";
import { useCart } from "../../hooks/useCart";
import { formatCurrency, getItemVarietyImg } from "../../shared";
import CommonIMG from "../commonImg";
import CommonButton from "../commonButton";
import { useNavigate } from "react-router-dom";

function CartItemCard({ item }) {
  const { name, price, image, sizes, productDetails } = useProduct().getProduct(
    item?.id
  );

  const navigate = useNavigate();

  const { handleQuantityChange, handleSizeChange, handleRemoveFromCart } =
    useCart();

  const cartItem = { name, price, image, productDetails, sizes, ...item };

  return (
    <div
      key={cartItem?.id}
      className="flex sm:gap-6 gap-2 shadow-xl rounded-xl sm:p-6 p-2 items-start mb-6 last:mb-0 bg-dark-1 dark:shadow-[#1e1e1e64]"
    >
      <CommonIMG
        imgSrc={
          cartItem?.color === "default"
            ? cartItem?.image
            : getItemVarietyImg(cartItem, cartItem?.color)
        }
        imgAlt={`${cartItem?.name} image`}
        imgClassName={
          "sm:w-32 sm:h-32 w-20 h-20 object-contain cursor-pointer max-sm:mx-auto"
        }
        handleOnClick={() => navigate(`/productdetails?id=${item?.id}`)}
      />

      <div className="flex-1">
        <h2 className="sm:text-xl text-md text-coral-red font-semibold">
          {cartItem?.name}
        </h2>

        <p className="sm:text-lg text-sm text-coral-red font-medium sm:mt-1 max-sm:mb-1">
          ${formatCurrency(cartItem?.price)}
        </p>

        <div className="sm:mt-4 flex sm:gap-6 gap-2 items-center">
          <div>
            <label className="text-sm text-slate-gray block mb-1 font-medium">
              Size
            </label>

            <select
              value={cartItem?.size}
              onChange={(e) => handleSizeChange(cartItem?.id, e.target.value)}
              className="border dark:border-slate-800 rounded-md sm:px-3 sm:py-2 p-1 bg-transparent dark:outline-none outline-blue-400"
            >
              {sizes && sizes?.length > 0
                ? sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-gray block mb-1 font-medium">
              Quantity
            </label>

            <div className="flex items-center border dark:border-slate-800  rounded-md">
              <CommonButton
                btnText={"−"}
                disabled={item?.quantity === 1}
                className="px-3 py-1 border-r dark:border-r-slate-800 text-lg font-bold disabled:cursor-not-allowed disabled:opacity-30"
                handleOnClick={() => handleQuantityChange(item?.id, -1)}
              />

              <span className="px-4">{item?.quantity}</span>

              <CommonButton
                btnText={"+"}
                className={
                  "px-3 py-1 border-l dark:border-l-slate-800  text-lg font-bold"
                }
                handleOnClick={() => handleQuantityChange(item?.id, 1)}
              />
            </div>
          </div>
        </div>
      </div>

      <CommonButton
        btnText={<FaTrashAlt size={20} className="max-sm:w-4" />}
        className={
          "text-red-500 hover:text-red-600 transition-colors sm:mt-4 md:mt-0 mt-1 md:ml-auto"
        }
        handleOnClick={() => handleRemoveFromCart(item?.id)}
        btnTitle={"Remove item"}
      />
    </div>
  );
}

export default CartItemCard;
