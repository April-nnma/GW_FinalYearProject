import { createAsyncThunk } from "@reduxjs/toolkit";
import { likeService } from "services/likeService";
import { postService } from "services/postService";

export const getPostsThunk = createAsyncThunk(
  "postService/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await postService.getPost();
      return response.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostsLikeThunk = createAsyncThunk(
  "likeService/getLikesByUserAndPost",
  async (
    { userId, postId }: { userId: number; postId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await likeService.getLikesByUserAndPost(userId, postId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
