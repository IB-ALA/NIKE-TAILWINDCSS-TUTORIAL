import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Layout from "./pages/layout";

function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <HomePage /> },
        { path: "signin", element: <LoginPage /> },
      ],
    },
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
