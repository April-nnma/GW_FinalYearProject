import { apiInstance } from "constant/apiInstance";
import { UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_USER_SERVICES_API,
});
export const userService = {
  getUser: () => api.get<ApiResponse<UserLogin[]>>("/getUser"),
  getUserByToken: (data: { token: string }) => {
    return api.post<{ data: UserLogin }>("/getInfo", data);
  },
};
