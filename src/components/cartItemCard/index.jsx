import { FaTrashAlt } from "react-icons/fa";
import { useProduct } from "../../hooks/useProduct";
import { useCart } from "../../hooks/useCart";
import { formatCurrency, getItemVarietyImg } from "../../shared";
import CommonIMG from "../commonImg";
import CommonButton from "../commonButton";

function CartItemCard({ item }) {
  const { name, price, image, sizes, productDetails } = useProduct().getProduct(
    item?.id
  );

  const { handleQuantityChange, handleSizeChange, handleRemoveFromCart } =
    useCart();

  const cartItem = { name, price, image, productDetails, sizes, ...item };

  return (
    <div
      key={cartItem?.id}
      className="flex flex-col md:flex-row gap-6 bg-white shadow-xl rounded-xl p-6 items-start mb-6"
    >
      <CommonIMG
        imgSrc={
          cartItem?.color === "default"
            ? cartItem?.image
            : getItemVarietyImg(cartItem, cartItem?.color)
        }
        imgAlt={`${cartItem?.name} image`}
        imgClassName={"w-32 h-32 object-contain"}
      />

      <div className="flex-1">
        <h2 className="text-xl text-coral-red font-semibold">
          {cartItem?.name}
        </h2>

        <p className="text-lg text-coral-red font-medium mt-1">
          ${formatCurrency(cartItem?.price)}
        </p>

        <div className="mt-4 flex gap-6 flex-wrap items-center">
          <div>
            <label className="text-sm text-slate-gray block mb-1 font-medium">
              Size
            </label>

            <select
              value={cartItem?.size}
              onChange={(e) => handleSizeChange(cartItem?.id, e.target.value)}
              className="border rounded-md px-3 py-2"
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

            <div className="flex items-center border rounded-md">
              <CommonButton
                btnText={"−"}
                disabled={item?.quantity === 1}
                className="px-3 py-1 border-r text-lg font-bold disabled:cursor-not-allowed disabled:opacity-30"
                handleOnClick={() => handleQuantityChange(item?.id, -1)}
              />

              <span className="px-4">{item?.quantity}</span>

              <CommonButton
                btnText={"+"}
                className={"px-3 py-1 border-l text-lg font-bold"}
                handleOnClick={() => handleQuantityChange(item?.id, 1)}
              />
            </div>
          </div>
        </div>
      </div>

      <CommonButton
        btnText={<FaTrashAlt size={20} />}
        className={
          "text-red-500 hover:text-red-600 transition-colors mt-4 md:mt-0 md:ml-auto"
        }
        handleOnClick={() => handleRemoveFromCart(item?.id)}
        btnTitle={"Remove item"}
      />
    </div>
  );
}

export default CartItemCard;
