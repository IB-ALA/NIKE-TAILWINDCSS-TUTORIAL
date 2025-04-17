import { useContext } from "react";
import { GlobalContext } from "../context";

export function useWishList() {
  const { wishList, setWishList } = useContext(GlobalContext);

  function handleAddRemoveWishItem(id) {
    let copiedWishlist = [...wishList];

    const inList = copiedWishlist?.includes(id);

    if (inList) {
      copiedWishlist = copiedWishlist?.filter(
        (wishlistItemID) => wishlistItemID !== id
      );
    } else {
      copiedWishlist?.push(id);
    }
    setWishList(copiedWishlist);
  }

  return { wishList, handleAddRemoveWishItem };
}
