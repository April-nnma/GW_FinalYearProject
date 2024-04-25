import { apiInstance } from "constant/apiInstance";
import { CreateStory } from "types/StoryService";

const api = apiInstance({
  baseURL: import.meta.env.VITE_POST_SERVICES_API,
});
export const storyService = {
  getStory: (): Promise<ApiResponse<CreateStory[]>> =>
    api
      .get<ApiResponse<CreateStory[]>>("/getStory")
      .then((response) => response.data),
  createStory: async (data: FormData): Promise<ApiResponse<CreateStory>> => {
    console.log(data);
    const response = await api.post<ApiResponse<CreateStory>>(
      "/createStory",
      data
    );
    return response.data;
  },
};
