import { apiInstance } from "constant/apiInstance";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_USER_SERVICES_API,
});

export const userService = {
  register: (data: RegisterSchemaType) => api.post("/register", data),
  login: (data: LoginSchemaType) =>
    api.post<ApiResponse<UserLogin>>("/login", data),

  // giữ thông tin login khi f5 mà ko mất => lưu xuống localStorage
  // axios({
  //   method: "POST",
  //   url: "http://localhost:3000/auth/register",
  //   data,
  //   headers: {
  //     Authorization: "Bearer " + validToken(),
  //   },
  // }),
};

// export const loginUser = async (data) => {
//   try {
//     const reponse = await axios.post("http://localhost:3000/auth/login", data);
//     console.log(reponse.data);
//     localStorage.setItem("token", reponse.data.content.token);
//   } catch (error) {
//     console.error("Error login user:", error);
//   }
// };
