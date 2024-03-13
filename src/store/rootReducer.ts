import { combineReducers } from "@reduxjs/toolkit";
import { userServiceReducer } from "./userService";

export const rootReducer = combineReducers({
  userService: userServiceReducer,
});
