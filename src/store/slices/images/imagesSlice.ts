import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageModel } from "../../../types";

const initialState: { images: imageModel[] } = { images: [] };

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<imageModel>) => {
      state.images.push(action.payload);
    },
    addImages: (state, action: PayloadAction<imageModel[]>) => {
      state.images.push(...action.payload);
    },
  },
});

export const { addImage, addImages } = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
