import { createSlice } from "@reduxjs/toolkit";
import { getPostsLikeThunk } from "store/postService";
import { PostLike } from "types";


interface LikeServiceInitialState {
  likes: PostLike[];
  loading: boolean;
  error: string | null;
}

const initialState: LikeServiceInitialState = {
  likes: [],
  loading: false,
  error: null,
};


const likeServiceSlice = createSlice({
  name: "likeService",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsLikeThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsLikeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.likes = action.payload;
      })
      .addCase(getPostsLikeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.toString();
      });
  },
});

export const { actions: likeServiceActions, reducer: likeServiceReducer } =
  likeServiceSlice;
