import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";
import { loginThunk } from ".";
import { getToken } from "utils";
type UserServiceInitialState = {
  token?: string;
  userLogin?: UserLogin;
  isFetchingLogin?: boolean;
};
const initialState: UserServiceInitialState = {
  token: getToken(),
  isFetchingLogin: false,
};

const userServiceSlice = createSlice({
  name: "userService",
  initialState,
  reducers: {
    //xử lý action đồng bộ
    logOut: (state, { payload }: PayloadAction<string>) => {},
  },
  extraReducers(builder) {
    //xử lý action bất đồng bộ => callAPI
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
        state.token = payload.token;
        //set lại user
        state.userLogin = payload;
        state.isFetchingLogin = false;

        // state.token = payload;
      });
  },
});
export const { actions: userServiceAction, reducer: userServiceReducer } =
  userServiceSlice;
