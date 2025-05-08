import { Product as ProductDocument } from "../models/Product";
// import { Product as ProductType } from "../types/product";

export function createProduct(products: ProductDocument[]) {
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
