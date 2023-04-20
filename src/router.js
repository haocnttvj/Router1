import { createBrowserRouter } from "react-router-dom";

import ProductDetail from "./ProductDetail";
import Layout from "./layout";
import Admin from "./Admin";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
