import { apiInstance } from "constant/apiInstance";
import { UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_USER_INFO_API,
});
export const userService = {
  getUser: () => api.get<UserLogin>("/getUser"),
  getUserByToken: (data: { token: string }) => {
    return api.post<ApiResponse<UserLogin>>("/getInfo", data);
  },
};
