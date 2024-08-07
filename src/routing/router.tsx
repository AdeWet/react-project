import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BrowsePage from "../components/browse/BrowsePage";
import CartPage from "../components/cart/CartPage";
import ErrorPage from "../components/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "browse",
        element: <BrowsePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
