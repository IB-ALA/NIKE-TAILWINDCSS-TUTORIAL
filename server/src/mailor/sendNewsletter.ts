import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { sendEmail } from "./sendEmail";
import Product, { Product as ProductDocument } from "../models/Product";
import { createProduct } from "../utils/createProduct";
import { Product as ProductType } from "../types/product";

dotenv.config();

export const sendNewsletterEmail = async (to: string): Promise<any> => {
  const templatePath = path.join(__dirname, "templates", "newsletter.ejs");

  const products: ProductType[] = await Product.find()
    .limit(3)
    .lean<ProductType[]>();
  const newsletterProducts = createProduct(products as ProductDocument[]);

  const featuredProducts = newsletterProducts || [];

  const html: string = await ejs.renderFile(templatePath, {
    logoUrl: `https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241557/header-logo_evxexk.png`,
    featuredProducts,
  });

  const result = sendEmail(to, "🎉 Thanks for Subscribing to NIKE!", html);

  return result;
};
