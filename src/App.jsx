import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";

function AppRoutes() {
  const element = useRoutes([{ path: "/", element: <HomePage /> }]);

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
