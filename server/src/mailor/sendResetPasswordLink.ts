import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { sendEmail } from "./sendEmail";

dotenv.config();

export async function sendResetPasswordEmail(
  to: string,
  token: string
): Promise<any> {
  const templatePath = path.join(__dirname, "templates", "resetPassword.ejs");

  const html: string = await ejs.renderFile(templatePath, {
    email: to,
    token: token,
  });

  const result = sendEmail(to, "Reset your password", html);

  return result;
}
