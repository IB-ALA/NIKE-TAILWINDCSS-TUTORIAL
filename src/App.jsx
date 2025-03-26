import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function AppRoutes() {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/signin", element: <LoginPage /> },
  ]);

  return element;
}

export default function App() {
  return (
    <div>
      <AppRoutes />
      {/* <Routes>
        <Route path={"/"} element={<NotFoundPage />} />
      </Routes> */}
    </div>
  );
}
