import CommonButton from "../commonButton";
import { useWishList } from "../../hooks/useWishList";
import Spinner from "../spinner";
function WishlistIcon({ id, forWishList }) {
  const { wishList, handleAddRemoveWishItem, isLoading } = useWishList();

  const inWishlist = wishList?.includes(id);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`absolute ${
        forWishList === true ? "right-3" : "left-3"
      } top-3`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <CommonButton
          btnText={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width={forWishList ? "35" : "40"}
              height={forWishList ? "35" : "40"}
              className={`${inWishlist ? "fill-coral-red" : "fill-slate-300"} ${
                forWishList
                  ? "sm:w-[35px] w-[28px] sm:h-[35px] h-[28px]"
                  : "w-[40px] h-[40px]"
              }`}
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path>
            </svg>
          }
          className={"bg-transparent"}
          btnTitle={inWishlist ? "Added to Wishlist" : "Add to Wishlist"}
          handleOnClick={() => {
            handleAddRemoveWishItem(id);
          }}
        />
      )}
    </div>
  );
}

export default WishlistIcon;
