import { createBrowserRouter } from "react-router";
import Home from "../pages/home/home";
import Detail from "../pages/detail/detail";
import Layout from "../layout";
import Login from "../pages/login/login";
import ProtectedRoutes from "./protectedRoutes";
import Admin from "../pages/admin/admin";
import SearchPage from "../pages/search/searchPage";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Admin />,
        path: "/admin",
      },
    ],
  },

  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Detail />,
        path: "/detail/:id",
      },
      {
        element: <SearchPage />,
        path: "/search",
      },
    ],
  },
]);
