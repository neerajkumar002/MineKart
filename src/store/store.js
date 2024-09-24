import { configureStore } from "@reduxjs/toolkit";
import shopProductSlice from "./shop/products-slice";

export const store = configureStore({
  reducer: {
    shopProducts: shopProductSlice,
  },
});
