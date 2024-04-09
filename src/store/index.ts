import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserByTokenThunk } from "./authService";

export const store = configureStore({
  reducer: rootReducer,
});
//dispatch action khi client vào trang web
store.dispatch(getUserByTokenThunk());

type AppDispatch = (typeof store)["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)["getState"]>;
