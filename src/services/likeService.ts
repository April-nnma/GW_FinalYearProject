import { apiInstance } from "constant/apiInstance";

// Tạo một instance của API từ `apiInstance`
const api = apiInstance({
  baseURL: import.meta.env.VITE_LIKE_SERVICE_API,
});

export const likeService = {
  getPostLikes: (postId) => {
    return api.get(`/post-like/${postId}`);
  },
  addPostLike: (userId, postId) => {
    return api.post(`/post-like/${userId}/${postId}`);
  },
  deletePostLike: (likeId) => {
    return api.delete(`/post-like/${likeId}`);
  },
};
