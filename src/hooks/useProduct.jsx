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
    // console.log(productId);
  }, [productId]);

  function getSearchProductIdFromURL() {
    const queryParams = new URLSearchParams(location?.search);
    return queryParams.get("id");
  }

  async function getProduct(productId) {
    let matchingProduct;
    // let products = ;
    if (products?.length !== 0) {
      // products = products?.map((product) => new NewProduct(product));
      products?.forEach((product) => {
        if (productId == product?.id) {
          matchingProduct = product;
        }
      });

      if (matchingProduct) {
        return matchingProduct;
      }
    } else {
      // means there was an error
    }
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

  return { productDetails, setProductDetails, productId, getProduct };
}
