import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/types";

export interface cartState {
  cartProducts: CartProduct[];
  totalPrice: number;
}

const initialState: cartState = {
  cartProducts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
