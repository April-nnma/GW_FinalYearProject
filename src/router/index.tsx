import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
// import {} from "components";
import { Register, Login } from "pages";

export const router: RouteObject[] = [
  {
    // element: <Login />,
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
