import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { sendEmail } from "./sendEmail";
import Product from "../models/Product";

dotenv.config();

export const sendNewsletterEmail = async (to: string): Promise<any> => {
  const templatePath = path.join(__dirname, "templates", "newsletter.ejs");

  let products = await Product.find().limit(3);
  const newsletterProducts = products.map((product) => {
    return {
      id: product._id,
      ...product,
    };
  });

  const featuredProducts = newsletterProducts || [];

  const html: string = await ejs.renderFile(templatePath, {
    logoUrl: `https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241557/header-logo_evxexk.png`,
    featuredProducts,
  });

  const result = sendEmail(to, "🎉 Thanks for Subscribing to NIKE!", html);

  return result;
};
