import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allPlants: (state, action) => {
      state.products = action.payload.data;
    },
  },
});

export const { allPlants } = productSlice.actions;

export default productSlice.reducer;
