import { Product } from "../models/Product";

export function createProduct(products: Product[]) {
  const createdProducts = products.map(
    ({ _id, name, image, price, sizes, productDetails }) => {
      return {
        id: _id,
        name,
        image,
        price,
        sizes,
        productDetails,
      };
    }
  );

  return createdProducts;
}
