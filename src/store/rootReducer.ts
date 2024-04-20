import { combineReducers } from "@reduxjs/toolkit";
import { authServiceReducer } from "./authService";
import { userServiceReducer } from "./userService";
import { postServiceReducer } from "./postService";

export const rootReducer = combineReducers({
  authService: authServiceReducer,
  userService: userServiceReducer,
  postService: postServiceReducer,
});


