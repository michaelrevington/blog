import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export { router };
