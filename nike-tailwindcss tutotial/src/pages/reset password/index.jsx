import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DarkModeToggler from "../../components/darkModeToggler";
import { headerLogo } from "../../assets/images";
import CommonIMG from "../../components/commonImg";
import { ResetPasswordForm } from "./sections";

function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [notification, setNotification] = useState("");

  return (
    <main className="relative w-full min-h-screen h-full dark:bg-[hsl(0,0%,5%)] text-dark-2 pt-20 flex flex-col justify-center font-montserrat">
      <article>
        <a
          href="/home"
          className="flex justify-center py-2 fixed top-0 left-0 right-0 bg-white dark:bg-[hsl(0,0%,5%)]"
        >
          <CommonIMG imgSrc={headerLogo} imgAlt={"Logo"} imgWidth={150} />
        </a>
        <DarkModeToggler />
      </article>

      <article className="w-full max-w-md p-6 rounded-3xl border-gray-200 mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Reset Your Password
        </h2>

        {notification && (
          <p className="text-slate-600 text-md text-center mb-4 px-4 py-6 rounded-md bg-red-200">
            {notification}
          </p>
        )}

        <section>
          <ResetPasswordForm
            email={email}
            token={token}
            setNotification={setNotification}
          />
        </section>

        <section>
          <div className="flex w-full items-center justify-center mt-7">
            <span className="h-[1px] bg-slate-200 dark:bg-slate-900 w-full "></span>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Session expires in 10 minutes. Make sure both passwords match.
          </p>
        </section>
      </article>
    </main>
  );
}

export default ResetPasswordPage;
