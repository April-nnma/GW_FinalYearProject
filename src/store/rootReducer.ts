import { combineReducers } from "@reduxjs/toolkit";
import { authServiceReducer } from "./authService";
import { userServiceReducer } from "./userService";
import { postServiceReducer } from "./postService";
import { likeServiceReducer } from "./likeService";
import { storyServiceReducer } from "./storyService";

export const rootReducer = combineReducers({
  authService: authServiceReducer,
  userService: userServiceReducer,
  postService: postServiceReducer,
  likeService: likeServiceReducer,
  storyService: storyServiceReducer,
});
