import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../types/types";
import { getTotalPrice } from "../../utils/helpers";

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
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const findItem = state.cartProducts.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.cartProducts);
    },
    removeAll(state, action: PayloadAction<CartProduct>) {
      state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
      state.totalPrice = getTotalPrice(state.cartProducts);
    },
    removeOneProduct(state, action: PayloadAction<CartProduct>) {
      const findItem = state.cartProducts.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = getTotalPrice(state.cartProducts);
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
