import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productsList: [],
};

export const fetchProductsDetails = createAsyncThunk(
  "/shop/products",
  async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProducts: (state) => {
      state.productsList = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(fetchProductsDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productsList = [];
      });
  },
});

export const { setProducts } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
