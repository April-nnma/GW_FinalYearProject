//middle wares => callAPI => tạo req lên server => đợi server trả về rep => middle dispatch lên store redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { authService, userService } from "services";
import { getToken, sleep } from "utils";

//payload chính là 1 cái rep trả về từ server
export const loginThunk = createAsyncThunk(
  "authService/login",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await authService.login(payload);
      //console.log("data: ", data.data.content);
      await sleep();

      return data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserByTokenThunk = createAsyncThunk(
  "authService/getUserByToken",
  async (_, { rejectWithValue }) => {
    try {
      // Lấy token dưới localStorage
      const token = getToken();
      console.log(token)
      // Nếu user đã đăng nhập => có token
      if (!token) return;
      const data = await userService.getUserByToken({
        token : token
      });
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);