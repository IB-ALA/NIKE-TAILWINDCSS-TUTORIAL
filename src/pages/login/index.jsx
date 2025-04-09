import { useState } from "react";
import { LoginForm, LoginOptions, SignupForm, SignUpOption } from "./sections";
import CommonIMG from "../../components/commonImg";
import { headerLogo } from "../../assets/images";
import DarkModeToggler from "../../components/darkModeToggler";

function LoginPage() {
  const [login, setLogin] = useState(true);

  // we have to add the auth too.. one who is logged in can't access this page.

  return (
    <main className="relative w-full min-h-screen h-full dark:bg-[hsl(0,0%,5%)] text-dark-2 pt-20 flex flex-col justify-center">
      <article>
        <a
          href="/home"
          className="flex justify-center py-2 fixed top-0 left-0 right-0 bg-white dark:bg-[hsl(0,0%,5%)]"
        >
          <CommonIMG imgSrc={headerLogo} imgAlt={"Logo"} imgWidth={150} />
        </a>
        <DarkModeToggler />
      </article>

      <article>
        <h3 className="text-center text-xl font-montserrat leading-none pt-3 pb-5 font-bold">
          {login ? "Log in" : "Sign up"} to Nike
        </h3>
        {login ? (
          <>
            <section>
              <LoginOptions />
            </section>
            <section>
              <LoginForm />
            </section>
          </>
        ) : (
          <section>
            <SignupForm />
          </section>
        )}
      </article>

      <article>
        <SignUpOption login={login} setLogin={setLogin} />
      </article>
    </main>
  );
}

export default LoginPage;
