import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BrowsePage from "../components/browse/Browse";
import CartPage from "../components/cart/Cart";
import ErrorPage from "../components/error/Error";

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
