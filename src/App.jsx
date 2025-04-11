import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Layout from "./pages/layout";
import ProductListPage from "./pages/products/product_list";
import ProductDetailsPage from "./pages/products/product_details";
import OrdersPage from "./pages/orders";
import CardPage from "./pages/cart";

function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <HomePage /> },
        { path: "products", element: <ProductListPage /> },
        { path: "/productdetails", element: <ProductDetailsPage /> },
        { path: "/orders", element: <OrdersPage /> },
        { path: "/cart", element: <CardPage /> },
      ],
    },
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
