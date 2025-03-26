import DarkModeToggler from "../../components/darkModeToggler";

function LoginPage() {
  return (
    <main className="relative dark:bg-[hsl(0,0%,5%)] text-dark-2">
      <DarkModeToggler />
      <div>Login Page</div>
    </main>
  );
}

export default LoginPage;
