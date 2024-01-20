import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";
import Home from "./components/Home/Home";

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
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export { router };
