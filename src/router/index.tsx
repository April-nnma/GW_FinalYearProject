import { RouteObject } from "react-router-dom";
import { PATH } from "constant";

import { Login, Register, Home } from "pages";
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
      {
        path: PATH.home,
        element: <Home />,
      },
    ],
  },
];
