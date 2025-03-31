import { useState } from "react";
import { LoginForm, LoginOptions, SignupForm, SignUpOption } from "./sections";

function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <main className="relative w-full md:h-screen dark:bg-[hsl(0,0%,5%)] text-dark-2 pt-28 border-coral-red border">
      <article>
        <h3 className="text-center text-xl font-montserrat leading-none py-3">
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
          <SignupForm />
        )}
      </article>
      <section>
        <SignUpOption login={login} setLogin={setLogin} />
      </section>
    </main>
  );
}

export default LoginPage;
