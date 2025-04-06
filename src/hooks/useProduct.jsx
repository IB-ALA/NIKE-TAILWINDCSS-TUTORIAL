import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { products } from "../data/products";

export function useProduct() {
  const { productDetails, setProductDetails, location } =
    useContext(GlobalContext);
  const [productId, setProductId] = useState(getSearchProductIdFromURL());

  useEffect(() => {
    setProductId(getSearchProductIdFromURL());
  }, [location]);

  useEffect(() => {
    setProductDetails({ ...getProduct(productId) });
  }, [productId]);

  function getSearchProductIdFromURL() {
    const queryParams = new URLSearchParams(location?.search);
    return queryParams.get("id");
  }

  function getProduct(id) {
    // api call for the productdetails (async)
    let product;
    products.forEach((productItem) => {
      if (productItem.id === id) {
        // console.log(productItem);

        product = productItem;
      }
    });
    return product;
  }

  return { productDetails, setProductDetails };
}
