import { useNavigate } from "react-router-dom";
import AddedToCart from "../addedToCart";
import CommonIMG from "../commonImg";
import ProductItemControls from "../productItemControls";
import WishlistIcon from "../wishlistIcon";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { formatCurrency } from "../../shared";

function ProductItem({ img, name, price, id, sizes, forWishList }) {
  const { registeredUser, cartItems } = useContext(GlobalContext);

  let inCart = cartItems?.findIndex((cartItem) => cartItem.id === id) > -1;
  // use a better (complete) check..

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/productdetails?id=${id}`);
      }}
      className={`${
        forWishList === true ? "rounded-md" : "rounded-[20px]"
      } shadow-3xl bg-dark-1 dark:shadow-[#31313164] flex flex-col items-center p-3 font-montserrat cursor-pointer relative`}
    >
      {registeredUser && <WishlistIcon forWishList={forWishList} id={id} />}
      <div
        className={`${
          forWishList === true ? "flex sm:gap-5 gap-2 w-full" : ""
        }`}
      >
        <div
          className={`${
            forWishList === true
              ? "border-r sm:pr-2 pr-1 dark:border-r-slate-800"
              : ""
          }`}
        >
          <CommonIMG
            imgSrc={img}
            imgHeight={forWishList ? 80 : 200}
            imgWidth={forWishList ? 80 : 200}
            imgClassName={
              forWishList
                ? "my-1 sm:w-[80px] w-[55px] sm:h-[80px] h-[55px]"
                : "my-6"
            }
          />
        </div>

        <div>
          <p
            className={`${
              forWishList ? "sm:text-lg sm:mt-2 text-md mt-1" : "text-lg mt-2"
            } text-coral-red text-center`}
          >
            {name}
          </p>

          <p
            className={`text-coral-red ${
              forWishList
                ? "sm:text-lg sm:mt-2 text-md mt-1"
                : "text-center text-lg mt-2"
            }`}
          >
            ₵{formatCurrency(price)}
          </p>
        </div>
      </div>

      {inCart ? (
        <AddedToCart forWishList={forWishList} />
      ) : (
        <ProductItemControls id={id} sizes={sizes} />
      )}
    </div>
  );
}

export default ProductItem;
