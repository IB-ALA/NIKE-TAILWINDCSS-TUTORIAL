import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { sendEmail } from "./sendEmail";

dotenv.config();

export async function sendPasswordResetConfirmationEmail(
  to: string,
  name: string
): Promise<any> {
  const templatePath = path.join(
    __dirname,
    "templates",
    "passwordResetConfirmation.ejs"
  );

  const html: string = await ejs.renderFile(templatePath, {
    name,
  });

  const result = sendEmail(to, "Successful Password Reset", html);

  return result;
}
