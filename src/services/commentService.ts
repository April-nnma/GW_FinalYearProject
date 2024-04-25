import { apiInstance } from "constant/apiInstance";
import { PostComment } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_LIKE_SERVICES_API,
});

export const commentService = {
  getCommentsByPostId: async (postId: number): Promise<PostComment[]> => {
    try {
      const response = await api.get<PostComment[]>(`/${postId}/comments`);
      return response.data;
    } catch (error) {
      console.error("Error getting comments:", error);
      throw error;
    }
  },

  createComment: async (
    postId: number,
    userId: number,
    newComment: PostComment
  ): Promise<PostComment> => {
    try {
      const response = await api.post<PostComment>(
        `${userId}/${postId}`,
        newComment
      );
      return response.data;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  },

  deleteComment: async (commentId: number): Promise<void> => {
    try {
      await api.delete(`/comments/${commentId}`);
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  },

  // updateComment: async (
  //   commentId: number,
  //   updatedComment: PostComment
  // ): Promise<PostComment> => {
  //   try {
  //     const response = await api.patch<PostComment>(
  //       `${Id}`,
  //       updatedComment
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error updating comment:", error);
  //     throw error;
  //   }
  // },
};