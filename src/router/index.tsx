import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout } from "components";
import { Login, Register } from "pages";

export const router: RouteObject[] = [
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
