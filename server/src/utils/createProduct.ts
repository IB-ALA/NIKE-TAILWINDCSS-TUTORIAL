import { Types } from "mongoose";
import { ProductDocument } from "../models/Product";
import { ProductType } from "../types/product";
// import { Product as ProductType } from "../types/product";

export function createProduct(products: ProductDocument[]): ProductType[] {
  return products.map(({ _id, name, image, price, sizes, productDetails }) => ({
    id: (_id as Types.ObjectId).toString(),
    name,
    image,
    price,
    sizes,
    productDetails,
  }));
}
