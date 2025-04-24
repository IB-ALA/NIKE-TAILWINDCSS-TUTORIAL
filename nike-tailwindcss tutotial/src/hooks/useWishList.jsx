import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import useFetch from "./useFetch";
import { toast } from "react-toastify";

export function useWishList() {
  const { wishList, setWishList, registeredUser, products } =
    useContext(GlobalContext);
  const { run: getWishlist, data, isLoading, error } = useFetch();

  useEffect(() => {
    if (registeredUser?.id && products?.length > 0) {
      fetchWishlist();
    }
  }, []);

  async function handleAddRemoveWishItem(id) {
    const payload = {
      wishlistProduct: {
        productId: id,
      },
    };

    try {
      const result = await getWishlist(
        `http://localhost:5000/wishlist/${registeredUser.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
        }
      );

      if (result.wishlist) {
        setWishList([...result.wishlist]);
        sessionStorage.setItem(
          "savedWishlist",
          JSON.stringify([...result.wishlist])
        );
        toast.success(result?.message, { hideProgressBar: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  async function fetchWishlist() {
    try {
      let savedWishlist = JSON.parse(sessionStorage.getItem("savedWishlist"));

      if (!savedWishlist) {
        savedWishlist = await getWishlist(
          `http://localhost:5000/wishlist/${registeredUser?.id}`
        );

        sessionStorage.setItem(
          "savedWishlist",
          JSON.stringify([...savedWishlist?.wishlist])
        );
        // localStorage.removeItem("savedWishlist");

        setWishList([...savedWishlist?.wishlist]);
      }
    } catch (err) {
      // toast.error(err?.message, { hideProgressBar: true });
      console.error(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  return { wishList, handleAddRemoveWishItem, data, isLoading, error };
}
