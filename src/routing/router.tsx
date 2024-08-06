import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BrowsePage from "../components/browse/BrowsePage";
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
