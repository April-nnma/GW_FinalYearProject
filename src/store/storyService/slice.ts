import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateStory } from "types";
import { getStoriesThunk } from "./thunk";

type StoryServiceInitialState = {
  storiesList?: CreateStory[];
  isFetchingStories?: boolean;
};

const initialState: StoryServiceInitialState = {
};

const storyServiceSlice = createSlice({
  name: "storyService",
  initialState,
  reducers: {
    addStory(state, action: PayloadAction<CreateStory>) {
      state.storiesList = [...(state.storiesList || []), action.payload];
    },
    setStory(state, action: PayloadAction<CreateStory[]>) {
      state.storiesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoriesThunk.pending, (state) => {
        state.isFetchingStories = true;
      })
      .addCase(getStoriesThunk.fulfilled, (state, { payload }) => {
        state.storiesList = payload;
        state.isFetchingStories = false;
      })
      .addCase(getStoriesThunk.rejected, (state) => {
        state.isFetchingStories = false;
      });
  },
});

export const { actions: storyServiceActions, reducer: storyServiceReducer } =
  storyServiceSlice;
