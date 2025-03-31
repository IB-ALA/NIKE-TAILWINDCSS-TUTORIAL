import { LoginForm, LoginOptions } from "./sections";

function LoginPage() {
  return (
    <main className="relative w-full md:h-screen dark:bg-[hsl(0,0%,5%)] text-dark-2 pt-28 border-coral-red border">
      {/* <div className="pt-28">Login Page</div> */}
      <h3 className="text-center text-xl font-montserrat leading-none py-3">
        Log in to Nike
      </h3>
      <section>
        <LoginOptions />
      </section>
      <section>
        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
