import { RouteObject } from "react-router-dom";
import { PATH } from "constant";

import { Login, Register } from "pages";
// import { AuthLayout } from "../components";

export const router: RouteObject[] = [
  {
    // element: <AuthLayout />,
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
