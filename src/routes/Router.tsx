import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppRouter = createBrowserRouter([
    {
    path: "/",
    element: <Navigate to={"/home"} />,
    },
    {
      path: "/home",
      element: <Home />
    },

  ]);