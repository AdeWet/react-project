import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BrowsePage from "../components/browse/BrowsePage";
import CartPage from "../components/cart/CartPage";
import GenericErrorPage from "../components/generic/GenericErrorPage";
import ProductInfoPage from "../components/productInfo/ProductInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "browse/:productId",
        element: <ProductInfoPage />,
      },
      {
        path: "/",
        element: <BrowsePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: (
          <GenericErrorPage
            error={{
              title: "Whoopsie Daisy",
              message:
                "Sorry! The page you were looking for could not be found.",
              buttonText: "Go back to home page",
            }}
          />
        ),
      },
    ],
  },
]);

export default router;
