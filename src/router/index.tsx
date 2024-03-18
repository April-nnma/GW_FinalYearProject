import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { Login, Register, Home } from "pages";
import { MainLayout, AuthLayout } from "../components";

export const router: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //     path: PATH.account,
      //     element: <Account />
      // }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
