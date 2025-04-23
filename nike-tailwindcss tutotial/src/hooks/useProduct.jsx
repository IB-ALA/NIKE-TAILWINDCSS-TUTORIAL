import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import useFetch from "./useFetch";
import { toast } from "react-toastify";

export function useProduct() {
  const { productDetails, setProductDetails, location, products, setProducts } =
    useContext(GlobalContext);
  const [productId, setProductId] = useState(getSearchProductIdFromURL());
  const { run: getAllProducts, data, isLoading, error } = useFetch();

  useEffect(() => {
    setProductId(getSearchProductIdFromURL());
  }, [location]);

  useEffect(() => {
    getProduct(productId).then((result) => setProductDetails({ ...result }));
    // setProductDetails({ ...getProduct(productId) });
    // console.log(productId);
  }, [productId]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      let savedProducts = JSON.parse(sessionStorage.getItem("savedProducts"));

      if (!savedProducts) {
        savedProducts = await getAllProducts("http://localhost:5000/products");

        sessionStorage.setItem(
          "savedProducts",
          JSON.stringify([...savedProducts?.products])
        );
        // sessionStorage.removeItem("savedProducts");
        setProducts([...savedProducts?.products]);
      }
    } catch (error) {
      // console.log(error?.message);
      toast.error(error?.message, { hideProgressBar: true });
    }
  }

  function getSearchProductIdFromURL() {
    const queryParams = new URLSearchParams(location?.search);
    return queryParams.get("id");
  }

  async function getProduct(productId) {
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
