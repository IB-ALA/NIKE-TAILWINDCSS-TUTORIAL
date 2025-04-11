import { useEffect } from "react";
import { useWishList } from "../../hooks/useWishList";
import { products } from "../../data/products";
import WishListItemCard from "../wishListItemCard";

function WishList({ showList, setShowList }) {
  const { wishList } = useWishList();

  // get the product - asycn and stoed in session storage
  // render only the ones in the wishList

  // useEffect(() => {
  //   console.log(wishList?.length);
  //   console.log(showList);
  // }, []);

  return (
    <div
      // if you want the release animation you have to sacrifice the shadow
      // ${ showList === "wish-list" ? "animate-release" : "overflow-hidden"}
      className={`border-b last:mb-0 mb-1 border-b-slate-100 dark:border-slate-800`}
    >
      <p
        className={`cursor-pointer p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-950 sm:info-text text-md text-slate-gray ${
          showList === "wish-list" ? "bg-slate-100 dark:bg-slate-900" : ""
        }`}
        onClick={() => {
          showList === "wish-list"
            ? setShowList(null)
            : setShowList("wish-list");
        }}
      >
        Wish List
      </p>

      {showList === "wish-list" ? (
        wishList?.length > 0 ? (
          <div className="sm:ml-3 ml-1 border dark:border-slate-900 my-2 p-2 shadow-2xl rounded-md flex flex-col gap-3">
            {products
              .filter((item) => wishList?.includes(item.id))
              .map((product) => (
                <WishListItemCard key={product?.id} item={product} />
              ))}
          </div>
        ) : (
          <p className="ml-3 my-2 p-2 shadow-2xl rounded-md text-center text-coral-red sm:text-[16px] text-[14px] dark:bg-slate-950">
            No Products Added To Wish List.
          </p>
        )
      ) : null}
    </div>
  );
}

export default WishList;
