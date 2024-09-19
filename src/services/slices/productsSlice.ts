import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
import { PRODUCTS } from "../../utils/variables";

export interface productsState {
  products: Product[];
}

const initialState: productsState = {
  products: PRODUCTS,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
