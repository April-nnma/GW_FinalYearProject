import { apiInstance } from "constant/apiInstance";
import { UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_USER_INFO_API,
});
export const userInfo = {
  getUser: () => api.get("/getUser"),
  getUserByToken: () => api.get<ApiResponse<UserLogin>>("/getInfo"),
};
