import { apiInstance } from "constant/apiInstance";
import { CreatePost } from "types/PostService";

const api = apiInstance({
  baseURL: import.meta.env.VITE_POST_SERVICES_API,
});
export const postService = {
  getPost: (): Promise<ApiResponse<CreatePost[]>> =>
    api
      .get<ApiResponse<CreatePost[]>>("/getPost")
      .then((response) => response.data),
  createPost: async (data: CreatePost): Promise<ApiResponse<any>> => {
    const response = await api.post<ApiResponse<any>>("/createPost", data);
    return response.data;
  },
};
