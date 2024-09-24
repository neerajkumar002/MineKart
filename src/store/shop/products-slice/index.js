import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productsList: [],
};

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProducts: () => {},
  },
});

export default shoppingProductSlice.reducer;
