import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CategoryState = {
  categories: ["Coding","UI","React","React Native"],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<any>) => {
      state.categories = [...state.categories, action.payload];
    },
    deleteCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { addCategory,deleteCategories } = categorySlice.actions;


export default categorySlice.reducer;
