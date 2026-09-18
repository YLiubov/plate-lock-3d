import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ViewerPage from "./pages/ViewerPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "viewer",
          element: <ViewerPage />
        },
        {
          path: "about",
          element: <AboutPage />
        }
      ]
    }
  ],
  {
    basename: "/plate-lock-3d"
  }
);

export default router;
