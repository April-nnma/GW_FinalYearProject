import { RouteObject } from "react-router-dom";
import { PATH } from "../constant/config";

export const router: RouteObject[] = [
  {
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
