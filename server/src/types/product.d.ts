export interface Color {
  name: string;
  image: string;
}

export interface ProductDetails {
  colors: Color[];
  description: string;
}

export interface ProductType {
  id: string;
  name: string;
  image: string;
  price: number;
  sizes: number[];
  productDetails?: ProductDetails;
}

export interface NewsletterProduct
  extends Pick<Product, "id" | "name" | "image"> {}
