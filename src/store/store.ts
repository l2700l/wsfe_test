import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./slices/images/imagesSlice";

const globalReducer = combineReducers({ images: imagesReducer });

export const store = configureStore({
  reducer: globalReducer,
});

export type RootState = ReturnType<typeof store.getState>;
