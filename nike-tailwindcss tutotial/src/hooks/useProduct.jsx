import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import useFetch from "./useFetch";
import { toast } from "react-toastify";

export function useProduct() {
  const {
    productDetails,
    setProductDetails,
    location,
    products,
    setProducts,
    currentPage,
  } = useContext(GlobalContext);
  const [productId, setProductId] = useState(getSearchProductIdFromURL());
  const { run: getAllProducts, data, isLoading, error } = useFetch();

  useEffect(() => {
    setProductId(getSearchProductIdFromURL());
  }, [location]);

  useEffect(() => {
    if (productId && currentPage === "productdetails") {
      setProductDetails({ ...getProduct(productId) });
    }
    // console.log(productId);
  }, [productId]);

  async function fetchProducts() {
    try {
      const savedProducts = JSON.parse(sessionStorage.getItem("savedProducts"));

      if (!savedProducts) {
        const dbProducts = await getAllProducts(
          "http://localhost:5000/products"
        );

        sessionStorage.setItem(
          "savedProducts",
          JSON.stringify([...dbProducts?.products])
        );
        // sessionStorage.removeItem("savedProducts");
        setProducts([...dbProducts?.products]);
      } else setProducts([...savedProducts]);
    } catch (err) {
      console.error(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  function getSearchProductIdFromURL() {
    const queryParams = new URLSearchParams(location?.search);
    return queryParams.get("id");
  }

  function getProduct(productId) {
    let matchingProduct;
    if (products?.length !== 0) {
      products?.forEach((product) => {
        if (productId == product?.id) {
          matchingProduct = product;
        }
      });

      if (matchingProduct) {
        // console.log(matchingProduct);
        return matchingProduct;
      } else {
        toast.error("Coundn't get product details. Try again later.", {
          hideProgressBar: true,
        });
      }
    } else {
      // means there was an error
    }
  }

  return {
    productDetails,
    setProductDetails,
    productId,
    getProduct,
    products,
    fetchProducts,
    data,
    isLoading,
    error,
  };
}
