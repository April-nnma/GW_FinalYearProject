import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";
import { loginThunk } from ".";
type UserServiceInitialState = {
  token?: string;
  userLogin?: UserLogin;
  isFetchingLogin?: boolean;
};
const initialState: UserServiceInitialState = {
  token: localStorage.getItem("token"),
  isFetchingLogin: false,
};

const userServiceSlice = createSlice({
  name: "userService",
  initialState,
  reducers: {}, //xử lý action đồng bộ
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isFetchingLogin = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isFetchingLogin = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log("payload: ", payload);
        //lưu token xg localStorage
        localStorage.setItem("TOKEN", payload.token);
        //set lại user
        state.userLogin = payload;
        state.isFetchingLogin = false;

        // state.token = payload;
      });
  }, //xử lý action bất đồng bộ => callAPI
});
export const { actions: userServiceAction, reducer: userServiceReducer } =
  userServiceSlice;
