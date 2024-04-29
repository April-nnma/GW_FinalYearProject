import { apiInstance } from "constant/apiInstance";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_USER_SERVICES_API,
});

export const authService = {
  register: (data: RegisterSchemaType) => api.post("/register", data),
  // giữ thông tin login khi f5 mà ko mất => lưu xuống localStorage
  login: (data: LoginSchemaType) =>
    api.post<ApiResponse<UserLogin>>("/login", data),

  //getUserByToken: () => api.get<ApiResponse<UserLogin>>("/Info"),
};