import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { sendEmail } from "./sendEmail";

dotenv.config();

export async function sendEmailVerificationEmail(
  to: string,
  name: string,
  verificationToken: string
): Promise<any> {
  const templatePath = path.join(__dirname, "templates", "verifyEmail.ejs");

  const verifyEmailLink = `${process.env.FRONTEND_ORIGIN}/verify-email/email=${to}&token=${verificationToken}`;

  const html: string = await ejs.renderFile(templatePath, {
    name,
    verifyEmailLink,
  });

  const result = sendEmail(to, "Email Confirmation", html);

  return result;
}
