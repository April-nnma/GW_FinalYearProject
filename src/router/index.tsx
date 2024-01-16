import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { Login } from "components";

export const router: RouteObject[] = [
  {
    // element: <Login />,
    children: [
      {
        path: PATH.login,
      },
      {
        path: PATH.register,
      },
    ],
  },
];
