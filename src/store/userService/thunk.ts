//middle wares => callAPI => tạo req lên server => đợi server trả về rep => middle dispatch lên store redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { userService } from "services";
import { sleep } from "utils";

//payload chính là 1 cái rep trả về từ server
export const loginThunk = createAsyncThunk(
  "userService/login",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await userService.login(payload);
      //console.log("data: ", data.data.content);
      await sleep();

      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
