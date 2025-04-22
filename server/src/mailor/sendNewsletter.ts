import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { newProducts } from "../data/product";
import { sendEmail } from "./sendEmail";

dotenv.config();

export const sendNewsletterEmail = async (to: string): Promise<any> => {
  const templatePath = path.join(__dirname, "templates", "newsletter.ejs");

  const html: string = await ejs.renderFile(templatePath, {
    logoUrl: `https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241557/header-logo_evxexk.png`,
    featuredProducts: newProducts,
  });

  const result = sendEmail(to, "🎉 Thanks for Subscribing to NIKE!", html);

  return result;
};
